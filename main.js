import "./src/intersectionObserver";
import "./src/themeSwitcher";
import "./src/prism.js";
import "./src/navmenu";
import "./src/clipboard";
import "./src/tabs";
import "./src/lineNumbers";
import "./src/checkout-auth.js"
import "./src/account-menu.js"
import "./src/ws-auth-notify.js"

document.addEventListener('DOMContentLoaded', () => {
    const el = document.getElementById('ws-template');
    if (el) import('./src/videoPlayer').then(m => m.default(el));
});
