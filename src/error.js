// src/error.js
const $ = (s, r = document) => r.querySelector(s);
const show = (el, yes) => el.classList.toggle("hidden", !yes);

// Parse query string to object
function params() {
  const u = new URL(location.href);
  return Object.fromEntries(u.searchParams.entries());
}

// Pull details from ?key=… (sessionStorage) or from query params
function loadError() {
  const p = params();

  if (p.key) {
    try {
      const raw = sessionStorage.getItem("ws_err_" + p.key);
      if (raw) return JSON.parse(raw);
    } catch { /* ignore */ }
  }

  // Fallback: read from query string
  return {
    status: Number(p.status) || undefined,
    title: p.title || "Unexpected error",
    message: p.message || "No additional details.",
    endpoint: p.endpoint,
    method: p.method,
    requestId: p.rid,
    when: p.ts ? new Date(Number(p.ts)).toISOString() : new Date().toISOString(),
    page: p.page || document.referrer || location.href,
    userAgent: navigator.userAgent,
  };
}

function render(e) {
  $("#e_title").textContent = e.title || "Something went wrong";
  $("#e_subtitle").textContent = e.message || "";
  $("#e_status").textContent = e.status ?? "—";
  $("#e_endpoint").textContent = e.endpoint || "—";
  $("#e_rid").textContent = e.requestId || "—";
  $("#e_time").textContent = e.when || new Date().toISOString();

  // Pretty JSON (include everything)
  const json = {
    status: e.status,
    title: e.title,
    message: e.message,
    endpoint: e.endpoint,
    method: e.method,
    requestId: e.requestId,
    when: e.when,
    page: e.page,
    userAgent: e.userAgent,
    extra: e.extra || undefined,
  };
  $("#e_json").textContent = JSON.stringify(json, null, 2);
}

function copyDetails() {
  const text = $("#e_json").textContent;
  if (!text) return;
  navigator.clipboard?.writeText(text).then(() => {
    const t = $("#toast");
    t.classList.remove("hidden");
    setTimeout(() => t.classList.add("hidden"), 1500);
  }).catch(() => {
    // Fallback: select and copy
    const sel = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents($("#e_json"));
    sel.removeAllRanges();
    sel.addRange(range);
    try { document.execCommand("copy"); } catch {}
    sel.removeAllRanges();
  });
}

$("#btnBack").addEventListener("click", () => {
  if (history.length > 1) history.back();
  else location.href = "./";
});
$("#btnCopy").addEventListener("click", copyDetails);

// Go!
render(loadError());
