// Light/dark mode. Runs in <head> so the right colours appear before the page is drawn.
// The choice is remembered on this device; without a choice the device setting is used.
(function(){
  var root=document.documentElement, saved=null;
  try{saved=localStorage.getItem('theme');}catch(e){}
  if(saved==='light'||saved==='dark') root.setAttribute('data-theme',saved);

  function isDark(){
    var t=root.getAttribute('data-theme');
    return t ? t==='dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
  // Button label: [to light, to dark] in each language
  var texts={
    en:['Switch to light mode','Switch to dark mode'],
    it:['Passa al tema chiaro','Passa al tema scuro'],
    fr:['Passer au thème clair','Passer au thème sombre']
  };
  function label(btn){
    var dark=isDark(), t=texts[root.lang]||texts.en;
    btn.textContent=dark?'☀':'☾';
    btn.setAttribute('aria-label',dark?t[0]:t[1]);
    btn.title=btn.getAttribute('aria-label');
  }
  document.addEventListener('DOMContentLoaded',function(){
    var btn=document.querySelector('.theme-btn');
    if(!btn) return;
    btn.hidden=false;
    label(btn);
    btn.addEventListener('click',function(){
      var next=isDark()?'light':'dark';
      root.setAttribute('data-theme',next);
      try{localStorage.setItem('theme',next);}catch(e){}
      label(btn);
    });
  });
})();
