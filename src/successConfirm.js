// Config
import { API } from "./ws-auth";
import { safeFetch, redirectToError } from "./error-utils.js";

const CONFIRM_PATH = "/checkout/confirm";

// DOM elements
const messageElement = document.getElementById("wsMsg");
const detailsElement = document.getElementById("wsDetails");

// Helpers
const getQueryParam = (name) => new URLSearchParams(window.location.search).get(name);
const toCurrency = (c) => (c || "usd").toUpperCase();
const formatAmount = (cents, currency) =>
    (Number(cents || 0) / 100).toLocaleString("en-US", { style: "currency", currency: toCurrency(currency) });

function setMessage(text) {
    if (messageElement) messageElement.textContent = text;
}

function row(label, value) {
    const wrap = document.createElement("div");
    wrap.append(document.createTextNode(`${label}: `));
    const strong = document.createElement("b");
    strong.textContent = value ?? "-";
    wrap.append(strong);
    return wrap;
}

function renderDetails(data) {
    if (!detailsElement) return;

    detailsElement.classList.remove("hidden");
    detailsElement.replaceChildren(
        row("Seats", String(data.seats ?? "-")),
        row("Email", data.email || "-"),
        row("Amount", formatAmount(data.amountTotal, data.currency)),
        row("Status", data.status || "-"),
        row("Subscription", data.subscriptionId || "-")
    );
}

// API
async function fetchConfirmation(sessionId) {
    const url = `${API}${CONFIRM_PATH}?session_id=${encodeURIComponent(sessionId)}`;
    
    return await safeFetch(url, { method: "GET", credentials: "include" });
}

// Init
(async function init() {
    const sessionId = getQueryParam("session_id");
    if (!sessionId) {
        setMessage("Missing session id.");
        return;
    }

    try {
        setMessage("Confirming your payment…");
        const confirmation = await fetchConfirmation(sessionId);

        setMessage(
            confirmation.paid
                ? "Your payment has been received."
                : "Payment recorded; awaiting confirmation."
        );
        renderDetails(confirmation);
    } catch (err) {
        if (err.status === 400) {
            const msg =
                (err.body && (err.body.error || err.body.message)) ||
                err.message ||
                "Could not confirm payment (invalid request).";
            setMessage(msg);
            return;
        }
        
        redirectToError(err, {
            endpoint: `${CONFIRM_PATH}?session_id=${sessionId}`,
            method: "GET",
            title: "Payment confirmation failed"
        });
    }
})();
