const snippets = document.querySelectorAll("[data-name='snippet']");

function activateTab(tabpanel) {
    tabpanel.classList.remove("hidden");
}

function unactivateTab(tabpanel) {
    tabpanel.classList.add("hidden");
}

function moveIndicator(indicator, tab) {
    indicator.style.left = tab.getBoundingClientRect().left - tab.parentElement.getBoundingClientRect().left + "px";
    indicator.style.width = tab.getBoundingClientRect().width + "px";
}

snippets.forEach((snippet) => {
    const tabs = snippet.querySelectorAll("[role='tab']");
    const pannels = snippet.querySelectorAll("[role='tabpanel']");
    const indicator = snippet.querySelector(".tab-indicator");

    moveIndicator(indicator, tabs[0]);

    tabs.forEach((tab) => {
        tab.addEventListener("click", () => {
            moveIndicator(indicator, tab);
            const tabTarget = tab.getAttribute("data-target");

            pannels.forEach((pannel) => {
                const pannelName = pannel.getAttribute("data-lang");
                tabTarget === pannelName ? activateTab(pannel) : unactivateTab(pannel);
            });
        });
    });
});
