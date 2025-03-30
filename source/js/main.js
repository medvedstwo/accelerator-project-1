import initPriceData from './utility.js';
import initJuriSwiper from './juri-swiper.js';
import initPriceTabs from './price-tabs.js';
import initFaqTabs from './faq-tabs.js';
import initAccordin from './accordion.js';
import initPlayVideo from './about.js';
import initReviewsSwiper from './reviews-swiper.js';

document.addEventListener('DOMContentLoaded', () => {
  initPriceData();
  initJuriSwiper();
  initPriceTabs();
  initFaqTabs();
  initAccordin();
  initPlayVideo();
  initReviewsSwiper();
});
