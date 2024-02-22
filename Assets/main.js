// ? Dark Mode
const body = document.querySelector('body');
ToggleSwitch = document.getElementById('toggle-switch');
ToggleSwitch.addEventListener('click', () => {
  body.classList.toggle('dark');
  if (body.classList.contains('dark')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});

// ? Local Storage
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
  body.classList.add(currentTheme);
}
// typing effect
var typed = new Typed('.typedText', {
    strings: ["Software Engneeier",'Web Developer', 'Web Designer', 'Freelancer'],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
    });






    
    // ? Scroll Reveal
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

sr.reveal(".featured-name", {delay: 100});
sr.reveal(".text-info", {delay: 200});
sr.reveal(".text-btn", {delay: 200});
sr.reveal(".social-icons", {delay: 200});
sr.reveal(".featured-image", {delay: 320});

sr.reveal(".project-box", {interval: 100});
sr.reveal(".top-header", {interval: 100});  

const srLeft= ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: true
});
srLeft.reveal(".about-info", {delay: 100});
srLeft.reveal(".contact-info", {delay: 100});

const srRight= ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: true
});
srRight.reveal(".skill", {delay: 100});
srRight.reveal(".skill-box", {delay: 100});


// active link
const navLink = document.querySelectorAll('.section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;
    navLink.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id');
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link');
        } else {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    });
}
window.addEventListener('scroll', scrollActive);
