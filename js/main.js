const swiper = new Swiper('#visual', {
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  loop:true,
});

const boxofficeSwiper = new Swiper('.boxoffice_swiper', {
  slidesPerView: 2,
  spaceBetween: 12,
  breakpoints: {
    600: {
      slidesPerView: 3.6,
      spaceBetween: 20,
    },
  },
});

const greetingSwiper = new Swiper('.greeting_swiper', {
  slidesPerView: 1,
  spaceBetween: 12,
  breakpoints: {
    600: {
      slidesPerView: 1.6,
      spaceBetween: 20,
    },
  },
});

const eventSwiper = new Swiper('.event_swiper', {
  slidesPerView: 1.2,
  spaceBetween: 12,
  breakpoints: {
    600: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
});