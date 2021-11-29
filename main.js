const nav = document.querySelector('.hamburger-btn');
const navMenu = document.querySelector('.navbar')
let menuOpen = false;

nav.addEventListener('click', function(){
   if(!menuOpen){
      nav.classList.add('active')
      menuOpen = true
      navMenu.classList.add('active')
   }else{
      nav.classList.remove('active')
      menuOpen = false;
      navMenu.classList.remove('active')
   }
})




