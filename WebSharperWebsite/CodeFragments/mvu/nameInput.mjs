let model = { name: "" };

function update(message) {
    if (message.type === "SetName") {
        model = { ...model, name: message.value };
        render();
    }
}

function render() {
    const main = document.getElementById("main");
    main.innerHTML = "";

    const input = document.createElement("input");
    input.value = model.name;
    input.addEventListener("change", (e) => {
        update({ type: "SetName", value: e.target.value });
    });

    main.appendChild(input);
}

render();
