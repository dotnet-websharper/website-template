export function redirectToError(errorLike, context = {}) {
    const norm = normalizeError(errorLike, context);

    // Save bulky details under a short key
    const key = Math.random().toString(36).slice(2, 10);
    try { sessionStorage.setItem("ws_err_" + key, JSON.stringify(norm)); } catch {}

    const q = new URLSearchParams({
        key,
        status: String(norm.status || ""),
        title: norm.title || "Error",
        message: (norm.message || "").slice(0, 300),
        rid: norm.requestId || "",
        ts: String(Date.now()),
        page: location.href
    });

    location.href = `./error.html?${q.toString()}`;
}

// Wrap fetch to treat { error: "..."} bodies as errors too
export async function safeFetch(url, init) {
    const res = await fetch(url, init);
    let body = null;

    const contentType = res.headers.get("content-type") || "";
    const maybeJson = contentType.includes("application/json");

    if (maybeJson) {
        try { body = await res.json(); } catch {}
    } else {
        body = await res.text();
    }

    // If server sent error JSON or non-OK status, throw rich error
    if (!res.ok || (body && typeof body === "object" && "error" in body)) {
        const err = new Error(
            (body && body.error) || (res.statusText || "Request failed")
        );
        err.status = res.status || undefined;
        err.response = res;
        err.body = body;
        throw err;
    }

    return body;
}

function normalizeError(errorLike, ctx) {
    const res = errorLike?.response;
    const rid =
        res?.headers?.get?.("x-request-id") ||
        res?.headers?.get?.("request-id") || ctx.requestId;

    return {
        status: errorLike?.status ?? res?.status ?? ctx.status,
        title: ctx.title || "Request error",
        message: errorLike?.message || ctx.message,
        requestId: rid,
        when: new Date().toISOString(),
        page: ctx.page || location.href,
        userAgent: navigator.userAgent,
        extra: {
            body: errorLike?.body ?? undefined
        }
    };
}
