// const API = 'https://api.websharper.com';
const API = 'http://localhost:55482';

export const CACHE_KEY = "ws.planprices.v1";
export const catalog = { 
    pro: {}, freelancer: {} 
}; 

let proCardEl = null;
let freeCardEl = null;

export function buildCatalog(items) {
    for (const it of items) {
        const code = (it.code || "").toLowerCase();
        if (!catalog[code]) 
            catalog[code] = {};

        catalog[code][it.interval] = it;

        if (!catalog[code].name && it.name) 
            catalog[code].name = it.name;

        if (!catalog[code].description && it.description) 
            catalog[code].description = it.description;
    }
    // Also mirror into data-attrs as fallback (once initPlans set the elements)
    const proMonth = catalog.pro?.month?.unitAmountCents;
    const proYear = catalog.pro?.year?.unitAmountCents;
    if (proCardEl && proMonth != null) 
        proCardEl.dataset.priceMonth = String(proMonth / 100);
    if (proCardEl && proYear != null) 
        proCardEl.dataset.priceYear = String(proYear / 100);

    const frMonth = catalog.freelancer?.month?.unitAmountCents;
    const frYear  = catalog.freelancer?.year?.unitAmountCents;
    if (freeCardEl && frMonth != null) 
        freeCardEl.dataset.priceMonth = String(frMonth / 100);
    if (freeCardEl && frYear != null) 
        freeCardEl.dataset.priceYear = String(frYear / 100);
}

export function loadCache() {
    try {
        const raw = sessionStorage.getItem(CACHE_KEY);
        if (!raw) 
            return null;

        const parsed = JSON.parse(raw);

        if (!parsed || !Array.isArray(parsed.items)) 
            return null;

        return parsed.items;
    } catch { 
        return null; 
    }
}

export function saveCache(items) {
    try {
        sessionStorage.setItem(CACHE_KEY, JSON.stringify({ items }));
    } catch {}
}

export async function hydrateCatalog() {
    const cached = loadCache();
    if (cached) {
        buildCatalog(cached);
        return { items: cached, fromCache: true };
    }
    try {
        const res = await fetch(`${API}/plans/prices`, {
            headers: { "Accept": "application/json" },
            credentials: "include"
        });
        if (!res.ok) 
            throw new Error(`HTTP ${res.status}`);

        const data = await res.json();
        const items = Array.isArray(data?.items) ? data.items : [];

        buildCatalog(items);
        saveCache(items);
        return { items, fromCache: false };
    } catch (e) {
        console.warn("[plans] Failed to fetch prices, using fallback attributes:", e);
        return { items: [], fromCache: false, error: e };
    }
}

export function initPlans() {
    const $ = (s, r = document) => r.querySelector(s);
    const num = (v) => Number.parseInt(v, 10) || 0;

    const billMonth = $("#wsBillMonth");
    const billYear = $("#wsBillYear");

    const proCard = $("#wsProCard");
    const freeCard = $("#wsFreeCard");
    if (!proCard || !freeCard || !billMonth || !billYear) 
        return;

    // make elements available to buildCatalog's data-attr mirroring
    proCardEl = proCard;
    freeCardEl = freeCard;

    const proName = $("#wsProName");
    const freeName = $("#wsFreeName");

    const proPriceText = $("#wsProPriceText");
    const freePriceText = $("#wsFreePriceText");

    const proTotalLabel = $("#wsProTotalLabel");
    const freeTotalLabel = $("#wsFreeTotalLabel");

    const proTotal = $("#wsProTotal");
    const freeTotal = $("#wsFreeTotal");

    const seatMinus = $("#wsSeatsMinus");
    const seatPlus = $("#wsSeatsPlus");
    const seatInput = $("#wsSeatCount");

    const proCheckout = $("#wsProCheckout");
    const freeCheckout = $("#wsFreeCheckout");

    const proNote = $("#wsProNote");
    const freeNote = $("#wsFreeNote");

    if (!proCheckout || !freeCheckout || !seatMinus || !seatPlus || !seatInput) 
        return;

    let interval = "year"; // "month" | "year"

    const usd = (n) => `$${n.toLocaleString("en-US")}`;
    const applyActive = (btn, active) => {
        btn.dataset.active = String(active);
        btn.setAttribute("aria-pressed", String(active));
    };
    const clampSeats = (v) => Math.max(1, Math.min(999, v | 0));

    function currencyFor(planCode) {
        return (
            catalog?.[planCode]?.[interval]?.currency ||
            catalog?.[planCode]?.month?.currency ||
            catalog?.[planCode]?.year?.currency ||
            "usd"
        );
    }

    function getPrices() {
        const fromApiPro = catalog.pro?.[interval]?.unitAmountCents;
        const fromApiFre = catalog.freelancer?.[interval]?.unitAmountCents;

        const pro = (fromApiPro != null)
            ? (fromApiPro / 100)
            : num(proCard.dataset[interval === "month" ? "priceMonth" : "priceYear"]);

        const fr = (fromApiFre != null)
            ? (fromApiFre / 100)
            : num(freeCard.dataset[interval === "month" ? "priceMonth" : "priceYear"]);

        return { pro, fr };
    }

    function updateNotes() {
        const proCur = currencyFor("pro").toUpperCase();
        const freeCur = currencyFor("freelancer").toUpperCase();

        if (proNote) {
            const desc = catalog.pro?.description || "Assign GitHub usernames after purchase";
            proNote.textContent = `${desc}. Prices in ${proCur}.`;
        }

        if (freeNote) {
            const desc = catalog.freelancer?.description || "Ideal for solo developers";
            freeNote.textContent = `${desc}. Prices in ${freeCur}.`;
        }
    }

    function updateUI() {
        const { pro, fr } = getPrices();
        const seats = clampSeats(num(seatInput.value) || 1);

        if (catalog.pro?.name)
            proName.textContent = catalog.pro.name;
        if (catalog.freelancer?.name)
            freeName.textContent = catalog.freelancer.name;

        if (interval === "month") {
            proPriceText.innerHTML = `${usd(pro)} <span class="text-gray-600 dark:text-gray-400">/ seat / month</span>`;
            freePriceText.innerHTML = `${usd(fr)} <span class="text-gray-600 dark:text-gray-400">/ month</span>`;
            proTotalLabel.textContent = "Total (monthly)";
            freeTotalLabel.textContent = "Total (monthly)";
        } else {
            proPriceText.innerHTML = `${usd(pro)} <span class="text-gray-600 dark:text-gray-400">/ seat / year</span>`;
            freePriceText.innerHTML = `${usd(fr)} <span class="text-gray-600 dark:text-gray-400">/ year</span>`;
            proTotalLabel.textContent = "Total (yearly)";
            freeTotalLabel.textContent = "Total (yearly)";
        }

        proTotal.textContent = usd(pro * seats);
        freeTotal.textContent = usd(fr);

        proCheckout.href = `./checkout.html?plan=pro&interval=${interval}&seats=${seats}`;
        freeCheckout.href = `./checkout.html?plan=freelancer&interval=${interval}&seats=1`;

        updateNotes();
    }

    billMonth.addEventListener("click", () => {
        interval = "month";
        applyActive(billMonth, true);
        applyActive(billYear, false);
        updateUI();
    });

    billYear.addEventListener("click", () => {
        interval = "year";
        applyActive(billMonth, false);
        applyActive(billYear, true);
        updateUI();
    });

    seatMinus.addEventListener("click", () => {
        seatInput.value = String(clampSeats((num(seatInput.value) || 1) - 1));
        updateUI();
    });
    seatPlus.addEventListener("click", () => {
        seatInput.value = String(clampSeats((num(seatInput.value) || 1) + 1));
        updateUI();
    });
    seatInput.addEventListener("input", updateUI);

    updateUI();
    hydrateCatalog().finally(updateUI);
    console.log("catalog", catalog);
}
