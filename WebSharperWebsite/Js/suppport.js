import { initSeatSelector } from "./seatSelector.js";
import { initContactForm } from "./contactForm.js";
import { initPlans } from "./plans.js";

document.addEventListener("DOMContentLoaded", () => {
    // Run plans if the Plans section exists
    if (document.querySelector("#wsProCard")) {
        initPlans();
    } else {
        // Otherwise, run the simple seat selector (pricing widget)
        initSeatSelector({ pricePerSeat: 2500 });
    }

    // Contact form is independent; initialize if present
    initContactForm();
});
