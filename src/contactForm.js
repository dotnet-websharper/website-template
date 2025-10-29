export function initContactForm(apiUrl = "https://api.intellifactory.com/api/contact") {
    const form = document.getElementById("contactForm");
    const sendButton = document.getElementById("contact-form-button");
    if (!form || !sendButton) return;

    const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isFormValid = (f) => {
        const message = f.emailMessage.value.trim();
        const email = f.emailAddress.value.trim();
        const name = f.emailName.value.trim();
        return message && email && name && isValidEmail(email);
    };

    const updateBtn = () => { sendButton.disabled = !isFormValid(form); };
    updateBtn();
    form.addEventListener("input", updateBtn);

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
        const prev = sendButton.textContent;
        sendButton.textContent = "Sending...";

        try {
            const res = await fetch(apiUrl, { method: "POST", body: formData });
            if (!res.ok) throw new Error("Server error");
            alert("Message sent successfully!");
            form.reset();
            sendButton.disabled = true;
        } catch (err) {
            console.error(err);
            alert("Failed to send message. Please try again later.");
            form.reset();
            sendButton.disabled = true;
        } finally {
            sendButton.textContent = prev;
        }
    });
}
