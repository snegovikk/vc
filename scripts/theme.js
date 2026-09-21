(function () {
  var media = window.matchMedia('(prefers-color-scheme: dark)');

  function applySystemTheme() {
    var dark = media.matches;
    var root = document.documentElement;

    root.classList.toggle('theme-dark', dark);
    root.classList.toggle('theme-light', !dark);
    root.style.colorScheme = dark ? 'dark' : 'light';

    var meta = document.querySelector('meta[name="theme-color"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'theme-color';
      document.head.appendChild(meta);
    }
    meta.content = dark ? '#111111' : '#f9f9f9';
  }

  applySystemTheme();

  if (typeof media.addEventListener === 'function') {
    media.addEventListener('change', applySystemTheme);
  } else if (typeof media.addListener === 'function') {
    media.addListener(applySystemTheme);
  }
})();
