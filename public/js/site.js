// Shared by every page: the theme button and the EN / FR switch.
// The saved theme is applied earlier, by a small inline script in each page's head.

const root = document.documentElement;
const themeColors = { light: '#f4f1ea', dark: '#141311' };

function currentTheme() {
  return root.dataset.theme === 'light' ? 'light' : 'dark';
}

function updateThemeColor() {
  for (const meta of document.querySelectorAll('meta[name="theme-color"]')) {
    meta.content = themeColors[currentTheme()];
  }
}

document.querySelector('.theme').addEventListener('click', () => {
  const next = currentTheme() === 'dark' ? 'light' : 'dark';
  root.dataset.theme = next;
  try { localStorage.setItem('theme', next); } catch {}
  updateThemeColor();
});
if (root.dataset.theme) updateThemeColor();

// Language: saved choice, then browser language, then English.
// The page shows the matching [lang] spans through CSS.
function setLang(lang) {
  root.lang = lang;
  for (const button of document.querySelectorAll('[data-lang]')) {
    button.setAttribute('aria-pressed', String(button.dataset.lang === lang));
  }
  for (const el of document.querySelectorAll('[data-label-en]')) {
    el.setAttribute('aria-label', lang === 'fr' ? el.dataset.labelFr : el.dataset.labelEn);
  }
  document.dispatchEvent(new CustomEvent('kozuma:lang', { detail: lang }));
}

let savedLang = null;
try { savedLang = localStorage.getItem('lang'); } catch {}
const browserLang = (navigator.language || '').toLowerCase().startsWith('fr') ? 'fr' : 'en';
setLang(savedLang === 'fr' || savedLang === 'en' ? savedLang : browserLang);

for (const button of document.querySelectorAll('[data-lang]')) {
  button.addEventListener('click', () => {
    setLang(button.dataset.lang);
    try { localStorage.setItem('lang', button.dataset.lang); } catch {}
  });
}
