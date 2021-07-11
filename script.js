let menuBtn = document.querySelector('.hamburger')
let mobileMenu = document.querySelector('.mobile-nav')
let logo = document.querySelector('.brand-logo')

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('is-active')
  mobileMenu.classList.toggle('is-active')
  logo.classList.toggle('hidden')
})

// slider
$('.slide-wrapper').slick({
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  slides: '.slide',
  prevArrow: '.arrow-left',
  nextArrow: '.arrow-right',
})
