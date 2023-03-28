let links = document.querySelectorAll(".section-link");
let sections = document.querySelectorAll(".section");
let options = {
    root: null,
    threshold: 1.0,
    rootMargin: "0px",
};
function activate(link) {
    link.classList.add("active-link");
}

const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            links.forEach((link) => {
                let linkTarget = link.getAttribute("data-step");
                let entryId = entry.target.getAttribute("id");
                linkTarget === entryId ? activate(link) : link.classList.remove("active-link");
            });
        }
    });
}, options);

sections.forEach((section) => {
    observer.observe(section);
});
