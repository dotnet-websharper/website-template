import { buildStartUrl } from "./ws-auth.js";

function sanitizePath(urlLike) {
    try {
        const u = new URL(urlLike, document.baseURI);
        if (u.origin !== window.location.origin) return "/website-template/";
        u.searchParams.delete("auth_error");
        const clean = u.pathname + (u.search || "") + (u.hash || "");
        return clean.startsWith("/website-template/") ? clean : "/website-template/";
    } catch {
        const [path, query = ""] = String(urlLike || "").split("?");
        const qs = new URLSearchParams(query);
        qs.delete("auth_error");
        const q = qs.toString();
        const p = path || "/website-template/";
        return (p.startsWith("/website-template/") ? p : "/website-template/") + (q ? "?" + q : "");
    }
}

function sameOriginReferrer() {
    try {
        if (!document.referrer) return null;
        const r = new URL(document.referrer);
        return r.origin === window.location.origin ? (r.pathname + r.search + r.hash) : null;
    } catch { return null; }
}

const params = new URLSearchParams(location.search);

// Detect auth-style error (uses ?code=...) vs generic/checkout (uses ?message=... from redirectToError)
const code = params.get("code");                      // when coming from auth flow
const isAuthError = !!code;

// Preferred “previous” page order:
// 1) explicit ?from=... (if provided elsewhere)
// 2) ?page=... (set by redirectToError for checkout & generic errors)
// 3) same-origin referrer
// 4) homepage
let previous =
    params.get("from") ||
    params.get("page") ||
    sameOriginReferrer() ||
    "/website-template/";

previous = sanitizePath(previous);

// Keep your simple texts. If we have a friendly message (?message=...), show it.
// Otherwise, map auth codes to clear messages.
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

// “Go back” link just returns to previous
const back = document.getElementById("back");
back.setAttribute("href", previous);
back.addEventListener("click", (e) => {
    e.preventDefault();
    location.href = previous;
});

// “Try again”:
// - For auth errors, restart GitHub sign-in and return to the previous page on success.
// - For generic/checkout errors, just go back to the previous page (usually /checkout.html).
document.getElementById("retry").addEventListener("click", () => {
    if (isAuthError) {
        location.href = buildStartUrl(previous);
    } else {
        location.href = previous;
    }
});
