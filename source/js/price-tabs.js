const tabLinks = document.querySelectorAll('.price__tabs-button');
const tabContents = document.querySelectorAll('.price__tabs-content');

const openPriceTabs = (evt) => {
  const btnTarget = evt.currentTarget;
  const priceMounth = btnTarget.dataset.priceMounth;

  tabContents.forEach((item) => {
    item.classList.remove('tabs__content--active');
  });

  tabLinks.forEach((item) => {
    item.classList.remove('price__tabs-button--active');
  });

  document.querySelector(`#${priceMounth}`).classList.add('tabs__content--active');

  btnTarget.classList.add('price__tabs-button--active');
};

const initPriceTabs = () => {
  tabLinks.forEach((el) => {
    el.addEventListener('click', openPriceTabs);
  });
};

export default initPriceTabs;
