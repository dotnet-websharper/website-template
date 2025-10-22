import { onChange, fetchMe, login, logout } from './ws-auth.js';

const $ = (id) => document.getElementById(id);

function init() {
  const els = {
    root: $('accountRoot'),
    btn: $('accountBtn'),
    dropdown: $('accountDropdown'),
    avatar: $('accountAvatar'),
    icon: $('accountIcon'),
    header: $('accountHeader'),
    btnManage: $('btnManage'),
    btnLogin: $('btnLogin'),
    btnLogout: $('btnLogout'),
  };
  if (!els.root || !els.btn || !els.dropdown) return;

  let isOpen = false;
  let me = null;

  const setOpen = (open) => {
    isOpen = open;
    els.dropdown.classList.toggle('hidden', !open);
    els.btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  };

  const onOutsideClick = (e) => { if (!els.root.contains(e.target)) setOpen(false); };
  const onEsc = (e) => { if (e.key === 'Escape') setOpen(false); };
  const onBtnKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') { 
      e.preventDefault(); 
      setOpen(!isOpen); 
    }

    if (e.key === 'ArrowDown') { 
      e.preventDefault(); 
      setOpen(true); 
    }
  };

  const showFlex = (el, show) => {
    if (!el) return;
    el.classList.toggle('hidden', !show);
    el.classList.toggle('flex', show);
  };

  const render = () => {
    const authed = !!me;

    showFlex(els.btnManage, authed);
    showFlex(els.btnLogout, authed);

    if (authed && me.avatarUrl) {
      els.avatar.src = me.avatarUrl;
      els.avatar.classList.remove('hidden');
      els.icon.classList.add('hidden');
    } else {
      els.avatar.src = '';
      els.avatar.classList.add('hidden');
      els.icon.classList.remove('hidden');
    }

    if (authed) {
      const name = me.name || me.login || 'Account';
      els.header.textContent = me.email ? `${name} · ${me.email}` : name;
      els.header.classList.remove('hidden');
    } else {
      els.header.textContent = '';
      els.header.classList.add('hidden');
    }

    els.btnManage.classList.toggle('hidden', !authed);
    els.btnLogout.classList.toggle('hidden', !authed);
    els.btnLogin.classList.toggle('hidden', authed);
  };

  // wire UI
  els.btn.addEventListener('click', () => setOpen(!isOpen));
  els.btn.addEventListener('keydown', onBtnKeyDown);
  document.addEventListener('click', onOutsideClick);
  document.addEventListener('keydown', onEsc);

  if (els.btnLogin)  els.btnLogin.addEventListener('click', () => login());
  if (els.btnLogout) els.btnLogout.addEventListener('click', async () => { await logout(); setOpen(false); });

  onChange((user) => { me = user; render(); });
  fetchMe();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
