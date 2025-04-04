const tabLinks = document.querySelectorAll('.faq-tabs__button');
const tabContents = document.querySelectorAll('.faq-tabs__content');

const openFaqTabs = (evt) => {
  const btnTarget = evt.currentTarget;
  const answerId = btnTarget.dataset.answer;

  tabContents.forEach((item) => {
    item.classList.remove('tabs__content--active');
  });

  tabLinks.forEach((item) => {
    item.classList.remove('faq-tabs__button--active');
  });

  document.querySelector(`#${answerId}`).classList.add('tabs__content--active');
  btnTarget.classList.add('faq-tabs__button--active');
};

const initFaqTabs = () => {
  tabLinks.forEach((el) => {
    el.addEventListener('click', openFaqTabs);
  });
};

export default initFaqTabs;
