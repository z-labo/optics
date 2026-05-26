(function () {
  const LANGS = [
    { code: 'ja', label: '日本語' },
    { code: 'en', label: 'English' },
    { code: 'ko', label: '한국어' },
  ];
  const STORAGE_KEY = 'zen-book-lang';

  function applyLanguage(lang) {
    document.querySelectorAll('[data-lang]').forEach((el) => {
      el.style.display = (el.getAttribute('data-lang') === lang) ? '' : 'none';
    });
    localStorage.setItem(STORAGE_KEY, lang);
  }

  function createSwitcher() {
    const searchBtn = document.querySelector('.search-button__button') || document.querySelector('button.search-button-field');
    if (!searchBtn || document.getElementById('language-switcher')) return;

    const wrapper = document.createElement('div');
    wrapper.id = 'language-switcher';
    wrapper.style.display = 'inline-flex';
    wrapper.style.alignItems = 'center';
    wrapper.style.marginRight = '8px';

    const select = document.createElement('select');
    select.setAttribute('aria-label', 'Language selector');
    select.className = 'form-select form-select-sm';
    select.style.width = '110px';

    LANGS.forEach((l) => {
      const opt = document.createElement('option');
      opt.value = l.code;
      opt.textContent = l.label;
      select.appendChild(opt);
    });

    const saved = localStorage.getItem(STORAGE_KEY) || 'ja';
    select.value = saved;
    applyLanguage(saved);

    select.addEventListener('change', (e) => applyLanguage(e.target.value));
    wrapper.appendChild(select);

    const parent = searchBtn.closest('.navbar-btn-group') || searchBtn.parentElement;
    parent.parentElement.insertBefore(wrapper, parent);
  }

  document.addEventListener('DOMContentLoaded', () => {
    createSwitcher();
    const saved = localStorage.getItem(STORAGE_KEY) || 'ja';
    applyLanguage(saved);
  });
})();
