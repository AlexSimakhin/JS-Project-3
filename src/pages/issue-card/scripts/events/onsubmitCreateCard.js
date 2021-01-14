import { cardsReq } from '../request/cardsReq';
import { cardRadioButtons } from './onclickPaysystemDroplistItem';

const cardType = cardCreateForm.querySelector('#cardType');
const cardDescr = cardCreateForm.querySelector('#cardDescr');
const terms = cardCreateForm.querySelector('#terms');

const ifSystem = () => paySystem.value ? paySystem.value.toLowerCase() : false;

const cardCurrency = [
  {
    name: 'Доллар',
    currency: 'usd',
  },
  {
    name: 'Евро',
    currency: 'eur',
  },
  {
    name: 'Гривна',
    currency: 'uah',
  },
  {
    name: 'Рубли',
    currency: 'rub',
  },
];

const currentCurrency = () => {
  let currencyValue = currency.value;

  for (const item of cardCurrency) {
    if (item.name === currencyValue) {
      return item.currency;
    }
  }
};

const isClassCard = () => {
  let check;

  cardRadioButtons.forEach(item => {
    if (item.querySelector('input').checked) {
      check = item.querySelector('label').innerHTML.toLowerCase();
    }
  });

  return check;
};

export const onsubmitCreateCard = () => {
  cardCreateForm.onsubmit = (e) => {
    e.preventDefault();
      
    const issuer = cardType.value;
    const system = ifSystem();
    const currency = currentCurrency();
    const classCard = isClassCard();
  
    if (!terms.checked) {
      throw new Error('Вы не согласны с положениями Банка?');
    }
    if (!system) {
      throw new Error('Выбирете вид карты');
    }
    if (!currency) {
      throw new Error('Выбирете валюту');
    }
  
    const card = {
      'issuer': issuer,
      'system': system,
      'currency': currency,
      'class': classCard,
      'description': cardDescr.value,
    };
  
    cardsReq(card);
  };
};

