let y = document.querySelector("#y");
let x = document.querySelector("#x");
let result = 0;

x.addEventListener("input", () => {
    result = x.value * 1 + y.value * 1;
    document.querySelector("#result").innerHTML = result;
});

y.addEventListener("input", () => {
    result = x.value * 1 + y.value * 1;
    document.querySelector("#result").innerHTML = result;
});
