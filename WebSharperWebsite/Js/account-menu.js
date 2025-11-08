const abs = (p) => new URL(p, document.baseURI).toString();

const { onChange, fetchMe, login, logout } = await import(abs("Js/ws-auth.js"));

const $ = (id) => document.getElementById(id);

const showFlex = (el, show) => {
  if (!el) return;
  el.classList.toggle('hidden', !show);
  el.classList.toggle('flex', show);
};

// Desktop dropdown (existing IDs)
function setupDesktopByIds() {
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
  if (!els.root || !els.btn || !els.dropdown) return null;

  let isOpen = false;
  let me = null;

  const setOpen = (open) => {
    isOpen = open;
    els.dropdown.classList.toggle('hidden', !open);
    els.btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  };

  const onOutsideClick = (e) => { 
    if (!els.root.contains(e.target)) 
      setOpen(false); 
  };

  const onEsc = (e) => { 
    if (e.key === 'Escape') 
      setOpen(false); 
  };

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

  // actions
  els.btn.addEventListener('click', () => setOpen(!isOpen));
  els.btn.addEventListener('keydown', onBtnKeyDown);
  document.addEventListener('click', onOutsideClick);
  document.addEventListener('keydown', onEsc);
  els.btnLogin?.addEventListener('click', () => login());
  els.btnLogout?.addEventListener('click', async () => { 
    await logout(); 
    setOpen(false); 
  });

  const render = (user) => {
    me = user;
    const authed = !!me;

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
      const name = me.login || me.name || 'Account';
      els.header.textContent = name;
      els.header.classList.remove('hidden');
    } else {
      els.header.textContent = '';
      els.header.classList.add('hidden');
    }

    showFlex(els.btnManage, authed);
    showFlex(els.btnLogout, authed);
    showFlex(els.btnLogin, !authed);
  };

  return { render };
}

// Mobile blocks (data attributes)
function setupMobile(root) {
  const els = {
    root,
    header: root.querySelector('[data-el="header"]'),
    btnManage: root.querySelector('[data-el="manage"]'),
    btnLogin: root.querySelector('[data-el="login"]'),
    btnLogout: root.querySelector('[data-el="logout"]'),
  };
  if (!els.root) return null;

  els.btnLogin?.addEventListener('click', () => login());
  els.btnLogout?.addEventListener('click', async () => { await logout(); });

  const render = (me) => {
    const authed = !!me;
    if (authed) {
      const name = me.login || me.name || 'Account';
      els.header.textContent = name;
      showFlex(els.header, true);
    } else {
      els.header.textContent = '';
      showFlex(els.header, false);
    }

    showFlex(els.btnManage, authed);
    showFlex(els.btnLogout, authed);
    showFlex(els.btnLogin, !authed);
  };

  return { render };
}

function init() {
  const controllers = [];

  const desktop = setupDesktopByIds();
  if (desktop) 
    controllers.push(desktop);

  document.querySelectorAll('[data-account-menu]').forEach(root => {
    if (root.id === 'accountRoot') 
      return;

    const ctrl = setupMobile(root);

    if (ctrl) 
      controllers.push(ctrl);
  });

  // react to auth state
  onChange((user) => controllers.forEach(c => c.render(user)));
  fetchMe(); // ensure fresh state on load
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
