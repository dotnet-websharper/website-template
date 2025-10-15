import "./authGate";

const PRICE_PER_SEAT = 2500;
const API_BASE_URL = 'http://localhost:55482'; // https://api.websharper.com
const CHECKOUT_SESSION_ENDPOINT = `${API_BASE_URL}/checkout/session`;

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
    const resp = await fetch(CHECKOUT_SESSION_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    const data = await resp.json();
    if (data?.url) {
      window.location.href = data.url;  // Stripe-hosted Checkout
    } else {
      throw new Error(data?.error || "Could not start payment");
    }
  } catch (err) {
    console.error(err.message || String(err));
    continueBtn.disabled = false;
    continueBtn.style.opacity = "";
    continueBtn.textContent = oldText;
  }
});
