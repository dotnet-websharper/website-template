let switchers = document.querySelectorAll(".switcher");

if (localStorage.getItem("color-theme") === "dark" || (!("color-theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
    document.documentElement.classList.add("dark");
} else {
    document.documentElement.classList.remove("dark");
}

updateAllIframesTheme();

switchers.forEach((switcher) => {
    switcher.addEventListener("click", function () {
        if (localStorage.getItem("color-theme")) {
            if (localStorage.getItem("color-theme") === "light") {
                document.documentElement.classList.add("dark");
                localStorage.setItem("color-theme", "dark");
            } else {
                document.documentElement.classList.remove("dark");
                localStorage.setItem("color-theme", "light");
            }
        } else {
            if (document.documentElement.classList.contains("dark")) {
                document.documentElement.classList.remove("dark");
                localStorage.setItem("color-theme", "light");
            } else {
                document.documentElement.classList.add("dark");
                localStorage.setItem("color-theme", "dark");
            }
        }

        updateAllIframesTheme();
    });
});

function getCurrentTheme() {
    return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

function updateAllIframesTheme() {
    const theme = getCurrentTheme();
    const iframes = document.querySelectorAll(".themed-iframe");

    iframes.forEach((iframe) =>{
        const baseSrc = iframe.getAttribute("data-src");
        iframe.src = `${baseSrc}?theme=${theme}`;
    });
}
