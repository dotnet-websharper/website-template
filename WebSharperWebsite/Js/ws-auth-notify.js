const abs = (p) => new URL(p, document.baseURI).toString();

const { onChange } = await import(abs("Js/ws-auth.js"));
const { toast } = await import(abs("Js/ws-toast.js"));

document.addEventListener('ws-auth-logout', () => {
  toast('Logged out.', { type: 'info' });
});

let first = true;
onChange((user) => {

  // Show a login-success toast only when returning from OAuth
  const flash = sessionStorage.getItem('ws:flash');
  if (flash === 'login-ok' && user) {
    const who = user.name || user.login || 'your account';
    toast(`Logged in as ${who}.`, { type: 'success' });
    sessionStorage.removeItem('ws:flash');
  }

  // Prevent any accidental first-load noise
  first = false;
}, { fireImmediately: true });
