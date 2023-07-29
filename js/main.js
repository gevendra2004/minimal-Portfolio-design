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
const sections = document.querySelectorAll('section[id]');

const scrollActive = () =>{
  const scrollY = window.pageYOffset

  sections.forEach( current => {
    const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 58,
          sectionId= current.getAttribute('id'),
          sectionClass = document.querySelector('.nav-menu a[href*=' + sectionId + ']')

          if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            sectionClass.classList.add('active-link')
          }else{
            sectionClass.classList.remove('active-link')
          }
  })
}
window.addEventListener('scroll' , scrollActive)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () => {
  const scrollUp = document.getElementById('scroll-up')

  this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                      : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll' , scrollUp)

/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'


// Previously selected topic (if user selected) 
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// we obtain the current theme that the interface has by validating the dark-theme class 
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// Valatading if the user previously chse a topic
if(selectedTheme){
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click' , () => {
  // Add or remove Dark theme
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)
  // We save the theme and the current icon that the user choose
  localStorage.setItem('selected-theme' , getCurrentTheme())
  localStorage.setItem('selected-icon' , getCurrentIcon())
})

/*=============== CHANGE BACKGROUND HEADER ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/

