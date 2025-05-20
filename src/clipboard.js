let copyBtns = document.querySelectorAll(".copy-btn");

async function copyContent(textToCopy, copyIcon, successIcon, errorIcon) {
    try {
        await navigator.clipboard.writeText(textToCopy);
        copyIcon.classList.add("hidden");
        successIcon.classList.remove("hidden");
        setTimeout(() => {
            copyIcon.classList.remove("hidden");
            successIcon.classList.add("hidden");
        }, 1000);
    } catch (err) {
        copyIcon.classList.add("hidden");
        errorIcon.classList.remove("hidden");
        setTimeout(() => {
            copyIcon.classList.remove("hidden");
            errorIcon.classList.add("hidden");
        }, 1000);
    }
}

copyBtns.forEach((copyBtn) => {
    copyBtn.addEventListener("click", () => {
        const container = copyBtn.closest("div");
        const textElement = container.querySelector(".font-mono");
        const textToCopy = textElement.innerText;

        copyContent(
            textToCopy,
            copyBtn.querySelector(".copy"),
            copyBtn.querySelector(".success"),
            copyBtn.querySelector(".failed")
        );
    });
});
