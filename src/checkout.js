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

// Dynamic "go back" link
(() => {
    const link = document.getElementById("backLink");
    if (!link) return;

    const ref = document.referrer || "";
    let dest = "/website-template/support.html#plans";
    let label = "Plans";

    try {
        const u = new URL(ref);
        const p = u.pathname || "";
        if (p.endsWith("/manage-subscription.html")) {
            dest = "/website-template/manage-subscription.html";
            label = "Manage subscription";
        } else if (p.endsWith("/support.html")) {
            dest = "/website-template/support.html#plans";
            label = "Plans";
        }
    } catch {}

    link.href = dest;
    link.textContent = label;

    // If there's no usable referrer but the user can go back, do history.back()
    link.addEventListener("click", (e) => {
        if (!document.referrer && history.length > 1) {
            e.preventDefault();
            history.back();
        }
    });
})();

// Seat selector + totals
const searchParams = new URLSearchParams(location.search);
const seatsFromUrl = clamp(parseInt(searchParams.get("seats") || "1", 10));

// Summary UI
const elSubtotal = document.getElementById("wsSubtotal");
const elTaxes = document.getElementById("wsTaxes");
const elTotal = document.getElementById("wsTotal");

// Seat selector UI (if present in the page)
const seatsInput = document.getElementById("wsSeats");
const btnMinus = document.getElementById("wsMinus");
const btnPlus = document.getElementById("wsPlus");

function updateTotals(seats) {
    const v = clamp(seats | 0);
    const subtotal = v * PRICE_PER_SEAT;
    if (elSubtotal) elSubtotal.textContent = format(subtotal);
    if (elTaxes) elTaxes.textContent = "$0"; // Stripe will calculate actual tax
    if (elTotal) elTotal.textContent = format(subtotal);
}

function setSeats(seats) {
    const v = clamp(seats | 0);
    if (seatsInput) seatsInput.value = String(v);
    updateTotals(v);
}

// Initialize selector & totals
if (seatsInput) {
    // Initialize from ?seats= (Stripe cancel return) or default 1
    setSeats(seatsFromUrl);

    btnMinus?.addEventListener("click", () => setSeats((parseInt(seatsInput.value || "1", 10) | 0) - 1));
    btnPlus?.addEventListener("click", () => setSeats((parseInt(seatsInput.value || "1", 10) | 0) + 1));
    seatsInput.addEventListener("input", () => setSeats(parseInt(seatsInput.value || "1", 10)));
} else {
    // No selector in DOM, still compute totals from URL/default
    updateTotals(seatsFromUrl);
}

// Helper to read current seats (selector first, fallback to URL)
function getCurrentSeats() {
    if (seatsInput) return clamp(parseInt(seatsInput.value || "1", 10));
    return seatsFromUrl;
}

// Existing form fields
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

    const draft = JSON.parse(sessionStorage.getItem("wsCheckoutDraft") || "{}");
    const seatsToSend = clamp(getCurrentSeats() || draft?.seats || 1);

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

    // Persist draft for convenience
    try {
        sessionStorage.setItem("wsCheckoutDraft", JSON.stringify({
            seats: payload.seats,
            customer: { email: payload.email },
            address: payload.billingAddress,
            company: payload.company
        }));
    } catch {}

    // Disable while creating session
    const oldText = continueBtn.textContent;
    continueBtn.disabled = true;
    continueBtn.style.opacity = "0.7";
    continueBtn.textContent = "Processing…";

    try {
        const data = await safeFetch(CHECKOUT_SESSION_ENDPOINT, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        });

        if (data?.url) {
            window.location.href = data.url; // Stripe Checkout
        } else {
            throw new Error("Unexpected response: missing checkout URL");
        }
    } catch (err) {
        if (err.status === 400) {
            const msg = (err.body && (err.body.error || err.body.message))
                || (err.message || "Could not start payment (invalid request).");

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
