const abs = (p) => new URL(p, document.baseURI).toString();

const { API } = await import(abs("Js/ws-auth.js"));
const { safeFetch, redirectToError } = await import(abs("Js/error-utils.js"));

// DOM helpers
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
const toggleHidden = (el, hidden) => el?.classList.toggle("hidden", hidden);

// UI references
const UI = Object.freeze({
    content: $("#settingsContent"),
    tabs: $$(".settings-tab"),
    pages: $$("[data-page]"),
    toast: $("#toast"),
    spinner: $("#spinner"),

    // subscription page
    subscriptionSelect: $("#subscriptionSelect"),
    planName: $("#planName"),
    seatsUsed: $("#seatsUsed"),
    seatsTotal: $("#seatsTotal"),
    seatProgress: $("#seatProgress"),
    seatsBody: $("#seatsBody"),
    bulkBox: $("#bulkBox"),
    bulkError: $("#bulkError"),
    applyBulk: $("#applyBulk"),
    clearBulk: $("#clearBulk"),
    btnAddSubscription: $("#btnAddSubscription"),
    refresh: $("#refresh"),

    // invoices
    invoiceBody: $("#invoiceBody"),

    // billing page
    billingView: $("#billingView"),
    billingEdit: $("#billingEdit"),
    billingForm: $("#billingForm"),
    btnBillingEdit: $("#btnBillingEdit"),
    btnBillingSave: $("#btnBillingSave"),
    btnBillingCancel: $("#btnBillingCancel"),

    saveBilling: $("#saveBilling"),
});

// Utilities
function showPage(pageKey) {
    UI.pages.forEach((p) => p.classList.toggle("hidden", p.dataset.page !== pageKey));
    
    UI.tabs.forEach((t) => {
        const active = t.dataset.nav === pageKey;
        t.classList.toggle("bg-gray-100", active);
        t.classList.toggle("dark:bg-white/5", active);
    });
}

function getRouteFromHash() {
    return location.hash.replace("#", "") || "subs";
}

function navigate(hash) {
    if (location.hash !== `#${hash}`) 
        location.hash = hash;

    showPage(hash);
}

function formatMoney(cents, currency = "usd") {
    const amount = (Number(cents) || 0) / 100;
    return amount.toLocaleString(undefined, {
        style: "currency",
        currency: currency.toUpperCase(),
    });
}

function showToast(msg = "Saved") {
    if (!UI.toast) return;
    UI.toast.textContent = msg;
    toggleHidden(UI.toast, false);
    setTimeout(() => toggleHidden(UI.toast, true), 1600);
}

function setLoading(on) {
    toggleHidden(UI.spinner, !on);
}

// Seats table actions
function onSeatsBodyClick(e) {
    const btn = e.target.closest("button[data-action]");
    if (!btn) return;

    const seatNo = Number(btn.dataset.seat);
    const input = UI.seatsBody.querySelector(`[data-seat-input="${seatNo}"]`);
    const username = input?.value.trim();
    const subId = state.currentSubId;

    (async () => {
        try {
            setLoading(true);
            if (btn.dataset.action === "assign") {
                if (!username) return;
                await apiAssignSeat(subId, seatNo, username);
            } else {
                await apiUnassignSeat(subId, seatNo);
            }
            await loadSeats();
            renderSummary();
            renderSeats();
            showToast("Updated");
        } finally {
            setLoading(false);
        }
    })();
}

// Auth
async function requireAuth() {
    try {
        // Ask the API who we are; throws on non-2xx
        const me = await safeFetch(`${API}/auth/me`, { credentials: "include" });
        return me;
    } catch (err) {
        const returnUrl = location.href; // preserve path, query, and hash

        // Not authenticated -> start GitHub OAuth, then come back here
        if (err.status === 401 || err.status === 403) {
            location.href = `${API}/auth/github/start?returnUrl=${encodeURIComponent(returnUrl)}`;
            throw new Error("Redirecting to login…"); // stop further code
        }

        // Anything else -> show error page with context
        redirectToError(err, {
            endpoint: "/auth/me",
            method: "GET",
            title: "Could not verify your session"
        });
        throw err;
    }
}

// Mock API (replace with real endpoints)
// GET  /subscriptions
// GET  /subscriptions/:id
// GET  /subscriptions/:id/seats
// POST /subscriptions/:id/seats/assign  -> { seatNo, username }
// POST /subscriptions/:id/seats/unassign -> { seatNo }
// POST /subscriptions/:id/seats/bulk-assign -> { usernames: string[] }
// GET  /subscriptions/:id/invoices
// GET  /billing
// POST /billing
const mockDb = {
    subs: [
        { id: "sub_1", label: "Professional (5 seats) — Jul 12 2025", plan: "Professional", totalSeats: 5, renewsAt: "2025-07-12", status: "active",   currency: "usd" },
        { id: "sub_2", label: "Professional (10 seats) — Aug 12 2025", plan: "Professional", totalSeats: 10, renewsAt: "2025-08-12", status: "trialing", currency: "usd" },
    ],
    seats: {
        sub_1: [
            { seatNo: 1, username: "alice", status: "assigned" },
            { seatNo: 2, username: "bob-dev", status: "assigned" },
            { seatNo: 3, username: "", status: "available" },
            { seatNo: 4, username: "", status: "available" },
            { seatNo: 5, username: "", status: "available" },
        ],
        sub_2: Array.from({ length: 10 }, (_, i) => ({ seatNo: i + 1, username: "", status: "available" })),
    },
    invoices: {
        sub_1: [
            { id: "inv_2025_0001", date: "2025-07-12", amount: 250000, currency: "usd", status: "paid" },
            { id: "inv_2025_0002", date: "2025-08-12", amount: 250000, currency: "usd", status: "open" },
        ],
        sub_2: [
            { id: "inv_2025_0003", date: "2025-08-12", amount: 500000, currency: "usd", status: "paid" },
        ],
    },
    billing: { name: "", vatin: "", line1: "", city: "", postal_code: "", country: "" },
};

async function apiListSubscriptions() {
    return mockDb.subs;
}
async function apiGetSeats(subId) {
    return mockDb.seats[subId] ? mockDb.seats[subId].map((x) => ({ ...x })) : [];
}
async function apiGetInvoices(subId) {
    return mockDb.invoices[subId] ? mockDb.invoices[subId].map((x) => ({ ...x })) : [];
}
async function apiAssignSeat(subId, seatNo, username) {
    const rows = mockDb.seats[subId] || [];
    const row = rows.find((r) => r.seatNo === seatNo);
    if (!row) return { ok: false };
    row.username = username;
    row.status = username ? "assigned" : "available";
    return { ok: true };
}
async function apiUnassignSeat(subId, seatNo) {
    const rows = mockDb.seats[subId] || [];
    const row = rows.find((r) => r.seatNo === seatNo);
    if (!row) return { ok: false };
    row.username = "";
    row.status = "available";
    return { ok: true };
}
async function apiBulkAssign(subId, usernames) {
    const rows = mockDb.seats[subId] || [];
    const queue = usernames.slice();
    for (const r of rows) {
        if (!queue.length) break;
        if (!r.username) {
            r.username = queue.shift();
            r.status = "assigned";
        }
    }
    return { ok: true };
}
async function apiGetBilling() {
    return { ...mockDb.billing };
}
async function apiSaveBilling(data) {
    mockDb.billing = { ...mockDb.billing, ...data };
    return { ok: true };
}

// State
const state = {
    user: null,
    subs: [],
    currentSubId: null,
    seats: [],
    invoices: [],
    billing: null
};

// Renderers
function renderSubscriptionSelector() {
    const sel = UI.subscriptionSelect;
    sel.innerHTML = "";

    state.subs.forEach((s) => {
        const opt = document.createElement("option");
        opt.value = s.id;
        opt.textContent = s.label;
        sel.appendChild(opt);
    });

    if (state.currentSubId && state.subs.some((s) => s.id === state.currentSubId)) {
        sel.value = state.currentSubId;
    } else if (state.subs[0]) {
        state.currentSubId = state.subs[0].id;
        sel.value = state.currentSubId;
    }
}

function renderSummary() {
    if (!UI.planName || !UI.seatsUsed || !UI.seatsTotal || !UI.seatProgress) {
        console.warn("Summary elements not found; render skipped.");
        return;
    }

    const sub = state.subs.find((s) => s.id === state.currentSubId);
    const used = state.seats.filter((x) => x.status === "assigned").length;
    const total = sub?.totalSeats ?? 0;
    const avail = Math.max(0, total - used);

    UI.planName.textContent = sub?.plan ?? "-";
    UI.seatsUsed.textContent = String(used);
    UI.seatsTotal.textContent = String(total);

    const renewsAtEl = $("#renewsAt");
    const subStatusEl = $("#subStatus");
    if (renewsAtEl) renewsAtEl.textContent = sub?.renewsAt ?? "-";
    if (subStatusEl) subStatusEl.textContent = sub?.status ?? "-";

    const pct = total ? Math.round((used / total) * 100) : 0;
    UI.seatProgress.style.width = `${pct}%`;
}

function renderSeats() {
    UI.seatsBody.innerHTML = "";
    state.seats.forEach(({ seatNo, username, status }) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td class="px-4 py-3">#${seatNo}</td>
            <td class="px-4 py-3">
                <input data-seat-input="${seatNo}" value="${username || ""}"
                    class="w-full rounded-md border border-gray-300 dark:border-gray-800 bg-transparent px-2 py-1 text-sm"
                    placeholder="github-username" />
            </td>
            <td class="px-4 py-3">
                <span class="inline-flex items-center rounded-full border px-2 py-0.5 text-xs
                    ${status === "assigned"
                        ? "border-emerald-300 text-emerald-700 dark:border-emerald-700/40 dark:text-emerald-300"
                        : "border-gray-300 text-gray-600 dark:border-white/10 dark:text-gray-300"}">
                    ${status}
                </span>
            </td>
            <td class="px-4 py-3 text-right whitespace-nowrap">
                <button data-action="assign" data-seat="${seatNo}"
                    class="rounded-md border px-2 py-1 text-xs border-gray-300 dark:border-white/20 mr-2">
                    Assign
                </button>
                <button data-action="unassign" data-seat="${seatNo}"
                    class="rounded-md border px-2 py-1 text-xs border-gray-300 dark:border-white/20">
                    Unassign
                </button>
            </td>
        `;
        UI.seatsBody.appendChild(tr);
    });
}

function renderInvoices() {
    UI.invoiceBody.innerHTML = "";
    const sub = state.subs.find((s) => s.id === state.currentSubId);

    state.invoices.forEach((inv) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td class="px-4 py-3">${inv.id}</td>
            <td class="px-4 py-3">${inv.date}</td>
            <td class="px-4 py-3">${formatMoney(inv.amount, inv.currency || sub?.currency || "usd")}</td>
            <td class="px-4 py-3 capitalize">${inv.status}</td>
            <td class="px-4 py-3 text-right">
                <a class="rounded-md border px-2 py-1 text-xs border-gray-300 dark:border-white/20"
                    href="./invoice.html?id=${encodeURIComponent(inv.id)}&sub=${encodeURIComponent(state.currentSubId)}"
                    target="_blank" rel="noopener">
                    View
                </a>
            </td>
        `;
        UI.invoiceBody.appendChild(tr);
    });
}

// Billing view/edit helpers
function setBillingMode(mode) {
    const editing = mode === "edit";
    toggleHidden(UI.billingView, editing);     // show in view
    toggleHidden(UI.billingEdit, !editing);    // show in edit
    toggleHidden(UI.btnBillingEdit, editing);  // Edit visible only in view
    toggleHidden(UI.btnBillingSave, !editing); // Save/Cancel visible only in edit
    toggleHidden(UI.btnBillingCancel, !editing);
}

function renderBillingView(data) {
    const displayValue = (id, val) => { 
        const el = document.getElementById(id); 
        if (el) 
            el.textContent = val || "—"; 
    };

    displayValue("v_name", data?.name);
    displayValue("v_vatin", data?.vatin);
    displayValue("v_line1", data?.line1);
    displayValue("v_city", data?.city);
    displayValue("v_postal_code", data?.postal_code);
    displayValue("v_country", data?.country);
}

function populateBillingForm(data) {
    if (!UI.billingForm) 
        return;

    for (const [k, v] of Object.entries(data || {})) {
        const el = UI.billingForm.querySelector(`[name="${k}"]`);
        if (el) el.value = v ?? "";
    }
}

// Loaders
async function loadSubscriptions() {
    state.subs = await apiListSubscriptions();
}
async function loadSeats() {
    state.seats = await apiGetSeats(state.currentSubId);
}
async function loadInvoices() {
    state.invoices = await apiGetInvoices(state.currentSubId);
}
async function loadBillingForm() {
    const data = await apiGetBilling();
    state.billing = data;
    renderBillingView(data);
    populateBillingForm(data);
    setBillingMode("view"); // default to read-only
}

// Bulk + events
function parseUsernames(s) {
    return s
        .split(/[\s,]+/)
        .map((x) => x.trim())
        .filter(Boolean)
        .slice(0, 999);
}

function wireEvents() {
    UI.tabs.forEach((t) => t.addEventListener("click", () => navigate(t.dataset.nav)));

    window.addEventListener("hashchange", () => showPage(getRouteFromHash()));

    if (!UI.seatsBody._wired) {
        UI.seatsBody.addEventListener("click", onSeatsBodyClick);
        UI.seatsBody._wired = true;
    }

    UI.subscriptionSelect.addEventListener("change", async () => {
        state.currentSubId = UI.subscriptionSelect.value;
        setLoading(true);
        try {
            await loadSeats();
            renderSummary();
            renderSeats();
            await loadInvoices();
            renderInvoices();
        } finally {
            setLoading(false);
        }
    });

    UI.applyBulk.addEventListener("click", async () => {
        const names = parseUsernames(UI.bulkBox.value);
        if (names.length === 0) return;

        UI.bulkError.classList.add("hidden");
        setLoading(true);
        try {
            await apiBulkAssign(state.currentSubId, names);
            await loadSeats();
            renderSummary();
            renderSeats();
            showToast("Bulk assigned");
        } catch {
            UI.bulkError.classList.remove("hidden");
        } finally {
            setLoading(false);
        }
    });

    UI.clearBulk.addEventListener("click", () => {
        UI.bulkBox.value = "";
        UI.bulkError.classList.add("hidden");
    });

    UI.refresh.addEventListener("click", async () => {
        setLoading(true);
        try {
            await Promise.all([loadSeats(), loadInvoices()]);
            renderSummary();
            renderSeats();
            renderInvoices();
            showToast("Refreshed");
        } finally {
            setLoading(false);
        }
    });

    UI.btnAddSubscription?.addEventListener("click", () => {
        location.href = "./checkout.html"
    });

    // Billing: Edit / Save / Cancel
    UI.btnBillingEdit?.addEventListener("click", () => {
        populateBillingForm(state.billing || {});
        setBillingMode("edit");
    });

    UI.btnBillingCancel?.addEventListener("click", () => {
        populateBillingForm(state.billing || {}); // revert
        setBillingMode("view");
    });

    UI.btnBillingSave?.addEventListener("click", async () => {
        if (!UI.billingForm) return;
        const data = Object.fromEntries(new FormData(UI.billingForm).entries());
        setLoading(true);
        try {
            await apiSaveBilling(data);
            state.billing = { ...state.billing, ...data };
            renderBillingView(state.billing);
            setBillingMode("view");
            showToast("Billing saved");
        } finally {
            setLoading(false);
        }
    });

    UI.saveBilling?.addEventListener("click", async () => {
        if (!UI.billingForm) return;
        const data = Object.fromEntries(new FormData(UI.billingForm).entries());
        setLoading(true);
        try {
            await apiSaveBilling(data);
            state.billing = { ...state.billing, ...data };
            renderBillingView(state.billing);
            setBillingMode("view");
            showToast("Billing saved");
        } finally {
            setLoading(false);
        }
    });
}

// Init
(async function init() {
    try {
        setLoading(true);
        state.user = await requireAuth();

        wireEvents();

        await loadSubscriptions();
        renderSubscriptionSelector();

        // enable add-subscription
        if (UI.btnAddSubscription) UI.btnAddSubscription.disabled = false;

        if (state.currentSubId) {
            await Promise.all([loadSeats(), loadInvoices()]);
            renderSummary();
            renderSeats();
            renderInvoices();
        }

        showPage(getRouteFromHash());
        await loadBillingForm();
    } finally {
        setLoading(false);
    }
})();
