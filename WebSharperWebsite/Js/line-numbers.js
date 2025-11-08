// /Js/line-numbers.js (ESM)

(function init() {
  const run = () => {
    function updateVisibleLineNumbers() {
      document.querySelectorAll('[role="tabpanel"]').forEach(panel => {
        const isVisible = !panel.classList.contains('hidden');
        if (!isVisible) return;

        const codeBlock = panel.querySelector('code');

        // Narrow to your custom gutter, not Prism’s plugin class
        const lineNumberEl =
          panel.closest('.flex')?.querySelector('pre.line-numbers[aria-hidden="true"]');

        const wrapper = panel;
        if (!codeBlock || !lineNumberEl || !wrapper) return;

        const lines = Math.max(1, codeBlock.textContent.replace(/\n$/, '').split('\n').length);
        const lh = (() => {
          const v = parseFloat(getComputedStyle(lineNumberEl).lineHeight);
          if (Number.isFinite(v)) return v;
          const fs = parseFloat(getComputedStyle(lineNumberEl).fontSize);
          return Number.isFinite(fs) ? fs * 1.13 : 18; // fallback
        })();

        const maxLines = 20, maxH = maxLines * lh;
        wrapper.style.maxHeight = `${maxH}px`;
        wrapper.style.overflowY = lines > maxLines ? 'auto' : 'hidden';
        lineNumberEl.style.maxHeight = `${maxH}px`;
        lineNumberEl.style.overflowY = lines > maxLines ? 'auto' : 'hidden';
        lineNumberEl.style.whiteSpace = 'pre';

        const sync = () => {
          const start = Math.floor(wrapper.scrollTop / lh);
          const visible = Math.min(maxLines, lines - start);
          let out = '';
          for (let i = 0; i < visible; i++) out += (start + 1 + i) + '\n';
          lineNumberEl.textContent = out.trimEnd();
        };

        sync();
        wrapper.removeEventListener('scroll', wrapper._lineScrollHandler);
        wrapper._lineScrollHandler = sync;
        wrapper.addEventListener('scroll', sync);
      });
    }

    // initial + re-run on tab change
    requestAnimationFrame(updateVisibleLineNumbers);
    document.querySelectorAll('[role="tab"]').forEach(tab => {
      tab.addEventListener('click', () => requestAnimationFrame(updateVisibleLineNumbers));
    });

    // if fonts matter for line-height, re-run after they’re ready
    document.fonts?.ready?.then(() => requestAnimationFrame(updateVisibleLineNumbers));
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run, { once: true });
  } else {
    run();
  }
})();
