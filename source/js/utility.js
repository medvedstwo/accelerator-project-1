const initPrice = () => {
  const priceElement = document.querySelectorAll('.price-card__description');
  priceElement.forEach((el) => {
    const priceData = el.textContent;
    el.dataset.price = priceData;
  });
};

export default initPrice;
