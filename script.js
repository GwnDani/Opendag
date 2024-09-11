// Navbar
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
}
// Dark Mode
let darkmode = document.querySelector('#darkmode');

darkmode.onclick = () => {
    if(darkmode.classList.contains('bx-moon')){
        darkmode.classList.replace('bx-moon','bx-sun');
        document.body.classList.add('active');
    }else{
        darkmode.classList.replace('bx-sun','bx-moon');
        document.body.classList.remove('active');
    }
}

// Scroll Reveal
const sr = ScrollReveal ({
    origin: 'top',
    distance: '40px',
    duration: 2000,
    reset: true
});


sr.reveal(`.home-text, .home-img,
            .about-img, .about-text,
            .box, .s-box,
            .btn, .connect-text,
            .contact-box`, {
    interval: 200
})
function toggleBlokImage() {
  const img = document.getElementById('blok-img');
  const currentSrc = img.getAttribute('src');
  
  // Kies de nieuwe afbeelding
  const newSrc = currentSrc === 'img/overig/BlokA.png' ? 'img/overig/BlokB.png' : 'img/overig/BlokA.png';

  // Start de fade-out animatie
  img.classList.remove('visible');
  
  // Wacht tot de animatie is voltooid voordat je de afbeelding verandert
  setTimeout(() => {
      img.setAttribute('src', newSrc);
      img.classList.add('visible');
  }, 500); // Dit moet overeenkomen met de duur van de fade-out animatie in CSS
}

// Zorg ervoor dat de afbeelding initieel zichtbaar is
document.addEventListener('DOMContentLoaded', () => {
  const img = document.getElementById('blok-img');
  img.classList.add('visible');
});

