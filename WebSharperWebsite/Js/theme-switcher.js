const DOC = document.documentElement;
const THEME_KEY = "color-theme";
const prefersDark = () => window.matchMedia("(prefers-color-scheme: dark)").matches;

function setThemeClass(theme) {
  DOC.classList.toggle("dark", theme === "dark");
}

function getInitialTheme() {
  const saved = localStorage.getItem(THEME_KEY);
  if (saved === "dark" || (saved === null && prefersDark())) return "dark";
  return "light";
}

function currentTheme() {
  return DOC.classList.contains("dark") ? "dark" : "light";
}

function applyTheme(theme) {
  setThemeClass(theme);
  localStorage.setItem(THEME_KEY, theme);
  updateAllIframesTheme(theme);
}

function toggleTheme() {
  const next = currentTheme() === "dark" ? "light" : "dark";
  applyTheme(next);
}

function updateAllIframesTheme(theme = currentTheme()) {
  document.querySelectorAll(".themed-iframe").forEach((iframe) => {
    const baseSrc = iframe.dataset.src; // same as getAttribute("data-src")
    if (!baseSrc) return;
    const url = new URL(baseSrc, document.baseURI);
    url.searchParams.set("theme", theme);
    iframe.src = url.toString();
  });
}

// 1) Set initial theme and sync iframes
applyTheme(getInitialTheme());

// 2) Wire up toggles
document.querySelectorAll(".switcher").forEach((el) => {
  el.addEventListener("click", toggleTheme);
});

// 3) Optional: keep multiple tabs/windows in sync
window.addEventListener("storage", (e) => {
  if (e.key === THEME_KEY && (e.newValue === "dark" || e.newValue === "light")) {
    setThemeClass(e.newValue);
    updateAllIframesTheme(e.newValue);
  }
});
