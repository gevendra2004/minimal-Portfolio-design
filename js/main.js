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
let swiperTestimonial = new Swiper(".testimonial-container", {
    grabCursor:true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactName = document.getElementById('contact-name'),
      contactEmail = document.getElementById('contact-email'),
      contactProject = document.getElementById('contact-project'),
      contactMessage = document.getElementById('contact-message')

// const sendEmail = (email) =>{
//   email.preventDefault()

//   // Check if the field has a value
//   if(contactName.value === '' || contactEmail.value === '' || contactProject.value === ''){
//     // Add and remove color
//     contactMessage.classList.remove('color-blue')
//     contactMessage.classList.add('color-red')

//     // Show message	
//     contactMessage.textContent = 'Write all the input fields 📩'
//   }else{
//     // serviceID - templateID - #form - publicKey
//     emailjs.sendForm('','','','')
//           .then(() =>{
//             contactMessage.classList.add('color-blue')
//             contactMessage.textContent = 'Message sent ✅'

//             // Remove message after 5 sec
//             setTimeout(()=> {
//               contactMessage.textContent = ''
//             }, 5000)
//           } , (error) =>{
//             alert('OOPS! SOMETHING HAS FAILED...' , error)
//           })

//           // to clear the input field 
//           contactName.value = ''
//           contactEmail.value = ''
//           contactProject.value = ''
//   }
// }
// contactForm.addEventListener('submit' , sendEmail)


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== DARK LIGHT THEME ===============*/ 


/*=============== CHANGE BACKGROUND HEADER ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/

