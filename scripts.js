/*eslint-env es6*/
/*eslint-env browser*/

/* This is all for the responsive dropdown menu. */

const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = document.querySelector('.toggle_btn i');
const dropDownMenu = document.querySelector('.dropdown_menu');

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open')
    
    // In case you want to change the icon displayed when clicked. Change the code below.
    
    const isOpen = dropDownMenu.classList.contains('open')
    
    toggleBtnIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fas fa-bars'
}

/* This is for the dark mode and light mode toggles*/

const toggle = document.querySelector('.toggle-box');

toggle.onclick = function () {
    if (toggle.checked) {
       document.body.style.setProperty('background-image', 'linear-gradient(0deg,var(--lightBackground), var(--lightBackground)), url("images/code-coding.webp")');
       document.getElementsByClassName('dark-mode')[0] .innerHTML = 'Dark-Mode'
       document.getElementsByClassName('dark-mode')[1] .innerHTML = 'Dark-Mode'
        document.getElementsByClassName('toggle-box')[1].checked = true
       document.root.style.setProperty('--opositeBacground', 'linear-gradient(0deg,var(--darkBackground), var(--darkBackground)), url("images/code-coding.webp")');
    }
    else {
        document.body.style.setProperty('background-image', 'linear-gradient(0deg,var(--darkBackground), var(--darkBackground)), url("images/code-coding.webp")');
        document.getElementsByClassName('dark-mode')[0].innerHTML = 'Light-Mode'
        document.getElementsByClassName('dark-mode')[1] .innerHTML = 'Light-Mode'
        document.getElementsByClassName('toggle-box')[1].checked = false
        document.root.style.setProperty('--opositeBacground', 'linear-gradient(0deg,var(--lightBackground), var(--lightBackground)), url("images/code-coding.webp")');
    }
}

/* Make the navbar follow the scroll */

window.addEventListener("scroll", function() {
                      let header = document.querySelector('header');header.classList.toggle('sticky',window.scrollY > 0); 
                        })

/* Scroll Reveal */

ScrollReveal({
    //reset: true,  //Allows to reset each time the user scrolls back to this element.
    distance: '80px',
    duration: 2000,
    delay: 200
    });

ScrollReveal().reveal('.bio-content, .heading', {origin: 'top'});

ScrollReveal().reveal('.bio-pic, .works-box, .media, .cv-button, .contact_form', {origin: 'bottom'});

ScrollReveal().reveal('.bio-content h1', {origin: 'left'});

ScrollReveal().reveal('.bio-content p', {origin: 'right'});

/* Typed JS */

const typed = new Typed('.multiple-words', {
    strings: ['Software Developer.', 'Full-Stack Developer.', 'Mobile Developer.', 'Dream Maker.'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true 
});
