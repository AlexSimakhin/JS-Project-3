const transactionMain = document.querySelector('.transaction__main');
import { operations } from '../../../../cards/scripts/components/transactions/addUserTransactions';

const transactionDivTemplate = (obj, currency) => `
  <div class="transaction__item">
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
  const cardBalanceData = document.querySelectorAll('.card__balance__data');

  transactionMain.innerHTML = '';
  
  let list = '';
  let index = 0;
  const currentCardCurrency = {};

  cardBalanceData.forEach(item => {
    currentCardCurrency[item.dataset.card] = item.dataset.currency;
  });

  for (const item of transactionArray) {
    const currency = currentCardCurrency[item.card.split('').slice(-4).join('')];

    list += transactionDivTemplate(item, currency);

    index++;
    if (index >= 7) break; // Кол. показывающих транзакций
  }

  transactionMain.insertAdjacentHTML('afterbegin', list);
};