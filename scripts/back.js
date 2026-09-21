(function () {
  var backLink = document.getElementById('back-link');
  if (!backLink) return;

  function normalizePath(pathname) {
    return String(pathname || '')
      .replace(/\/index\.html$/i, '')
      .replace(/\/+$/, '')
      .toLowerCase();
  }

  function shouldUseHistoryBack() {
    if (window.history.length <= 1) return false;
    var ref = document.referrer;
    if (!ref) return false;
    try {
      var refUrl = new URL(ref);
      if (refUrl.origin !== window.location.origin) return false;
      return normalizePath(refUrl.pathname) !== normalizePath(window.location.pathname);
    } catch (err) {
      return false;
    }
  }

  backLink.addEventListener('click', function (event) {
    event.preventDefault();
    if (shouldUseHistoryBack()) {
      window.history.back();
      return;
    }
    window.location.href = backLink.getAttribute('href') || 'index.html';
  });
})();
