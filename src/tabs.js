let snippets = document.querySelectorAll("[data-name='snippet']");

function activateTab(tabpanel) {
    tabpanel.classList.remove("hidden");
    tabpanel.style.height = tabpanel.scrollHeight + "px";
}

function unactivateTab(tabpanel, tab) {
    tabpanel.classList.add("hidden");
    tabpanel.style.height = "0px";
}

function moveIndicator(indicator, tab) {
    indicator.style.left = tab.getBoundingClientRect().left - tab.parentElement.getBoundingClientRect().left + "px";
    indicator.style.width = tab.getBoundingClientRect().width + "px";
}

snippets.forEach((snippet) => {
    let tabs = snippet.querySelectorAll("[role='tab']");
    let pannels = snippet.querySelectorAll("[role='tabpanel']");
    let indicator = snippet.querySelector(".tab-indicator");

    moveIndicator(indicator, tabs[0]);

    tabs.forEach((tab) => {
        tab.addEventListener("click", () => {
            moveIndicator(indicator, tab);
            let tabTarget = tab.getAttribute("data-target");

            pannels.forEach((pannel) => {
                let pannelName = pannel.getAttribute("data-lang");
                tabTarget === pannelName ? activateTab(pannel) : unactivateTab(pannel);
            });
        });
    });
});
