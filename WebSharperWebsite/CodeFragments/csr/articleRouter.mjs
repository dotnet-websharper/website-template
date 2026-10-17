// Simulated router and state
const router = {
    currentRoute: { type: "Articles" },
    link: (route) => {
    if (route.type === "Articles") return "/articles";
    if (route.type === "Article") return `/article/${route.id}`;
    }
};

// Render function
function render(route) {
    const main = document.getElementById("main");
    main.innerHTML = ""; 

    if (route.type === "Article") {
    const divEl = document.createElement("div");

    const h1El = document.createElement("h1");
    h1El.textContent = `This is article ${route.id}`;

    const link = document.createElement("a");
    link.href = router.link({ type: "Articles" });
    link.textContent = "Go back to the list of articles";

    divEl.appendChild(h1El);
    divEl.appendChild(link);
    main.appendChild(divEl);
    } else {
    const h1El = document.createElement("h1");
    h1El.textContent = "List of articles";
    main.appendChild(h1El);
    }
}

// Initial render
render(router.currentRoute);
