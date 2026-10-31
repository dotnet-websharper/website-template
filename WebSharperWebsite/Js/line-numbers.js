document.addEventListener("DOMContentLoaded", () => {
    const scrollControllers = new WeakMap();

    function updateVisibleLineNumbers() {
        // Find the visible code block
        document.querySelectorAll('[role="tabpanel"]').forEach(panel => {
            const isVisible = !panel.classList.contains('hidden');

            if (!isVisible) return;

            const codeBlock = panel.querySelector('code');
            const lineNumberEl = panel.closest('.flex')?.querySelector('.line-numbers');
            const wrapper = panel

            if (codeBlock && lineNumberEl && wrapper) {
                const lineCount = codeBlock.textContent.split('\n').length;

                const lineHeight = parseFloat(getComputedStyle(lineNumberEl).lineHeight);

                // Fill the height available in the editor (so the code reaches
                // the bottom of the pane, right up to the Terminal / preview)
                // rather than stopping at a fixed number of lines and leaving
                // a gap above the Terminal panel.
                const container = wrapper.parentElement;
                const available = container ? container.clientHeight : 0;
                const maxHeight = available > 0 ? available : 20 * lineHeight;
                const maxLines = Math.max(1, Math.round(maxHeight / lineHeight));

                wrapper.style.maxHeight = `${maxHeight}px`;
                wrapper.style.overflowY = lineCount > maxLines ? 'auto' : 'hidden';
                lineNumberEl.style.maxHeight = `${maxHeight}px`;
                lineNumberEl.style.overflowY = lineCount > maxLines ? 'auto' : 'hidden';

                const syncScroll = () => {
                    const scrollTop = wrapper.scrollTop;
                    const startLine = Math.floor(scrollTop / lineHeight);
                    const visibleLines = Math.min(maxLines, lineCount - startLine);
                    const lines = Array.from({ length: visibleLines }, (_, i) => i + 1 + startLine).join('\n');
                    lineNumberEl.textContent = lines;
                };

                // remove any previous listener for this wrapper
                const prev = scrollControllers.get(wrapper);
                if (prev) prev.abort();

                const controller = new AbortController();
                scrollControllers.set(wrapper, controller);

                // initial render and bind listener
                syncScroll();
                wrapper.addEventListener('scroll', syncScroll, { signal: controller.signal, passive: true });

            }
        });
    }

    updateVisibleLineNumbers();

    // The available height depends on the layout; recompute on resize.
    window.addEventListener('resize', updateVisibleLineNumbers);

    document.querySelectorAll('[role="tab"]').forEach(tab => {
        tab.addEventListener('click', () => {
            setTimeout(updateVisibleLineNumbers, 10); // slight delay for DOM update
        });
    });
});