const menu = document.querySelector('.menu');
menu?.addEventListener('click', () => {
 const open = menu.getAttribute('aria-expanded') !== 'true';
 menu.setAttribute('aria-expanded', String(open));
 document.querySelector('#navigation').classList.toggle('open', open);
});
document.querySelector('#copy-email')?.addEventListener('click', async () => {
 const status = document.querySelector('#copy-status');
 try { await navigator.clipboard.writeText('founder@anagat.net'); status.textContent = 'Email copied.'; }
 catch { status.textContent = 'Please copy: founder@anagat.net'; }
});
