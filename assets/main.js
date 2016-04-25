var sh = document.getElementById('subheader');

var pattern = Trianglify({
  width: sh.offsetWidth,
  height: sh.offsetHeight,
  seed: 'JustPeaceLabs',
  // x_colors: 'GnBu'
  x_colors: ['#FFFFFF', '#FFFFFF', '#27527C', '#FFC28A']
});

var imageUrl = 'url(' + pattern.png() + ')';
$('.header-img').css('background-image', imageUrl);

window.addEventListener('scroll', function() {
  document.body.classList[
      window.scrollY > 50 ? 'add' : 'remove'
    ]('scrolled');
});


