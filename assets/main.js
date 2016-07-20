/*var sh = document.getElementById('subheader');

var pattern = Trianglify({
  width: sh.offsetWidth,
  height: sh.offsetHeight,
  seed: 'JustPeaceLabs',
  x_colors: ['#FFFFFF', '#FFFFFF', '#27527C', '#FFC28A']
});

var imageUrl = 'url(' + pattern.png() + ')';
document.querySelector('.header-img').style.backgroundImage = imageUrl;
*/

window.addEventListener('scroll', function() {
  document.body.classList[
      window.scrollY > 80 ? 'add' : 'remove'
    ]('scrolled');
});

