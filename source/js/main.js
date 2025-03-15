// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
// import 'swiper/css';

const priceElement = document.querySelectorAll('.price-card__description');
priceElement.forEach((el) => {
  const priceData = el.textContent;
  el.dataset.price = priceData;
});
