import "./src/intersectionObserver";
import "./src/themeSwitcher";
import "./src/prism.js";
import "./src/navmenu";
import "./src/clipboard";
import "./src/tabs";
// import "./src/videoPlayer.js"
import "./src/lineNumbers";
import "./src/headerSlides";
import "./src/contactForm.js";
import "./src/manageSubscription.js";

document.addEventListener('DOMContentLoaded', () => {
    const el = document.getElementById('ws-template');
    if (el) import('./src/videoPlayer').then(m => m.default(el));
});
