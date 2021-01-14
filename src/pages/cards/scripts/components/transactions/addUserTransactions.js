const transactionMainOverflow = document.querySelector('.transaction__main.overflow');

export const operations = {
  'Пополнение': {
    'credit': 'money-pig.svg',
    'Пополнение чере АТМ': 'atm.svg',
    'АТМ': 'atm.svg',
    'ATM': 'atm.svg',
    'Денежный перевод': 'transfer.svg',
  },
  'Пополнение карты': {
    'credit': 'money-pig.svg',
    'Пополнение чере АТМ': 'atm.svg',
    'АТМ': 'atm.svg',
    'ATM': 'atm.svg',
    'Денежный перевод': 'transfer.svg',
  },
  'Оплата коммуналки': 'home.svg',
  'Пополнение мобилки': 'phone.svg',
  'АТМ': 'atm.svg',
  'ATM': 'atm.svg',
  'Списание с карты': {
    'credit': 'money-pig.svg',
    'Пополнение чере АТМ': 'atm.svg',
    'АТМ': 'atm.svg',
    'ATM': 'atm.svg',
    'Денежный перевод': 'transfer.svg',
  },
};

const transactionDivTemplate = (obj, currency) => `
  <div class="transaction__item" data-hash="${obj.hash}">
      <img class="transaction__item__icon" src="img/transaction/${operations[obj.title][obj.description] || operations[obj.title][obj.operation] || operations[obj.title]}" alt="">
      <div>
          <p class="transaction__item__type">${obj.title}</p>
          <p class="transaction__item__data">${obj.description}</p>
      </div>
      <div class="transaction__item__value ${obj.operation === 'debet' ? '' : 'increase'}">${obj.operation === 'debet' ? '-' : '+'} ${currency} ${obj.amount.toFixed(2)}</div>
      <img src="img/icon/dots-icon.svg" class="transaction__item__more" alt="">
  </div>
`;

export const addUserTransactions = (transactionArray) => {
  const cardInfoItem = document.querySelectorAll('.card__info__item');
  
  let list = '';
  let index = 0;
  const currentCardCurrency = {};

  cardInfoItem.forEach(item => {
    currentCardCurrency[item.dataset.card] = item.dataset.currency;
  });

  for (const item of transactionArray) {
    const currency = currentCardCurrency[item.card.split('').slice(-4).join('')];

    list += transactionDivTemplate(item, currency);

    index++;
    if (index >= 8) break; // Кол. показывающих транзакций
  }

  transactionMainOverflow.insertAdjacentHTML('afterbegin', list);
};