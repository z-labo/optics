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
    return LANGS.some(function (l) { return l.code === lang; }) ? lang : DEFAULT_LANG;
  }

  function applyLanguage(lang) {
    var normalized = normalizeLang(lang);

    // 모든 [data-lang] div를 숨기거나 표시
    document.querySelectorAll('[data-lang]').forEach(function (el) {
      var elLang = el.getAttribute('data-lang');
      el.style.display = (elLang === normalized) ? 'block' : 'none';
    });

    // 선택된 언어 버튼 활성화
    document.querySelectorAll('.zen-lang-btn').forEach(function (btn) {
      btn.classList.toggle('active', btn.dataset.langCode === normalized);
    });

    localStorage.setItem(STORAGE_KEY, normalized);
  }

  function createSwitcher() {
    if (document.getElementById('zen-lang-switcher')) return;

    var wrapper = document.createElement('div');
    wrapper.id = 'zen-lang-switcher';

    LANGS.forEach(function (l) {
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.textContent = l.label;
      btn.dataset.langCode = l.code;
      btn.className = 'zen-lang-btn';
      btn.addEventListener('click', function () { applyLanguage(l.code); });
      wrapper.appendChild(btn);
    });

    // .article-header-buttons (우상단 툴바) 에 삽입
    var mount = document.querySelector('.article-header-buttons');
    if (mount) {
      mount.prepend(wrapper);
    } else {
      // 없으면 콘텐츠 맨 위에 sticky bar로
      var content = document.querySelector('.bd-content') || document.body;
      content.insertBefore(wrapper, content.firstChild);
    }
  }

  function init() {
    var saved = normalizeLang(localStorage.getItem(STORAGE_KEY));
    createSwitcher();
    applyLanguage(saved);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
