(function () {
  var KEY = 'wentz-lang';
  function stored() { try { return localStorage.getItem(KEY); } catch (e) { return null; } }
  function store(v) { try { localStorage.setItem(KEY, v); } catch (e) {} }
  function set(lang) {
    document.documentElement.lang = lang;
    var btns = document.querySelectorAll('.langswitch button');
    for (var i = 0; i < btns.length; i++) {
      btns[i].setAttribute('aria-pressed', btns[i].getAttribute('data-lang') === lang ? 'true' : 'false');
    }
    var t = document.querySelector('meta[name="title-' + lang + '"]');
    if (t) document.title = t.getAttribute('content');
  }
  var initial = stored() || ((navigator.language || 'de').toLowerCase().indexOf('de') === 0 ? 'de' : 'en');
  set(initial);
  document.addEventListener('DOMContentLoaded', function () {
    set(document.documentElement.lang);
    var btns = document.querySelectorAll('.langswitch button');
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener('click', function () {
        var l = this.getAttribute('data-lang'); set(l); store(l);
      });
    }
  });
})();
