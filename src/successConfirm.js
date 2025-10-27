// Config 
import { API } from "./ws-auth";

const CONFIRM_PATH = "/checkout/confirm";

// DOM elements
const messageElement = document.getElementById("wsMsg");
const detailsElement = document.getElementById("wsDetails");

// Helpers
const getQueryParam = (name) => new URLSearchParams(window.location.search).get(name);
const toCurrency = (c) => (c || "usd").toUpperCase();
const formatAmount = (cents, currency) =>
  (Number(cents || 0) / 100).toLocaleString("en-US", { style: "currency", currency: toCurrency(currency) });

// Renderers
function setMessage(text) {
  if (messageElement) messageElement.textContent = text;
}

function renderDetails(data) {
  if (!detailsElement) 
    return;
  
  detailsElement.classList.remove("hidden");
  detailsElement.innerHTML = `
    <div>Seats: <b>${data.seats}</b></div>
    <div>Email: <b>${data.email || "-"}</b></div>
    <div>Amount: <b>${formatAmount(data.amountTotal, data.currency)}</b></div>
    <div>Status: <b>${data.status}</b></div>
    <div>Subscription: <b>${data.subscriptionId || "-"}</b></div>
  `;
}

// API
async function fetchConfirmation(sessionId) {
  const url = `${API}${CONFIRM_PATH}?session_id=${encodeURIComponent(sessionId)}`;
  const response = await fetch(url, { method: "GET" });

  if (!response.ok) 
    throw new Error(`Confirm failed (${response.status})`);

  const data = await response.json();
  if (data?.error) 
    throw new Error(data.error);

  return data;
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
    setMessage(confirmation.paid ? "Your payment has been received." : "Payment recorded; awaiting confirmation.");
    renderDetails(confirmation);
  } catch (err) {
    console.error("[WS] confirm error:", err);
    setMessage("Could not confirm payment.");
  }
})();
