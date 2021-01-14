import { cardsInfoLayout } from '../../index';

const currencyUnicode = {
  'usd': '$',
  'eur': '€',
  'uah': '₴',
  'rub': '₽',
};

const cardDivTemplate = (obj) => `
  <div class="card__info__item collapsed" data-hash="${obj.hash}" data-currency="${currencyUnicode[obj.currency]}" data-card="${obj.card.split('').slice(-4).join('')}">
  <div class="card__info__header">
      <img src="img/icon/mastercard-icon.svg" alt="" class="card__info__icon">
      <p class="card__info__data">Личная карта ** ${obj.card.split('').slice(-4).join('')}</p>
      <p class="card__info__balance">${currencyUnicode[obj.currency]} ${obj.balance.toFixed(2)}</p>
      <img src="img/icon/arr-bottom.svg" alt="" class="arr__icon">
  </div>
  <div class="card__info__main">
      <div class="card__info__card">
          <img src="img/card-back.jpg" class="card__back" alt="">
          <img src="img/icon/visa-white.svg" class="card__type" alt="">
          <p class="card__number">${obj.card.match(/.{1,4}/g).join(' ')}</p>
          <p class="card__owner__name">${obj.issuer}</p>
          <p class="card__exp__date">${'06 / 22'}</p>
      </div>
      <div class="card__info__settings">
          <div class="data-item">
              <p class="legend">Класс карты</p>
              <p class="data">${obj.system.charAt(0).toUpperCase()}${obj.system.split('').slice(1).join('')} ${obj.class.charAt(0).toUpperCase()}${obj.class.split('').slice(1).join('')}</p>
          </div>
          <div class="data-item">
              <p class="legend">IBAN-номер</p>
              <p class="data">${obj.iban}</p>
          </div>
          <div class="data-item">
              <p class="legend">Кредитный лимит</p>
              <p class="data">Отсутствует</p>
          </div>
          <div class="data-item">
              <p class="legend">Покупки в интернете</p>
              <div class="switch__block internet__switch__block ${obj.internet ? 'checked' : ''}">
                  <div class="switcher "></div>
                  <input type="checkbox" id="internetPayments">
              </div>
          </div>
          <div class="data-item">
              <p class="legend">3D Security</p>
              <div class="switch__block security__switch__block ${obj.security3d ? 'checked' : ''}">
                  <div class="switcher "></div>
                  <input type="checkbox" id="security3D">
              </div>
          </div>
          <div class="other__settings">
              <img class="settings__icon" src="img/icon/dots-icon.svg" alt="">
              <p class="settings__name">Операции над картой</p>
          </div>
      </div>
  </div>
  </div>
`;

export const addUserCards = (cardsArray) => {
  let list = '';

  for (const card of cardsArray) {
    list += cardDivTemplate(card);
  }

  cardsInfoLayout.insertAdjacentHTML('afterbegin', list);
};