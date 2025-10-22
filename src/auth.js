
const API_BASE = 'http://localhost:55482';

// Elements
const elAuthSection = document.getElementById('authSection');
const elPaymentSection = document.getElementById('paymentSection');
const btnGithubLogin = document.getElementById('wsGithubLogin');

const inputEmail = document.getElementById('email');

const logoutBtn = document.getElementById('logoutBtn');

logoutBtn?.addEventListener('click', async () => {
      try {
        await fetch(API_BASE + '/auth/logout', { method: 'POST', credentials: 'include' });
      } catch (_) { /* ignore */ }
      location.reload();
    });

// Utils
const show = el => el?.classList.remove('hidden');
const hide = el => el?.classList.add('hidden');

// Auth
async function fetchMe() {
  const res = await fetch(`${API_BASE}/auth/me`, {
    credentials: 'include',
    headers: { 'Accept': 'application/json' }
  });
  if (res.status === 204 || res.status === 401)
    return null;
  if (!res.ok) 
    throw new Error(`GET /auth/me failed (${res.status})`);
  return res.json(); // { login, email, name, avatarUrl }
}

function toStartUrl() {
  const pathAndQuery = window.location.pathname + window.location.search;
  console.log("pathAndQuery", pathAndQuery);
  return `${API_BASE}/auth/github/start?returnUrl=${encodeURIComponent(pathAndQuery)}`;
}

async function initAuthGate() {
  try {
    const me = await fetchMe();
    if (!me) {
      // Not logged in → show GitHub login section
      show(elAuthSection);
      hide(elPaymentSection);
    } else {
      // Logged in → show checkout, prefill email if available
      hide(elAuthSection);
      show(elPaymentSection);
      if (me.email && inputEmail && !inputEmail.value) {
        inputEmail.value = me.email;
      }
    }
  } catch (err) {
    // If /auth/me fails for some reason, show login section
    console.warn(err);
    show(elAuthSection);
    hide(elPaymentSection);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // Initial auth check
  initAuthGate();

  // Login button → GitHub OAuth
  if (btnGithubLogin) {
    btnGithubLogin.addEventListener('click', () => {
      window.location.href = toStartUrl();
    });
  }
});
