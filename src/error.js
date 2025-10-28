// src/error.js
import { buildStartUrl } from "./ws-auth.js";

function sanitizePath(urlLike) {
    try {
        const u = new URL(urlLike, document.baseURI);
        if (u.origin !== window.location.origin) {
            return "/website-template/";
        }
        u.searchParams.delete("auth_error");
        const clean = u.pathname + (u.search ? u.search : "") + (u.hash || "");
        if (!clean.startsWith("/website-template/")) return "/website-template/";
        return clean;
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
const code = params.get("code") || "unexpected";

let previous =
    params.get("from")
    || sameOriginReferrer()
    || "/website-template/";

previous = sanitizePath(previous);

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

document.getElementById("msg").textContent = MESSAGES[code] || MESSAGES.unexpected;

const back = document.getElementById("back");
back.setAttribute("href", previous);
back.addEventListener("click", (e) => {
    e.preventDefault();
    location.href = previous;
});

document.getElementById("retry").addEventListener("click", () => {
    location.href = buildStartUrl(previous);
});
