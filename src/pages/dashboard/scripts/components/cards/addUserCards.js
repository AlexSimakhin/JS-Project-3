const balanceBlockMain = document.querySelectorAll('.balance__block__main');

const currencyUnicode = {
  'usd': '$',
  'eur': '€',
  'uah': '₴',
  'rub': '₽',
};

const cardDivTemplate = (obj) => `
  <div class="card__balance card__balance__item">
    <img src="img/icon/${obj.system}-icon.svg" class="card__balance__icon" alt="">
    <div>
        <p class="card__balance__type">Личная карта</p>
        <p class="card__balance__number">${obj.card.split('').slice(0, 4).join('')} **** **** ${obj.card.split('').slice(-4).join('')}</p>
    </div>
    <p class="card__balance__data" data-card="${obj.card.split('').slice(-4).join('')}" data-currency="${currencyUnicode[obj.currency]}">${currencyUnicode[obj.currency]} ${obj.balance.toFixed(2)}</p>
    <img src="img/icon/${obj.balance >= 0 ? 'increase' : 'decrease'}-icon.svg" class="card__balance__status" alt="${obj.balance >= 0 ? 'increase' : 'decrease'}">
  </div>
`;

export const addUserCards = (cardsArray) => {
  balanceBlockMain.forEach(item => {
    if (!!item.dataset.currentattr) {
      item.innerHTML = '';
    }
  });

  let list = '';

  for (const card of cardsArray) {
    list += cardDivTemplate(card);
  }

  balanceBlockMain.forEach(item => {
    if (!!item.dataset.currentattr) {
      item.insertAdjacentHTML('afterbegin', list);
    }
  });
};