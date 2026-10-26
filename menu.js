// Main menu: on phones the links are folded behind the "Menu" button.
// Without JavaScript the links simply stay visible.
document.documentElement.classList.add('js');
document.querySelectorAll('.main-nav').forEach(function(nav){
  var btn=nav.querySelector('.menu-btn');
  btn.addEventListener('click',function(){
    var open=nav.classList.toggle('open');
    btn.setAttribute('aria-expanded',open);
  });
});
