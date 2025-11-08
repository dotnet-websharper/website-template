import { mountGate } from './ws-auth.js';

function init() {
  mountGate({
    authSectionId: 'authSection',
    paymentSectionId: 'paymentSection',
    emailInputId: 'email',
    loginBtnId: 'wsGithubLogin',
    logoutBtnId: 'logoutBtn',
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
