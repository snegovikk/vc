(function () {
  var media = window.matchMedia('(prefers-color-scheme: dark)');

  function applySystemTheme() {
    var theme = media.matches ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);

    var meta = document.querySelector('meta[name="theme-color"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'theme-color';
      document.head.appendChild(meta);
    }
    meta.content = theme === 'dark' ? '#111111' : '#f9f9f9';
  }

  applySystemTheme();

  if (typeof media.addEventListener === 'function') {
    media.addEventListener('change', applySystemTheme);
  } else if (typeof media.addListener === 'function') {
    media.addListener(applySystemTheme);
  }
})();
