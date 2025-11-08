const abs = (p) => new URL(p, document.baseURI).toString();

const { mountGate } = await import(abs("Js/ws-auth.js"));

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
  console.log("checkout-auth.js");
  document.addEventListener('DOMContentLoaded', init);
} else {  
  init();  
}
