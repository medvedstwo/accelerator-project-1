// https://swiperjs.com/get-started#installation
import Swiper from 'swiper';
import {Navigation, Autoplay} from 'swiper/modules';
import 'swiper/css';
import initPrice from './utility.js';

document.addEventListener('DOMContentLoaded', () => {
  initPrice();
});

const swiper = new Swiper('.my-swiper', {
  modules: [Autoplay, Navigation],
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
  speed: 400,
  slidesPerView: 1,
  spaceBetween: 100,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1366: {
      slidesPerView: 4,
      spaceBetween: 40,
    }
  },
});
