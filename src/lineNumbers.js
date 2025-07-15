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

            const maxLines = 20;
            const lineHeight = parseFloat(getComputedStyle(lineNumberEl).lineHeight);
            const maxHeight = maxLines * lineHeight;

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

            // Set initial
            syncScroll();
            wrapper.removeEventListener('scroll', wrapper._lineScrollHandler);
            wrapper._lineScrollHandler = syncScroll;
            wrapper.addEventListener('scroll', syncScroll);
        }
    });
}

// Run initially
updateVisibleLineNumbers();

// Optional: Run again when tab is changed
document.querySelectorAll('[role="tab"]').forEach(tab => {
    tab.addEventListener('click', () => {
        setTimeout(updateVisibleLineNumbers, 10); // slight delay for DOM update
    });
});