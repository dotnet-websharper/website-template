document.addEventListener("DOMContentLoaded", () => {
    const links = Array.from(document.querySelectorAll(".section-link"));
    if (links.length === 0) return;

    // Each nav link points at a section by id. Observe the link targets
    // themselves (not ".section"): on the Bindings page the two top-level
    // anchors (#libraries, #browser-apis) are plain <section> elements, and
    // keying off the links means they get highlighted too.
    const targets = links
        .map((link) => ({
            link,
            el: document.getElementById(link.getAttribute("data-step")),
        }))
        .filter((t) => t.el !== null);

    if (targets.length === 0) return;

    // Activation line in px, just below the fixed header / section scroll
    // margin (~112px). A section becomes current once its top scrolls above
    // this line. This works for sections taller than the viewport, where an
    // IntersectionObserver with threshold: 1 would never fire and would light
    // up the wrong neighbour. Keeping the line tight also lets the top-level
    // group entries (#libraries, #browser-apis) activate when clicked, instead
    // of instantly being taken over by their first child category.
    const ACTIVATION_OFFSET = 140;
    let ticking = false;

    function setActive(activeLink) {
        for (const { link } of targets) {
            link.classList.toggle("active-link", link === activeLink);
        }
    }

    function update() {
        ticking = false;
        const line = ACTIVATION_OFFSET;

        // The last section whose top has passed the line is the current one.
        // `targets` is in document order, so later (nested) sections win.
        let current = null;
        for (const target of targets) {
            if (target.el.getBoundingClientRect().top <= line) {
                current = target;
            }
        }

        // At the very bottom, force the last entry: on short pages its top may
        // never reach the line.
        const atBottom =
            window.innerHeight + window.scrollY >=
            document.documentElement.scrollHeight - 2;
        if (atBottom) current = targets[targets.length - 1];

        setActive(current ? current.link : null);
    }

    function onScroll() {
        if (!ticking) {
            ticking = true;
            window.requestAnimationFrame(update);
        }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", update);
    update();
});
