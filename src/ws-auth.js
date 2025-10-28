export const API = 'https://api.websharper.com/';

let cachedUser = undefined;
const listeners = new Set();

const equalUser = (a, b) => {
    if (a === b) 
        return true;
    if (!a || !b) 
        return false;

    return a.login === b.login && a.email === b.email && a.name === b.name && a.avatarUrl === b.avatarUrl;
};

const emit = () => {
    for (const fn of listeners) { 
		try { 
			fn(cachedUser || null); 
		} 
		catch {} 
	}

    try { 
        document.dispatchEvent(new CustomEvent('ws-auth-change', { detail: { user: cachedUser || null } })); 
    } catch {}
};

export async function fetchMe(force = false) {
    if (cachedUser !== undefined && !force) 
		return cachedUser;
    try {
        const res = await fetch(`${API}/auth/me`, { 
			credentials: 'include', 
			headers: { 'Accept': 'application/json' } 
		});

        const newUser = (res.status === 204 || res.status === 401) ? null : (res.ok ? await res.json() : null);
        if (!equalUser(newUser, cachedUser)) { 
                cachedUser = newUser; 
        emit(); 
            } else { 
                cachedUser = newUser; 
            }

        return cachedUser;
    } catch {
        cachedUser = null; 
        emit(); 
        return null;
    }
}

export function buildStartUrl(returnUrl) {
    const pathAndQuery = returnUrl || (window.location.pathname + window.location.search);
    return `${API}/auth/github/start?returnUrl=${encodeURIComponent(pathAndQuery)}`;
}

export function login(returnUrl) {
    try { 
        sessionStorage.setItem("ws:flash", "login-ok"); 
    } catch {}
    window.location.href = buildStartUrl(returnUrl);
}

export async function logout({ reload = false } = {}) {
    try { 
		await fetch(`${API}/auth/logout`, { 
			method: 'POST', 
			credentials: 'include' 
		}); 
	} catch {}

    cachedUser = null; emit();
    emit();
    try { 
        document.dispatchEvent(new CustomEvent('ws-auth-logout')); 
    } catch {}
    if (reload) 
        location.reload();
}

export function onChange(handler, { fireImmediately = true } = {}) {
    listeners.add(handler);
    if (fireImmediately) 
        handler(cachedUser ?? null);

    return () => listeners.delete(handler);
}

export function mountGate({ authSectionId, paymentSectionId, emailInputId, loginBtnId, logoutBtnId } = {}) {
    const elAuth = authSectionId ? document.getElementById(authSectionId) : null;
    const elPay = paymentSectionId ? document.getElementById(paymentSectionId) : null;
    const elEmail = emailInputId ? document.getElementById(emailInputId) : null;
    const btnIn = loginBtnId ? document.getElementById(loginBtnId) : null;
    const btnOut = logoutBtnId ? document.getElementById(logoutBtnId) : null;

    const show = el => el && el.classList.remove('hidden');
    const hide = el => el && el.classList.add('hidden');

    onChange((me) => {
        if (me) {
        hide(elAuth); show(elPay);
        if (elEmail && me.email && !elEmail.value) 
            elEmail.value = me.email;
        } else {
        show(elAuth); hide(elPay);
        }
    });

    if (btnIn)  btnIn.addEventListener('click', () => login());
    if (btnOut) btnOut.addEventListener('click', () => logout({ reload: true }));

    fetchMe();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => fetchMe());
} else {
    fetchMe();
}
