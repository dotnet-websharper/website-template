document.addEventListener("DOMContentLoaded", () => {
    const USE_MOCK = true; // set to false when backend is ready
    const apiBase = "https://api.intellifactory.com/api";
    const SUB_ID = new URLSearchParams(location.search).get("sub") || "demo-sub-1";
    const token = localStorage.getItem("if_api_token") || "demo-token"; // placeholder

    const el = (id) => document.getElementById(id);
    const seatsBody = el("seatsBody");
    const applyBtn = el("applyBulk");
    const clearBtn = el("clearBulk");
    const refreshBtn = el("refresh");
    const saveBtn = el("saveAll");

    if (!seatsBody || !applyBtn || !clearBtn || !refreshBtn || !saveBtn) return;

    let subscription = null;
    let seats = [];
    let dirty = new Map(); // seat_id -> github_login|null

    // GitHub username validation
    const ghOk = (u) => {
        if (typeof u !== "string") 
            return false;

        const v = u.trim();

        if (!v) 
            return false;

        if (!/^[A-Za-z0-9-]{1,39}$/.test(v)) 
            return false;

        if (v.startsWith("-") || v.endsWith("-")) 
            return false;

        if (v.includes("--")) 
            return false; // GitHub disallows consecutive hyphens in some contexts

        return true;
    };

    const norm = (v) => (v && typeof v === "string" ? v.trim().toLowerCase() : null);

    function setProgress(used, total) {
        const usagePercentage = total > 0 ? Math.round((used / total) * 100) : 0;
        el("seatProgress").style.width = usagePercentage + "%";

        const available = Math.max(total - used, 0);
        el("seatsBadge").textContent = `${used} assigned, ${available} available`;
    }

    function toast(msg) {
        const toast = el("toast");
        toast.textContent = msg;
        toast.classList.remove("hidden");
        setTimeout(() => toast.classList.add("hidden"), 1600);
    }

    function showSpinner(show) {
        el("spinner").classList.toggle("hidden", !show);
    }

    function updateSaveState() {
        el("saveAll").disabled = dirty.size === 0;
    }

    window.addEventListener("beforeunload", (e) => {
        if (dirty.size > 0) {
            e.preventDefault();
        }
    });

    // Real fetch helpers
    async function realGet(url) {
        const response = await fetch(url, {
            headers: { Authorization: `Bearer ${token}` },
        });
        if (!response.ok) throw new Error(await response.text());
        return response.json();
    }

    async function realPut(url, body) {
        const response = await fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
                "Idempotency-Key": `seats-batch-${crypto.randomUUID?.() || Date.now()}`,
            },
            body: JSON.stringify(body),
        });
        if (!response.ok) throw new Error(await response.text());
        return response.json();
    }

    // Mock fetch (remove when backend is ready)
    async function fetchSubscription(id) {
        if (!USE_MOCK) return realGet(`${apiBase}/subscriptions/${id}`);
        return new Promise((res) =>
            setTimeout(
                () =>
                    res({
                        id,
                        plan: "Professional",
                        seats_total: 5,
                        seats_used: 2,
                        renews_at: "2026-01-01",
                        status: "active",
                        account_name: "acme-inc",
                    }),
                200
            )
        );
    }

    async function fetchSeats(id) {
        if (!USE_MOCK) return realGet(`${apiBase}/subscriptions/${id}/seats`);
        return new Promise((res) =>
            setTimeout(
                () =>
                    res([
                        { seat_id: "s1", github_login: "alice", status: "assigned", assigned_at: "2025-01-01" },
                        { seat_id: "s2", github_login: "bob-dev", status: "assigned", assigned_at: "2025-01-03" },
                        { seat_id: "s3", github_login: null, status: "unassigned" },
                        { seat_id: "s4", github_login: null, status: "unassigned" },
                        { seat_id: "s5", github_login: null, status: "unassigned" },
                    ]),
                200
            )
        );
    }

    async function saveSeatChanges(id, changes) {
        if (!USE_MOCK) return realPut(`${apiBase}/subscriptions/${id}/seats`, { seats: changes });
        return new Promise((res) => setTimeout(() => res({ ok: true, seats: changes }), 250));
    }

    // Render
    function formatDate(iso) {
        if (!iso) return "-";
        try {
            const date = new Date(iso);
            return date.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "2-digit" });
        } catch {
            return iso;
        }
    }

    function renderSubscription() {
        el("planName").textContent = subscription.plan;
        el("seatsTotal").textContent = subscription.seats_total;
        const used = seats.filter((s) => !!s.github_login).length;
        el("seatsUsed").textContent = used;
        el("renewsAt").textContent = formatDate(subscription.renews_at);
        el("subStatus").textContent = subscription.status;
        el("accountName").textContent = subscription.account_name || "-";
        setProgress(used, subscription.seats_total);
    }

    function seatRowTemplate(seatInfo, idx) {
        const inputId = `seat-${seatInfo.seat_id}`;
        const value = seatInfo.github_login ?? "";
        const status = seatInfo.github_login ? "assigned" : "unassigned";
        return `
    <tr data-seat-row="${seatInfo.seat_id}">
    <td class="px-4 py-3">#${idx + 1}</td>
    <td class="px-4 py-2">
        <div class="flex items-center gap-2">
        <label class="sr-only" for="${inputId}">GitHub username for seat #${idx + 1}</label>
        <span class="text-gray-400">@</span>
        <input id="${inputId}" data-seat="${seatInfo.seat_id}" value="${value}" placeholder="unassigned"
                class="w-full rounded-md border border-gray-300 dark:border-gray-800 bg-transparent px-2 py-1"/>
        </div>
        <p class="mt-1 hidden text-xs text-red-600" id="err-${seatInfo.seat_id}">Invalid GitHub username</p>
    </td>
    <td class="px-4 py-3 capitalize">${status}</td>
    <td class="px-4 py-2 text-right">
        <button data-action="unassign" data-seat="${seatInfo.seat_id}"
        class="text-sm underline text-gray-600 dark:text-gray-300 ${seatInfo.github_login ? "" : "opacity-30 pointer-events-none"}">
        Unassign
        </button>
    </td>
    </tr>`;
    }

    function renderSeats() {
        seatsBody.innerHTML = seats.map(seatRowTemplate).join("");
    }

    function wireSeatEvents() {
        seatsBody.addEventListener("input", (e) => {
            if (!e.target.matches('input[data-seat]')) 
                return;

            const id = e.target.dataset.seat;
            const val = norm(e.target.value);
            const err = el(`err-${id}`);

            if (val && !ghOk(val)) {
                e.target.classList.add("ring-1", "ring-red-500");
                err?.classList.remove("hidden");
            } else {
                e.target.classList.remove("ring-1", "ring-red-500");
                err?.classList.add("hidden");
            }
            dirty.set(id, val || null);
            updateSaveState();
        });

        seatsBody.addEventListener("click", (e) => {
            if (!e.target.matches('button[data-action="unassign"]')) return;
            const id = e.target.dataset.seat;
            const input = seatsBody.querySelector(`input[data-seat="${id}"]`);
            input.value = "";
            input.classList.remove("ring-1", "ring-red-500");
            el(`err-${id}`)?.classList.add("hidden");
            dirty.set(id, null);
            updateSaveState();
        });
    }

    // Actions
    applyBtn.addEventListener("click", () => {
        const raw = el("bulkBox").value.trim();
        if (!raw) 
            return;

        const list = raw.split(/[\s,]+/).map((x) => norm(x)).filter(Boolean);
        const invalid = list.filter((u) => !ghOk(u));

        if (invalid.length) {
            el("bulkError").classList.remove("hidden");
            return;
        }

        el("bulkError").classList.add("hidden");
        const empties = seats.filter((s) => !s.github_login);

        for (let i = 0; i < empties.length && i < list.length; i++) {
            const seatId = empties[i].seat_id;
            const input = seatsBody.querySelector(`input[data-seat="${seatId}"]`);
            input.value = list[i];
            dirty.set(seatId, list[i]);
        }
        updateSaveState();
    });

    clearBtn.addEventListener("click", () => {
        el("bulkBox").value = "";
        el("bulkError").classList.add("hidden");
    });

    refreshBtn.addEventListener("click", async () => {
        showSpinner(true);
        dirty.clear();
        subscription = await fetchSubscription(SUB_ID);
        seats = await fetchSeats(SUB_ID);
        renderSubscription();
        renderSeats();
        updateSaveState();
        showSpinner(false);
    });

    saveBtn.addEventListener("click", async () => {
        const changes = Array.from(dirty.entries()).map(([seat_id, login]) => ({
            seat_id,
            github_login: login,
            action: login ? "assign" : "unassign",
        }));
        if (!changes.length) return toast("Nothing to save");

        // block if any invalid inputs
        for (const [seat_id, login] of dirty.entries()) {
            if (login && !ghOk(login)) {
                const input = seatsBody.querySelector(`input[data-seat="${seat_id}"]`);
                input?.classList.add("ring-1", "ring-red-500");
                el(`err-${seat_id}`)?.classList.remove("hidden");
                toast("Fix invalid usernames");
                return;
            }
        }

        showSpinner(true);
        try {
            await saveSeatChanges(SUB_ID, changes);
            // apply locally
            changes.forEach((ch) => {
                const s = seats.find((x) => x.seat_id === ch.seat_id);
                s.github_login = ch.github_login;
            });
            dirty.clear();
            renderSubscription();
            renderSeats();
            // brief row highlight
            changes.forEach((ch) => {
                const row = seatsBody.querySelector(`[data-seat-row="${ch.seat_id}"]`);
                row?.classList.add("bg-yellow-50", "dark:bg-yellow-900/20");
                setTimeout(() => row?.classList.remove("bg-yellow-50", "dark:bg-yellow-900/20"), 800);
            });
            updateSaveState();
            toast("Saved");
        } catch (e) {
            console.error(e);
            toast("Save failed");
        } finally {
            showSpinner(false);
        }
    });

    // Init
    (async function init() {
        showSpinner(true);
        subscription = await fetchSubscription(SUB_ID);
        seats = await fetchSeats(SUB_ID);
        renderSubscription();
        renderSeats();
        wireSeatEvents();
        updateSaveState();
        showSpinner(false);
    })();    
});