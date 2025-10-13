document.addEventListener("DOMContentLoaded", () => {
    (() => {
        const PRICE_PER_SEAT = 2500;
        const format = (n) => `$${n.toLocaleString()}`;

        const input = document.getElementById('wsSeatCount');
        const minus = document.getElementById('wsSeatsMinus');
        const plus = document.getElementById('wsSeatsPlus');
        const total = document.getElementById('wsTotal');
        const go = document.getElementById('wsGoCheckout');

        if (!input || !minus || !plus || !total || !go) return;

        const normalizeSeatCount = (n) => Math.max(1, Math.min(999, n|0));

        function sync(n) {
            const seats = normalizeSeatCount(n);
            input.value = seats;
            total.textContent = format(seats * PRICE_PER_SEAT);
            go.href = `./checkout.html?seats=${seats}`;
        }

        minus.addEventListener('click', () => sync(+input.value - 1));
        plus.addEventListener('click', () => sync(+input.value + 1));
        input.addEventListener('input', () => sync(parseInt(input.value || '1', 10)));

        // initialize
        sync(+input.value || 1);
    })();
});