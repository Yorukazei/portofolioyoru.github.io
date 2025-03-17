/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {


    /*==================== sticky navbar ====================*/

    /*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/
};


/*==================== scroll reveal ====================*/
ScrollReveal({
     reset: true,
     distance: '80px',
     duration: 2000,
     delay: 200
    });

    ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
    ScrollReveal().reveal('.home-img, .services-container, .portofolio-box, contact form', { origin: 'bottom' });
    ScrollReveal().reveal('.home-content h1, .about-img', {origin:'left'});
    ScrollReveal().reveal('.home-content p, .about-content', {origin:'right'});


/*==================== typed js ====================*/
const typed = new Typed('.multiple-text',{
    strings: ['Photography','Videography', 'Content Creator' ],
    typeSpeed : 50,
    backSpeed : 25,
    backDelay : 1000,
    loop : true
});