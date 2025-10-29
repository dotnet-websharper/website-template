import { API, getCsrfToken, fetchMe } from "./ws-auth";
import { safeFetch, redirectToError } from "./error-utils.js";

const PRICE_PER_SEAT = 2500;
const CHECKOUT_SESSION_ENDPOINT = `${API}/checkout/session`;
const SUPPORT_PLANS_URL = "/website-template/support.html#plans";
const MANAGE_SUBSCRIPTION_URL = "/website-template/manage-subscription.html";

init();

function init() {
    setupBackLink();
    const seatsFromUrl = getSeatsFromUrl();
    const ui = collectUi();
    initSeatSelector(ui, seatsFromUrl);
    initCompanyToggle(ui);

    ui.country?.addEventListener("change", () => {
        updateTotals(ui, getCurrentSeats(ui, 1));
    });

    bindCheckout(ui);
}

// ui collection

function collectUi() {
    return {
        subtotal: document.getElementById("wsSubtotal"),
        taxes: document.getElementById("wsTaxes"),
        total: document.getElementById("wsTotal"),
        seatsInput: document.getElementById("wsSeats"),
        btnMinus: document.getElementById("wsMinus"),
        btnPlus: document.getElementById("wsPlus"),
        email: document.getElementById("email"),
        street: document.getElementById("street"),
        city: document.getElementById("city"),
        postal: document.getElementById("postal"),
        country: document.getElementById("country"),
        companyCk: document.getElementById("company"),
        companyBlk: document.getElementById("companyBlock"),
        companyName: document.getElementById("company-name"),
        vatin: document.getElementById("vatin"),
        continueBtn: document.getElementById("wsContinue"),
        toast: document.getElementById("toast")
    };
}

// back link

function setupBackLink() {
    const link = document.getElementById("backLink");
    if (!link) return;

    const ref = document.referrer || "";
    let dest = SUPPORT_PLANS_URL;
    let label = "Plans";

    try {
        const redirectUrl = new URL(ref);
        const redirectPathname = redirectUrl.pathname || "";
        if (redirectPathname.endsWith("/manage-subscription.html")) {
            dest = MANAGE_SUBSCRIPTION_URL;
            label = "Manage subscription";
        } else if (redirectPathname.endsWith("/support.html")) {
            dest = SUPPORT_PLANS_URL;
            label = "Plans";
        }
    } catch {}

    link.href = dest;
    link.textContent = label;

    link.addEventListener("click", (e) => {
        if (!document.referrer && history.length > 1) {
            e.preventDefault();
            history.back();
        }
    });
}

// seats

function initSeatSelector(ui, seatsFromUrl) {
    if (ui.seatsInput) {
        setSeats(ui, seatsFromUrl);
        ui.btnMinus?.addEventListener("click", () => setSeats(ui, (parseInt(ui.seatsInput.value || "1", 10) | 0) - 1));
        ui.btnPlus?.addEventListener("click", () => setSeats(ui, (parseInt(ui.seatsInput.value || "1", 10) | 0) + 1));
        ui.seatsInput.addEventListener("input", () => setSeats(ui, parseInt(ui.seatsInput.value || "1", 10)));
    } else {
        updateTotals(ui, seatsFromUrl);
    }
}

function getSeatsFromUrl() {
    const searchParams = new URLSearchParams(location.search);
    return clamp(parseInt(searchParams.get("seats") || "1", 10));
}

function getCurrentSeats(ui, fallback) {
    if (ui.seatsInput) return clamp(parseInt(ui.seatsInput.value || "1", 10));
    return fallback;
}

function setSeats(ui, seats) {
    const v = clamp(seats | 0);
    if (ui.seatsInput) ui.seatsInput.value = String(v);
    updateTotals(ui, v);
}

function vatRate(ui) {
  const country = toIso2(ui.country?.value || "");
  const isCompany = !!ui.companyCk?.checked;
  const hasVatId = !!(ui.vatin?.value || "").trim();

  // Minimal EU standard VAT rates
  const EU_VAT = {
    AT: 0.20, BE: 0.21, BG: 0.20, HR: 0.25, CY: 0.19, CZ: 0.21, DK: 0.25,
    EE: 0.22, FI: 0.24, FR: 0.20, DE: 0.19, GR: 0.24, HU: 0.27, IE: 0.23,
    IT: 0.22, LV: 0.21, LT: 0.21, LU: 0.17, MT: 0.18, NL: 0.21, PL: 0.23,
    PT: 0.23, RO: 0.19, SK: 0.20, SI: 0.22, ES: 0.21, SE: 0.25
  };

  const isEU = country in EU_VAT;

  if (isCompany) {
    if (country === "HU") 
        return 0.27; // HU B2B

    if (isEU && hasVatId) 
        return 0; // EU B2B reverse charge
    if (isEU && !hasVatId) 
        return EU_VAT[country];

    return 0; // Non-EU B2B
  } else {
    if (isEU) 
        return EU_VAT[country]; // EU B2C: customer's rate
    return 0;// Non-EU B2C
  }
}


function updateTotals(ui, seats) {
    const v = clamp(seats | 0);
    const subtotal = v * PRICE_PER_SEAT;
    const rate = vatRate(ui);
    const tax = Math.round(subtotal * rate);
    const total = subtotal + tax;

    if (ui.subtotal) 
        ui.subtotal.textContent = format(subtotal);

    if (ui.taxes) 
        ui.taxes.textContent = format(tax);

    if (ui.total) 
        ui.total.textContent = format(total);
}

// company toggle

function initCompanyToggle(ui) {
    const toggle = () => {
        const show = !!ui.companyCk?.checked;
        if (ui.companyBlk) 
            ui.companyBlk.classList.toggle("hidden", !show);

        if (ui.companyName) 
            ui.companyName.required = show;

        if (ui.vatin) 
            ui.vatin.required = show;

        updateTotals(ui, getCurrentSeats(ui, 1));
    };
    ui.companyCk?.addEventListener("change", toggle);
    toggle();
}

// checkout

function bindCheckout(ui) {
    ui.continueBtn?.addEventListener("click", () => onContinueClick(ui));
}

async function onContinueClick(ui) {
    if (!formIsValid()) return;

    const token = await ensureCsrfOrFail();
    if (!token) return;

    const payload = buildCheckoutPayload(ui);
    writeDraft(payload);

    const oldText = ui.continueBtn.textContent;
    disableButton(ui.continueBtn, "Processing…");

    try {
        const data = await startCheckout(token, payload);
        if (data?.url) 
            window.location.href = data.url;
        else 
            throw new Error("Unexpected response: missing checkout URL");
    } catch (err) {
        handleCheckoutError(err, ui.toast);
    } finally {
        restoreButton(ui.continueBtn, oldText);
    }
}

// helpers used by onContinueClick

function formIsValid() {
    const form = document.querySelector("form");
    return !form || form.reportValidity();
}

async function ensureCsrfOrFail() {
    let token = getCsrfToken();
    if (!token) {
        await fetchMe(true);
        token = getCsrfToken();
    }
    if (!token) {
        redirectToError(new Error("Please sign in to continue."), {
            title: "Checkout failed",
            message: "Please sign in to continue."
        });
        return null;
    }
    return token;
}

function buildCheckoutPayload(ui) {
    const draft = readDraft();
    const seatsToSend = clamp(getCurrentSeats(ui, 1) || draft?.seats || 1);
    return {
        seats: seatsToSend,
        email: (ui.email?.value ?? "").trim() || draft?.customer?.email || null,
        billingAddress: {
            line1: (ui.street?.value ?? "").trim(),
            city: (ui.city?.value ?? "").trim(),
            postal_code: (ui.postal?.value ?? "").trim(),
            country: toIso2(ui.country?.value || "")
        },
        company: ui.companyCk?.checked
            ? { name: (ui.companyName?.value ?? "").trim(), vatin: (ui.vatin?.value ?? "").trim() }
            : null
    };
}

function startCheckout(token, payload) {
    return safeFetch(CHECKOUT_SESSION_ENDPOINT, {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "X-CSRF-Token": token
        },
        body: JSON.stringify(payload)
    });
}

// error + draft

function handleCheckoutError(err, toast) {
    if (err.status === 400) {
        const msg = (err.body && (err.body.error || err.body.message))
            || (err.message || "Could not start payment (invalid request).");
        if (toast) {
            toast.textContent = msg;
            toast.classList.remove("hidden");
            setTimeout(() => toast.classList.add("hidden"), 2500);
        } else {
            console.error(msg); alert(msg);
        }
    } else {
        redirectToError(err, {
            title: "Checkout failed",
            message: "Something went wrong while starting the payment. Please try again."
        });
    }
}

function readDraft() {
    try { return JSON.parse(sessionStorage.getItem("wsCheckoutDraft") || "{}"); } catch { return {}; }
}

function writeDraft(payload) {
    try {
        sessionStorage.setItem("wsCheckoutDraft", JSON.stringify({
            seats: payload.seats,
            customer: { email: payload.email },
            address: payload.billingAddress,
            company: payload.company
        }));
    } catch {}
}

// tiny utils

function clamp(n) { return Math.max(1, Math.min(999, n | 0)); }
function format(n) { return `$${n.toLocaleString("en-US")}`; }
function toIso2(val) {
    const map = { "hungary": "HU", "france": "FR", "united-kingdom": "GB" };
    return map[(val || "").toLowerCase()] || (val || "").toUpperCase().slice(0, 2);
}
function disableButton(btn, text) {
    if (!btn) return;
    btn.disabled = true;
    btn.style.opacity = "0.7";
    btn.textContent = text;
}
function restoreButton(btn, oldText) {
    if (!btn) return;
    btn.disabled = false;
    btn.style.opacity = "";
    btn.textContent = oldText;
}
