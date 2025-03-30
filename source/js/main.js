import initPriceData from './utility.js';
import initJuriSwiper from './juri-swiper.js';
import initPriceTabs from './price-tabs.js';
import initFaqTabs from './faq-tabs';
import initAccordin from './accordion.js';

document.addEventListener('DOMContentLoaded', () => {
  initPriceData();
  initJuriSwiper();
  initPriceTabs();
  initFaqTabs();
  initAccordin();
});
