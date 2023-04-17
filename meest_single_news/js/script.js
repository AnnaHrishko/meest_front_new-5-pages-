$(document).ready(function(){
     const swiper = new Swiper('.swiper', {
  // Optional parameters

  loop: false,
  rewind: true,
  slidesPerView: 3.5,
  spaceBetween: 30,
  autoplay: {
   delay: 2000,
 },
  
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1.2,
      spaceBetween: 15,
    },
    991: {
      slidesPerView: 3.5,
      spaceBetween: 30,
    },
  }
 
});
 })