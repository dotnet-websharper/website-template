export function toast(message, { type = "info", timeout = 2800 } = {}) {
  let root = document.getElementById("toast-root");
  if (!root) {
    root = document.createElement("div");
    root.id = "toast-root";
    root.setAttribute("aria-live", "polite");
    root.className = "fixed top-4 right-4 z-[9999] flex flex-col gap-2";
    document.body.appendChild(root);
  }

  const base =
    "pointer-events-auto rounded-xl px-4 py-3 shadow-lg ring-1 transition duration-300";
  const palette =
    type === "success" ? "bg-green-600 text-white ring-green-500/30" :
    type === "error" ? "bg-red-600 text-white ring-red-500/30"     :
    type === "warning" ? "bg-yellow-500 text-black ring-yellow-400/30" :
                         "bg-gray-900 text-white ring-white/10";

  const el = document.createElement("div");
  el.role = "status";
  el.className = `${base} ${palette}`;
  el.textContent = message;
  root.appendChild(el);

  const remove = () => el.remove();
  setTimeout(() => {
    el.classList.add("opacity-0", "translate-y-1");
    setTimeout(remove, 300);
  }, timeout);
}
