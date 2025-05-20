const apiUrl = "";

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    const sendButton = form.querySelector("button[type='submit']");

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

        const data = {
            subject: form.emailSubject.value.trim(),
            message: form.emailMessage.value.trim(),
            email: form.emailAddress.value.trim(),
            name: form.emailName.value.trim(),
            country: form.emailCountry.value
        };

        sendButton.disabled = true;
        sendButton.textContent = "Sending...";

        try {
            const response = await fetch(apiUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });

            if (!response.ok) throw new Error("Server error");

            alert("Message sent successfully!");
            form.reset();
            sendButton.disabled = true;
        } catch (err) {
            console.error(err);
            alert("Failed to send message. Please try again later.");
        } finally {
            sendButton.textContent = "Send";
        }
    });
});

function isFormValid(form) {
    const message = form.emailMessage.value.trim();
    const email = form.emailAddress.value.trim();
    const name = form.emailName.value.trim();

    return message !== "" && email !== "" && name !== "";
}
