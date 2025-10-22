import { onChange } from './ws-auth.js';
import { toast } from './ws-toast.js';

document.addEventListener('ws-auth-logout', () => {
  toast('Logged out.', { type: 'info' });
});

let first = true;
onChange((user) => {

  // Show a login-success toast only when returning from OAuth
  const flash = sessionStorage.getItem('ws:flash');
  if (flash === 'login-ok' && user) {
    const who = user.email || user.login || 'your account';
    toast(`Logged in as ${who}.`, { type: 'success' });
    sessionStorage.removeItem('ws:flash');
  }

  // Prevent any accidental first-load noise
  first = false;
}, { fireImmediately: true });
