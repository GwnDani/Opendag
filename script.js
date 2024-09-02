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

var today = new Date();
// Regular days just use these emoji
var possibleEmoji = [
  '🐹',
  '🐢',
  '🌼',
  '🍉'
];

// Special emoji if close to Halloween
if (today.getMonth() === 9 && [31, 30, 29, 28].indexOf(today.getDate()) !== -1) {
  possibleEmoji = [
    '👻',
    '🎃',
    '🧟‍♀️'
  ];
}

// Special emoji if close to Christmas
if (today.getMonth() === 11 && [21, 22, 23, 24, 25, 26].indexOf(today.getDate()) !== -1) {
  possibleEmoji = [
    '❄️',
    '🎅',
    '🎁'
  ];
}

var isCooldown = false;
var cooldownDuration = 10000; // Cooldown of 10 seconds
var emojiLifetime = 60000; // Emoji lifetime of 1 minute (60 seconds)

// Function to generate and display the emoji
function displayEmoji(event) {
  if (isCooldown) return;

  // Generate random number that falls between 0 and the total number of emoji possibilities
  var randomNumber = Math.floor(Math.random() * possibleEmoji.length);

  var span = document.createElement('span'); 
  span.textContent = possibleEmoji[randomNumber];
  span.className = 'emoji click-emoji';

  // Position the emoji where the user clicked
  span.style.left = event.clientX + 'px';
  span.style.top = event.clientY + 'px'; 
  span.style.position = 'fixed';

  document.body.appendChild(span);

  // Set a timeout to remove the emoji after 1 minute
  setTimeout(function() {
    span.remove();
  }, emojiLifetime);

  // Start cooldown
  isCooldown = true;
  setTimeout(function() {
    isCooldown = false;
  }, cooldownDuration); // Cooldown of 10 seconds
}

// Remove all emojis on scroll
function removeEmojis() {
  var emojis = document.querySelectorAll('.click-emoji');
  emojis.forEach(function(emoji) {
    emoji.remove();
  });
}

// Add event listeners
document.body.addEventListener('click', displayEmoji);
document.body.addEventListener('scroll', removeEmojis);
