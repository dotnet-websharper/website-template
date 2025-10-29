export function initPlans() {
    // If plans elements aren’t present, do nothing.
    const $ = (s, r = document) => r.querySelector(s);
    const num = (v) => Number.parseInt(v, 10);

    const billMonth = $("#wsBillMonth");
    const billYear = $("#wsBillYear");

    const proCard = $("#wsProCard");
    const freeCard  = $("#wsFreeCard");
    if (!proCard || !freeCard || !billMonth || !billYear) return;

    const proPriceText = $("#wsProPriceText");
    const freePriceText = $("#wsFreePriceText");

    const proTotalLabel = $("#wsProTotalLabel");
    const freeTotalLabel= $("#wsFreeTotalLabel");

    const proTotal = $("#wsProTotal");
    const freeTotal = $("#wsFreeTotal");

    const seatMinus = $("#wsSeatsMinus");
    const seatPlus = $("#wsSeatsPlus");
    const seatInput = $("#wsSeatCount");

    const proCheckout = $("#wsProCheckout");
    const freeCheckout = $("#wsFreeCheckout");

    if (!proCheckout || !freeCheckout || !seatMinus || !seatPlus || !seatInput) return;

    let interval = "year"; // "month" | "year"

    const usd = (n) => `$${n.toLocaleString("en-US")}`;
    const applyActive = (btn, active) => {
        btn.dataset.active = String(active);
        btn.setAttribute("aria-pressed", String(active));
    };

    const getPrices = () => {
        const pro = num(proCard.dataset[interval === "month" ? "priceMonth" : "priceYear"]);
        const fr  = num(freeCard.dataset[interval === "month" ? "priceMonth" : "priceYear"]);
        return { pro, fr };
    };

    function updateUI() {
        const { pro, fr } = getPrices();
        const seats = Math.max(1, Math.min(999, num(seatInput.value) || 1));

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
        const v = Math.max(1, (num(seatInput.value) || 1) - 1);
        seatInput.value = String(v);
        updateUI();
    });

    seatPlus.addEventListener("click", () => {
        const v = Math.min(999, (num(seatInput.value) || 1) + 1);
        seatInput.value = String(v);
        updateUI();
    });

    seatInput.addEventListener("input", updateUI);

    // Init
    updateUI();
}
