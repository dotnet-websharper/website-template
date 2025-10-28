import { API } from "./ws-auth";
import { safeFetch, redirectToError } from "./error-utils.js";

const PRICE_PER_SEAT = 2500;
const CHECKOUT_SESSION_ENDPOINT = `${API}/checkout/session`;

const format = n => `$${n.toLocaleString("en-US")}`;
const clamp = n => Math.max(1, Math.min(999, n | 0));

const toIso2 = val => {
    const map = { "hungary": "HU", "france": "FR", "united-kingdom": "GB" };
    return map[(val || "").toLowerCase()] || (val || "").toUpperCase().slice(0, 2);
};

// Seats from querystring
const searchParams = new URLSearchParams(location.search);
const seatsFromUrl = clamp(parseInt(searchParams.get("seats") || "1", 10));

// Summary UI
const elSubtotal = document.getElementById("wsSubtotal");
const elTaxes = document.getElementById("wsTaxes");
const elTotal = document.getElementById("wsTotal");

const subtotal = seatsFromUrl * PRICE_PER_SEAT;
if (elSubtotal) elSubtotal.textContent = format(subtotal);
if (elTaxes) elTaxes.textContent = "$0"; // actual tax will be calculated by Stripe
if (elTotal) elTotal.textContent = format(subtotal);

// Form fields
const email = document.getElementById("email");
const street = document.getElementById("street");
const city = document.getElementById("city");
const postal = document.getElementById("postal");
const country = document.getElementById("country");

const companyCk = document.getElementById("company");
const companyBlk = document.getElementById("companyBlock");
const companyName = document.getElementById("company-name");
const vatin = document.getElementById("vatin");

function toggleCompany() {
    const show = !!companyCk?.checked;
    if (companyBlk) companyBlk.classList.toggle("hidden", !show);
    if (companyName) companyName.required = show;
    if (vatin) vatin.required = show;
}
companyCk?.addEventListener("change", toggleCompany);
toggleCompany();

// Continue to payment
const continueBtn = document.getElementById("wsContinue");
continueBtn?.addEventListener("click", async () => {
    const form = document.querySelector("form");
    if (form && !form.reportValidity()) return;

    // Prefer seats from URL; fall back to any stored draft; finally 1
    const draft = JSON.parse(sessionStorage.getItem("wsCheckoutDraft") || "{}");
    const seatsToSend = clamp(Number.isFinite(seatsFromUrl) ? seatsFromUrl : (draft?.seats ?? 1));

    const payload = {
        seats: seatsToSend,
        email: (email?.value ?? "").trim() || draft?.customer?.email || null,
        billingAddress: {
        line1: (street?.value ?? "").trim(),
        city: (city?.value ?? "").trim(),
        postal_code: (postal?.value ?? "").trim(),
        country: toIso2(country?.value || "")
        },
        company: companyCk?.checked
        ? {
            name: (companyName?.value ?? "").trim(),
            vatin: (vatin?.value ?? "").trim()
            }
        : null
    };

    // Persist the draft
    try { 
        sessionStorage.setItem("wsCheckoutDraft", JSON.stringify({
        seats: payload.seats,
        customer: { email: payload.email },
        address: payload.billingAddress,
        company: payload.company
        })); 
    } catch {}

    // Disable button while creating the session
    const oldText = continueBtn.textContent;
    continueBtn.disabled = true;
    continueBtn.style.opacity = "0.7";
    continueBtn.textContent = "Processing…";

    try {
        const data = await safeFetch(CHECKOUT_SESSION_ENDPOINT, {
            method: "POST",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        });

        if (data?.url) {
            window.location.href = data.url; // Stripe-hosted Checkout
        } else {
            throw new Error("Unexpected response: missing checkout URL");
        }
    } catch (err) {
        if (err.status === 400) {
            // Likely validation (e.g., seats out of range)
            const msg = (err.body && (err.body.error || err.body.message))
                || (err.message || "Could not start payment (invalid request).");

            // Prefer toast if present; fallback to alert/console
            const toast = document.getElementById("toast");
            if (toast) {
                toast.textContent = msg;
                toast.classList.remove("hidden");
                setTimeout(() => toast.classList.add("hidden"), 2500);
            } else {
                console.error(msg);
                alert(msg);
            }
        } else {
            // Network/server issue → detailed error page
            redirectToError(err, {
                endpoint: "/checkout/session",
                method: "POST",
                title: "Checkout failed"
            });
        }
    } finally {
        continueBtn.disabled = false;
        continueBtn.style.opacity = "";
        continueBtn.textContent = oldText;
    }
});
