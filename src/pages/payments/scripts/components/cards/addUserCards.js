import { balanceBlockMain } from '../../index';

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

const cardDroplistTemplate = (obj) => `
  <div class="dropdown__list__item">
    <img src="img/icon/${obj.system}-icon.svg" class="paysystem__icon ${obj.system}__icon" alt="">
    <p class="form__input">**** ${obj.card.split('').slice(-4).join('')}</p>
  </div>
`;

export const addUserCards = (cardsArray) => {
  const paysystemDropdownBlock = document.querySelector('#paysystemDropdownBlock');
  const paymentToUserCardDropdownBlock = document.querySelector('#paymentToUserCardDropdownBlock');
  const dropdownListBlockUserFirst = paysystemDropdownBlock.querySelector('.dropdown__list');
  const dropdownListBlockUserSecond = paymentToUserCardDropdownBlock.querySelector('.dropdown__list');

  balanceBlockMain.innerHTML = '';
  dropdownListBlockUserFirst.innerHTML = '';
  dropdownListBlockUserSecond.innerHTML = '';

  let list = '';
  let droplist = '';

  for (const card of cardsArray) {
    list += cardDivTemplate(card);
    droplist += cardDroplistTemplate(card);
  }

  balanceBlockMain.insertAdjacentHTML('afterbegin', list);
  dropdownListBlockUserFirst.insertAdjacentHTML('afterbegin', droplist);
  dropdownListBlockUserSecond.insertAdjacentHTML('afterbegin', droplist);
};