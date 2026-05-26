(function () {
  'use strict';

  const LANGS = [
    { code: 'ja', label: '日本語' },
    { code: 'en', label: 'English' },
    { code: 'ko', label: '한국어' },
  ];
  const DEFAULT_LANG = 'ja';
  const STORAGE_KEY = 'zen-book-lang';

  function normalizeLang(lang) {
    return LANGS.some((l) => l.code === lang) ? lang : DEFAULT_LANG;
  }

  /**
   * Structure produced by Sphinx/JupyterBook:
   *
   *  .bd-content
   *  ├── .bd-article-container   ← English content (the "main" article)
   *  │   └── article > section#pim
   *  │       ├── section#condition  (always visible header)
   *  │       └── section#step-1 … (English body sections)
   *  ├── div[data-lang="ja"]     ← Japanese content block
   *  └── div[data-lang="ko"]     ← Korean content block
   *
   * So:
   *  - ja / ko: the [data-lang] div itself is the container → toggle display
   *  - en:      .bd-article-container is the container → toggle display
   *
   * The right-sidebar TOC only reflects English headings (Sphinx generates it
   * from the main article), so we hide it entirely for non-English languages
   * and optionally inject a simple heading list from the visible content.
   */

  let articleContainer = null;  // .bd-article-container

  function findArticleContainer() {
    return (
      document.querySelector('.bd-article-container') ||
      document.querySelector('article') ||
      document.querySelector('.bd-article')
    );
  }

  function applyLanguage(lang) {
    const normalized = normalizeLang(lang);

    if (!articleContainer) {
      articleContainer = findArticleContainer();
    }

    // 1) Toggle ja / ko blocks
    document.querySelectorAll('[data-lang]').forEach((el) => {
      const elLang = el.getAttribute('data-lang');
      if (elLang === normalized) {
        el.style.display = '';
        el.setAttribute('aria-hidden', 'false');
      } else {
        el.style.display = 'none';
        el.setAttribute('aria-hidden', 'true');
      }
    });

    // 2) Toggle English container
    if (articleContainer) {
      if (normalized === 'en') {
        articleContainer.style.display = '';
        articleContainer.setAttribute('aria-hidden', 'false');
      } else {
        articleContainer.style.display = 'none';
        articleContainer.setAttribute('aria-hidden', 'true');
      }
    }

    // 3) Right sidebar TOC: hide when non-English (it contains only EN headings)
    const tocSidebar = document.querySelector('.bd-sidebar-secondary');
    if (tocSidebar) {
      tocSidebar.style.display = normalized === 'en' ? '' : 'none';
    }

    // 4) Persist
    localStorage.setItem(STORAGE_KEY, normalized);

    // 5) Sync button states
    document.querySelectorAll('.zen-lang-btn').forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.langCode === normalized);
    });

    // 6) Sync hidden select (kept for compatibility)
    const select = document.querySelector('#lang-switcher-select');
    if (select && select.value !== normalized) select.value = normalized;
  }

  function createSwitcher() {
    if (document.getElementById('zen-lang-switcher')) return;

    const wrapper = document.createElement('div');
    wrapper.id = 'zen-lang-switcher';
    wrapper.setAttribute('role', 'navigation');
    wrapper.setAttribute('aria-label', 'Language switcher');

    LANGS.forEach((l) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.textContent = l.label;
      btn.dataset.langCode = l.code;
      btn.className = 'zen-lang-btn';
      btn.addEventListener('click', () => applyLanguage(l.code));
      wrapper.appendChild(btn);
    });

    // Hidden select for programmatic sync
    const select = document.createElement('select');
    select.id = 'lang-switcher-select';
    select.style.display = 'none';
    LANGS.forEach((l) => {
      const opt = document.createElement('option');
      opt.value = l.code;
      opt.textContent = l.label;
      select.appendChild(opt);
    });
    wrapper.appendChild(select);

    // ── Mount point ──────────────────────────────────────────────────────
    // Priority 1: article-header-buttons (top-right toolbar of JupyterBook)
    const headerButtons = document.querySelector('.article-header-buttons');
    if (headerButtons) {
      headerButtons.prepend(wrapper);
      return;
    }

    // Priority 2: navbar
    const navbar = document.querySelector('.navbar-nav, .navbar-btn-group');
    if (navbar) {
      navbar.prepend(wrapper);
      return;
    }

    // Priority 3: sticky bar above content
    const bdContent = document.querySelector('.bd-content') || document.querySelector('main');
    if (bdContent) {
      bdContent.insertBefore(wrapper, bdContent.firstChild);
    } else {
      document.body.insertBefore(wrapper, document.body.firstChild);
    }
  }

  function init() {
    articleContainer = findArticleContainer();

    const saved = normalizeLang(localStorage.getItem(STORAGE_KEY));

    createSwitcher();
    applyLanguage(saved);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
