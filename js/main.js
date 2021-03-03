window.addEventListener('load', function(e){

  // nav menu toggle icon 

  const menuToggle = document.querySelector('.nav-toggle');
  let menuOpen = false;

  menuToggle.addEventListener('click', (e) => {

      document.querySelector('.nav-bar').classList.toggle('show-nav');

      if(!menuOpen){
        menuToggle.classList.add('open');
        menuOpen = true;
      } else {
        menuToggle.classList.remove('open');
        menuOpen = false;
      }
  })
  
})
