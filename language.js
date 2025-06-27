function setLanguage(lang) {
  document.querySelectorAll('[data-en]').forEach(el => {
    el.innerHTML = el.getAttribute(`data-${lang}`);
  });
  localStorage.setItem('language', lang);
}
function setLanguage(lang) {
  document.querySelectorAll('[data-en]').forEach(el => {
    el.innerHTML = el.getAttribute(`data-${lang}`);
  });
  localStorage.setItem('language', lang);
}

document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('language') || 'en';
  setLanguage(savedLang);
});

document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('language') || 'en';
  setLanguage(savedLang);
});
