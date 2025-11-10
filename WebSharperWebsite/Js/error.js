const abs = (p) => new URL(p, document.baseURI).toString();

const { buildStartUrl } = await import(abs("Js/ws-auth.js"));

function sameOriginReferrer() {
    try {
        if (!document.referrer) return null;
        const r = new URL(document.referrer);
        return r.origin === window.location.origin ? (r.pathname + r.search + r.hash) : null;
    } catch { return null; }
}

const params = new URLSearchParams(location.search);

const code = params.get("code");
const isAuthError = !!code;

let previous =
    params.get("from") ||
    params.get("page") ||
    sameOriginReferrer();

const MESSAGES = {
    invalid_state: "Sign-in failed, please try again.",
    token: "GitHub sign-in failed during token exchange. Please try again.",
    token_missing: "GitHub sign-in failed (no token).",
    user: "GitHub sign-in failed when fetching your user info.",
    user_parse: "GitHub sign-in failed (user data issue).",
    db: "Sign-in temporarily unavailable. Please try again shortly.",
    service: "Sign-in temporarily unavailable (service not configured).",
    unexpected: "Unexpected error during sign-in. Please try again."
};

const friendly = params.get("message");  // from redirectToError
const title = params.get("title") || "Something went wrong";
const msgText = friendly || (code ? (MESSAGES[code] || MESSAGES.unexpected) : "An unexpected error occurred. Please try again.");

document.getElementById("title").textContent = title;
document.getElementById("msg").textContent = msgText;

const back = document.getElementById("back");
back.setAttribute("href", previous);
back.addEventListener("click", (e) => {
    e.preventDefault();
    location.href = previous;
});

document.getElementById("retry").addEventListener("click", () => {
    if (isAuthError) {
        location.href = buildStartUrl(previous);
    } else {
        location.href = previous;
    }
});
