// https://swiperjs.com/get-started#installation
import Swiper from 'swiper';
import {Navigation, Pagination, Autoplay} from 'swiper/modules';
import 'swiper/css';
import initPrice from './utility.js';

document.addEventListener('DOMContentLoaded', () => {
  initPrice();
});

const swiper = new Swiper('.swiper', {
  modules: [Autoplay],
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  speed: 400,
  slidesPerView: 1,
  spaceBetween: 100,
  loop: true,
});
