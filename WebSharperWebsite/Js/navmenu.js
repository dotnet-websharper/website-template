let openMenu = document.querySelector("#openMenu");
let closeIcon = document.querySelector("#closeIcon");
let openIcon = document.querySelector("#openIcon");
let navmenu = document.querySelector("#navmenu");
let body = document.querySelector("body");

openMenu?.addEventListener("click", () => {
    navmenu.classList.toggle("h-screen");
    openIcon.classList.toggle("hidde-open-icon");
    closeIcon.classList.toggle("visible-close-icon");
    body.classList.toggle("overflow-hidden");
});
