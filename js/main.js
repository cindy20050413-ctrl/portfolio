// Hover tiles: same behaviour as the original Wix HTML embeds
// (photo fades to the darker detail shot and the title slides in).
document.querySelectorAll('.tile').forEach(function (tile) {
  var on = function () { tile.classList.add('on'); };
  var off = function () { tile.classList.remove('on'); };
  tile.addEventListener('mouseenter', on);
  tile.addEventListener('mouseleave', off);
  tile.addEventListener('focus', on);
  tile.addEventListener('blur', off);
});
// Phones: holding a finger on a tile shows the same effect as hovering.
// It turns off when the finger lifts or starts scrolling.
document.querySelectorAll('.tile').forEach(function (tile) {
  var on = function () { tile.classList.add('on'); };
  var off = function () { tile.classList.remove('on'); };
  tile.addEventListener('touchstart', on, { passive: true });
  tile.addEventListener('touchend', off);
  tile.addEventListener('touchcancel', off);
  tile.addEventListener('touchmove', off, { passive: true });
  // stop the phone's long-press menu (save image / open link) from popping up
  tile.addEventListener('contextmenu', function (e) { e.preventDefault(); });
});
// coming back with the Back button: make sure no tile is stuck "on"
window.addEventListener('pageshow', function () {
  document.querySelectorAll('.tile.on').forEach(function (t) { t.classList.remove('on'); });
});
window.addEventListener('blur', function () {
  document.querySelectorAll('.tile.on').forEach(function (t) { t.classList.remove('on'); });
});

// Mobile menu
var toggle = document.querySelector('.menu-toggle');
var menu = document.querySelector('.mobile-menu');
if (toggle && menu) {
  var close = menu.querySelector('.menu-close');
  toggle.addEventListener('click', function () {
    menu.classList.add('open');
    toggle.setAttribute('aria-expanded', 'true');
  });
  close.addEventListener('click', function () {
    menu.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  });
}

// Contact form: GitHub Pages has no server, so the form opens the
// visitor's email app with the message filled in.
var form = document.querySelector('.contact-form');
if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var f = form.elements;
    var name = (f.firstName.value + ' ' + f.lastName.value).trim();
    var subject = 'Website message from ' + name;
    var body = f.message.value + '\n\n' + name + '\n' + f.email.value;
    window.location.href = 'mailto:cindyliu0413@gmail.com' +
      '?subject=' + encodeURIComponent(subject) +
      '&body=' + encodeURIComponent(body);
    var note = form.querySelector('.form-note');
    if (note) note.textContent = 'Opening your email app…';
  });
}
