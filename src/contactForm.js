const apiUrl = "https://api.intellifactory.com/api/contact";

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    const sendButton = document.getElementById("contact-form-button");

    if (!form || !sendButton) return;

    form.addEventListener("input", () => {
        sendButton.disabled = !isFormValid(form);
    });

    sendButton.disabled = !isFormValid(form);

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        if (!isFormValid(form)) {
            alert("Please fill in all required fields.");
            return;
        }

        const formData = new FormData();
        formData.append("subject", form.emailSubject.value.trim());
        formData.append("message", form.emailMessage.value.trim());
        formData.append("email", form.emailAddress.value.trim());
        formData.append("name", form.emailName.value.trim());
        formData.append("country", form.emailCountry.value);

        sendButton.disabled = true;
        sendButton.textContent = "Sending...";

        try {
            const response = await fetch(apiUrl, {
                method: "POST",
                body: formData
            });

            if (!response.ok) throw new Error("Server error");

            alert("Message sent successfully!");
            form.reset();
            sendButton.disabled = true;
        } catch (err) {
            console.error(err);
            alert("Failed to send message. Please try again later.");
            form.reset();
            sendButton.disabled = true;
        } finally {
            sendButton.textContent = "Send";
        }
    });
});

function isFormValid(form) {
    const message = form.emailMessage.value.trim();
    const email = form.emailAddress.value.trim();
    const name = form.emailName.value.trim();

    return message !== "" && email !== "" && name !== "" && isValidEmail(email);
}

function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
