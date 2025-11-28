document.addEventListener('DOMContentLoaded', () => {
    const track = document.getElementById('track');
    const inner = document.getElementById('mini-inner');
    const prev = document.getElementById('mini-prev');
    const next = document.getElementById('mini-next');

    if (!track || !inner || !prev || !next) return;

    const originals = Array.from(inner.children);
    if (originals.length === 0) return;

    const firstClone = originals[0].cloneNode(true);
    const lastClone = originals[originals.length - 1].cloneNode(true);
    inner.insertBefore(lastClone, originals[0]);
    inner.appendChild(firstClone);

    let index = 1;
    let hovering = false;
    let timer = null;
    let animating = false;

    const setTransform = (withTransition) => {
        inner.style.transition = withTransition ? 'transform 0.7s ease-out' : 'none';
        inner.style.transform = `translateX(-${index * 100}%)`;
    };

    const goRight = () => {
        if (!animating) {
            animating = true;
            index += 1;
            setTransform(true);
        }
    };

    const goLeft  = () => {
        if (!animating) {
            animating = true;
            index -= 1;
            setTransform(true);
        }
    };

    inner.addEventListener('transitionend', () => {
        const total = inner.children.length;
        const lastRealIndex = total - 2;
        if (index === total - 1) {
            index = 1;
            setTransform(false);
        } else if (index === 0) {
            index = lastRealIndex;
            setTransform(false);
        }
        requestAnimationFrame(() => { animating = false; });
    });

    next.addEventListener('click', goRight);
    prev.addEventListener('click', goLeft);

    const start = () => {
        stop();
        timer = setInterval(() => { if (!hovering) goRight(); }, 5000);
    };
    const stop  = () => {
        if (timer) clearInterval(timer);
    };

    track.addEventListener('mouseenter', () => { hovering = true; });
    track.addEventListener('mouseleave', () => { hovering = false; });

    setTransform(false);
    start();
});
