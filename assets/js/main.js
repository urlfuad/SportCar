/*=============== SHOW MENU ===============*/
const navMenu =document.getElementById("nav-menu"),
      navToggle =document.getElementById("nav-toggle"),
      navClose = document.getElementById("nav-close")

      if (navToggle) {
          navToggle.addEventListener("click", ()=>{
              navMenu.classList.add("show-menu");
          });
      }

      if (navClose) {
          navClose.addEventListener("click", () =>{
              navMenu.classList.remove("show-menu");
          });
      }
  

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav-link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav-link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('bg-header') 
                       : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== POPULAR SWIPER ===============*/

const swiperPopular = new Swiper(".popular-container", {
    loop: true,
    spaceBetween: 25,
    slidesPerView: "auto",
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    breakpoints: {
        768: {
          slidesPerView: 3,
        },
        1024: {
          spaceBetween: 48,
        },
      },
  });

/*=============== MIXITUP FILTER FEATURED ===============*/
let mixerFeatured = mixitup ('.featured-content',{
    selectors:{
        target: '.featured-card'
    },
    animation:{
        duration: 300
    }
})

/* Link active featured */ 
const LinkFeatured = document.querySelectorAll('.featured-item')

function activefeatured(){
    LinkFeatured.forEach(l => l.classList.remove('active-featured'))
    this.classList.add('active-featured')
}
LinkFeatured.forEach(l => l.addEventListener('click', activefeatured))

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scrollup')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav-menu a[href*=' + sectionId + ']')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2500,
    delay : 400,
    //reset: true
})
sr.reveal (".home-title, .popular-container, .features-img, .featured-filters")
sr.reveal (".home-subtitle",{delay: 500})
sr.reveal (".home-elec",{delay: 600})
sr.reveal (".home-img",{delay: 800})
sr.reveal (".home-car-data",{delay: 800, interval: 100, origin: "bottom"})
sr.reveal (".home-button",{delay: 900, origin: "bottom"})
sr.reveal (".about-group, .features-card-1, .features-card-3, .offer-data",{origin: "left"})
sr.reveal (".about-data, .features-card-2, .offer-img",{origin: "right"})
sr.reveal (".features-map",{delay: 600, origin: "right"})
sr.reveal (".featured-card, .logos-content, .footer-content",{interval : 100})