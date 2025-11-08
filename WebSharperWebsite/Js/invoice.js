const qs = new URLSearchParams(location.search);
const id = qs.get("id");
const sub = qs.get("sub");
const $ = (id) => document.getElementById(id);

function money(cents, ccy="USD") {
  return (Number(cents||0)/100).toLocaleString(undefined, { style: "currency", currency: ccy.toUpperCase() });
}

// TODO: replace with real API: GET /subscriptions/:sub/invoices/:id
async function loadInvoice() {
  // mock
  return { id, date: "2025-07-12", amount: 250000, currency: "usd", status: "paid",
            billing: { name: "ACME Inc.", vatin: "EU123", line1: "Main St 1", city: "Budapest", postal_code: "1011", country: "HU" } };
}

(async function init(){
  const inv = await loadInvoice();
  $("invId").textContent = inv.id;
  $("invDate").textContent = inv.date;
  $("invStatus").textContent = inv.status;
  $("invAmount").textContent = money(inv.amount, inv.currency);
  $("invSub").textContent = sub || "-";

  $("billToName").textContent = inv.billing?.name || "-";
  $("billToVat").textContent = inv.billing?.vatin ? `VAT: ${inv.billing.vatin}` : "";
  $("billToAddr").textContent = [inv.billing?.line1, inv.billing?.postal_code, inv.billing?.city, inv.billing?.country]
    .filter(Boolean).join(", ");
})();