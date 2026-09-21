(function () {
  var media = window.matchMedia('(prefers-color-scheme: dark)');

  function syncThemeColorMeta() {
    var color = media.matches ? '#111111' : '#f9f9f9';
    var meta = document.querySelector('meta[name="theme-color"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'theme-color';
      document.head.appendChild(meta);
    }
    meta.content = color;
  }

  syncThemeColorMeta();

  if (typeof media.addEventListener === 'function') {
    media.addEventListener('change', syncThemeColorMeta);
  } else if (typeof media.addListener === 'function') {
    media.addListener(syncThemeColorMeta);
  }
})();
