(function () {
  var media = window.matchMedia('(prefers-color-scheme: dark)');

  function updateThemeColorMeta() {
    var theme = media.matches ? 'dark' : 'light';
    var meta = document.querySelector('meta[name="theme-color"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'theme-color';
      document.head.appendChild(meta);
    }
    meta.content = theme === 'dark' ? '#111111' : '#f9f9f9';
  }

  updateThemeColorMeta();

  if (typeof media.addEventListener === 'function') {
    media.addEventListener('change', updateThemeColorMeta);
  } else if (typeof media.addListener === 'function') {
    media.addListener(updateThemeColorMeta);
  }
})();
