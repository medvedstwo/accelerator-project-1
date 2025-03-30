import Swiper from 'swiper';
import {Navigation} from 'swiper/modules';
import 'swiper/css';

const swiper = new Swiper('.reviews-swiper', {
  modules: [Navigation],
  init: false,
  speed: 400,
  slidesPerView: 1,
  spaceBetween: 100,
  loop: false,
  navigation: {
    nextEl: '.reviews-swiper__button--next',
    prevEl: '.reviews-swiper__button--prev',
  },
});

const initReviewsSwiper = () => {
  swiper.init();
};

export default initReviewsSwiper;
