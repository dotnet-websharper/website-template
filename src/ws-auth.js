// export const API = 'https://api.websharper.com';
export const API = 'http://localhost:55482';

let cachedUser = undefined;
let csrfToken = undefined;
const listeners = new Set();

const AUTH_CHANGE = 'ws-auth-change';
const AUTH_LOGOUT = 'ws-auth-logout';
const FLASH_KEY = 'ws:flash';

// public api

export async function fetchMe(force = false) {
    if (cachedUser !== undefined && !force) 
        return cachedUser;
    try {
        const res = await getJson(api('/auth/me'));
        if (!res.ok || isLoggedOutStatus(res.status)) { 
            resetAuth(); 
            return null; 
        }

        const data = await res.json();
        setUser(toUser(data));
        return cachedUser;
    } catch {
        resetAuth();
        return null;
    }
}

export function getCsrfToken() {
    return csrfToken;
}

export function buildStartUrl(returnUrl) {
    const pathAndQuery = returnUrl || (window.location.pathname + window.location.search);
    return `${api('/auth/github/start')}?returnUrl=${encodeURIComponent(pathAndQuery)}`;
}

export function login(returnUrl) {
    try { 
        sessionStorage.setItem(FLASH_KEY, 'login-ok'); 
    } catch {}

    window.location.href = buildStartUrl(returnUrl);
}

export async function logout({ reload = false } = {}) {
    try { 
        await postJson(api('/auth/logout'), { 'X-CSRF-Token': csrfToken || '' }); 
    } catch {}

    resetAuth();
    emitEvent(AUTH_LOGOUT);

    if (reload) { 
        try { 
            location.reload(); 
        } catch {} 
    }
}

export function onChange(handler, { fireImmediately = true } = {}) {
    listeners.add(handler);
    if (fireImmediately) handler(cachedUser ?? null);
    return () => listeners.delete(handler);
}

export function mountGate({ authSectionId, paymentSectionId, emailInputId, loginBtnId, logoutBtnId } = {}) {
    const elAuth = authSectionId ? document.getElementById(authSectionId) : null;
    const elPay = paymentSectionId ? document.getElementById(paymentSectionId) : null;
    const elEmail = emailInputId ? document.getElementById(emailInputId) : null;
    const btnIn = loginBtnId ? document.getElementById(loginBtnId) : null;
    const btnOut = logoutBtnId ? document.getElementById(logoutBtnId) : null;

    onChange((me) => {
        if (me) {
            hide(elAuth); show(elPay);
            if (elEmail && me.email && !elEmail.value) elEmail.value = me.email;
        } else {
            show(elAuth); hide(elPay);
        }
    });

    if (btnIn) btnIn.addEventListener('click', () => login());
    if (btnOut) btnOut.addEventListener('click', () => logout({ reload: true }));

    fetchMe();
}

// entry point

if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => fetchMe());
    } else {
        fetchMe();
    }
}

// utilities

function equalUser(a, b) {
    if (a === b) 
        return true;

    if (!a || !b) 
        return false;

    return a.login === b.login && a.email === b.email && a.name === b.name && a.avatarUrl === b.avatarUrl;
}

function emitEvent(name, detail) {
    try { 
        document.dispatchEvent(new CustomEvent(name, { detail })); 
    } catch {}
}

function emitAuthChange() {
    for (const fn of listeners) { 
        try { 
            fn(cachedUser || null); 
        } catch {} 
    }

    emitEvent(AUTH_CHANGE, { user: cachedUser || null });
}

function resetAuth() {
    cachedUser = null;
    csrfToken = undefined;
    emitAuthChange();
}

function toUser(data) {
    csrfToken = data.csrfToken || undefined;
    return {
        login: data.login,
        name: data.name,
        avatarUrl: data.avatarUrl,
        email: data.email
    };
}

function setUser(newUser) {
    if (!equalUser(newUser, cachedUser)) {
        cachedUser = newUser;
        emitAuthChange();
    } else {
        cachedUser = newUser;
    }
}

function api(p) { 
    return `${API}${p}`; 
}

function show(el) { if (el) el.classList.remove('hidden'); }
function hide(el) { if (el) el.classList.add('hidden'); }

function getJson(url) {
    return fetch(url, { 
        method: 'GET', 
        credentials: 'include', 
        headers: { 'Accept': 'application/json' } 
    });
}

function postJson(url, headers = {}) {
    return fetch(url, { 
        method: 'POST', 
        credentials: 'include', 
        headers: { 'Accept': 'application/json', ...headers } 
    });
}

function isLoggedOutStatus(s) { 
    return s === 204 || s === 401; 
}
