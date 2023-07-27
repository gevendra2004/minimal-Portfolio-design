/*=============== SHOW MENU ===============*/
const NavMenu = document.getElementById('nav-menu');
const NavToggle = document.getElementById('nav-toggle');
const NavClose = document.getElementById('nav-close');

/*===== MENU SHOW ======*/
if(NavToggle){
    NavToggle.addEventListener('click' , () => {
        NavMenu.classList.add('show-menu')
    })
}
/*===== MENU HIDE ======*/
if(NavClose){
    NavClose.addEventListener('click' , () => {
        NavMenu.classList.remove('show-menu')
    })
}
/*=============== REMOVE MENU MOBILE ===============*/
const NavLink = document.querySelectorAll('.nav__link')

NavLink.forEach(n => n.addEventListener('click' , () => {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu')
}))

/*=============== SWIPER PROJECTS ===============*/
let swiperProjects = new Swiper(".projects-container", {
    loop:true,
    spaceBetween: 24,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },

    breakpoints: {
        1200: {
          slidesPerView: 2,
          spaceBetween: -56,
        },
    },
  });

/*=============== SWIPER TESTIMONIAL ===============*/


/*=============== EMAIL JS ===============*/


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== DARK LIGHT THEME ===============*/ 


/*=============== CHANGE BACKGROUND HEADER ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/

