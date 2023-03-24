let copyBtns = document.querySelectorAll(".copy-btn");

async function copyContent(copyIcon, successIcon, errorIcon) {
    try {
        await navigator.clipboard.writeText("dotnet new -i WebSharper.Templates");
        copyIcon.classList.add("hidden");
        successIcon.classList.remove("hidden");
        setTimeout(
            function () {
                copyIcon.classList.remove("hidden");
                successIcon.classList.add("hidden");
            }.bind(this),
            1000
        );
    } catch (err) {
        copyIcon.classList.add("hidden");
        errorIcon.classList.remove("hidden");
        setTimeout(
            function () {
                copyIcon.classList.remove("hidden");
                errorIcon.classList.add("hidden");
            }.bind(this),
            1000
        );
    }
}

copyBtns.forEach((copyBtn) => {
    copyBtn.addEventListener("click", () => {
        copyContent(copyBtn.querySelector(".copy"), copyBtn.querySelector(".success"), copyBtn.querySelector("failed"));
    });
});
