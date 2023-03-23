import "./style.css";
import "./assets/css/prism.css";
import "./src/prism.js";
import "./src/counter";
import "./src/themeSwitcher";

let openMenu = document.querySelector("#openMenu");
let closeIcon = document.querySelector("#closeIcon");
let openIcon = document.querySelector("#openIcon");
let navmenu = document.querySelector("#navmenu");
let isOpened = false;

openMenu.addEventListener("click", () => {
    isOpened = !isOpened;
    navmenu.classList.toggle("h-screen");
    openIcon.classList.toggle("hidde-open-icon");
    closeIcon.classList.toggle("visible-close-icon");
});
