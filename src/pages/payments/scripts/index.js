import '../../../css/style.scss';


import * as events from './events';
import { lastPaymentBlock } from './events/onchangePaymentType';
import { createPaymentReq } from './request/createPaymentReq';
import { reqAddCardsFromIndex } from './request/reqAddCardsFromIndex';
import { getProfileReq } from '../../cards/scripts/request/getProfileReq';
import { socketIo } from '../../cards/scripts/socket';
import { onclickBtnSignOut } from '../../cards/scripts/events/onclickBtnSignOut';

export const balanceBlockMain = document.querySelector('.balance__block__main');
const paysystemForm = document.querySelector('#paysystemForm');
export let cardsUser = [];

reqAddCardsFromIndex();
socketIo();
getProfileReq();
onclickBtnSignOut();

events.onclickPaysystemDropdownButton();
events.onclickPaysystemDroplistItem();
events.onchangePaymentType();
events.onclickPaymentToUserCard();
events.onclickPaymentListToUserCard();
events.onclickSavedCardContactButton();
events.onclickSavedCardContactList();
events.onclickCommunalDropdownButton();
events.onclickUserAdressDropdownList();
events.onclickUserAdressDropdownButton();
events.onclickCommunalDropdownList();
events.onclickCommunalSwitchBlock();


paysystemForm.onsubmit = (e) => {
  e.preventDefault();

  let currentCardPayment = null;
  let paymentToCard = null;
  let paySystemInfo = document.querySelector('#paySystem');
  let paymentSystemInfo = document.querySelector('#paymentSystem');

  cardsUser.forEach(card => {
    if (card.split('').slice(-4).join('') === paySystemInfo.value.split('').slice(-4).join('')) {
      currentCardPayment = card;
    }
    if (card.split('').slice(-4).join('') === paymentSystemInfo.value.split('').slice(-4).join('')) {
      paymentToCard = card;
    }
  });

  let paymentInfo = {};

  if (!lastPaymentBlock) {
    let firstPaymentBlock = document.querySelector('#mobile');

    paymentInfo['title'] = 'Пополнение мобилки';
    paymentInfo['description'] = firstPaymentBlock.querySelector('#contactTelNumber').value || firstPaymentBlock.querySelector('#contact').value;
    paymentInfo['operation'] = 'debet';
    paymentInfo['amount'] = +firstPaymentBlock.querySelector('#totalSum').value;
    paymentInfo['card'] = currentCardPayment;
    paymentInfo['created'] = new Date().toISOString();

    createPaymentReq(paymentInfo).then(status => {
      if (status === 201) {
        reqAddCardsFromIndex();
      }
    });

    return false;
  }
  
  if (lastPaymentBlock.id === 'ownCard') {
    if (currentCardPayment === paymentToCard) {
      throw new Error('Нельзя отправить перевод самому себе!');
    };

    paymentInfo['title'] = 'Пополнение';
    paymentInfo['description'] = 'Денежный перевод';
    paymentInfo['operation'] = 'debet';
    paymentInfo['amount'] = +lastPaymentBlock.querySelector('#totalSum').value; // Нужна валидация
    paymentInfo['card'] = currentCardPayment;
    paymentInfo['created'] = new Date().toISOString();
    paymentInfo['transfer'] = paymentToCard;
  }

  if (lastPaymentBlock.id === 'clientCard') {
    if (currentCardPayment === lastPaymentBlock.querySelector('#contact').value) {
      throw new Error('Нельзя отправить перевод самому себе!');
    };

    paymentInfo['title'] = 'Пополнение';
    paymentInfo['description'] = 'Денежный перевод';
    paymentInfo['operation'] = 'debet';
    paymentInfo['amount'] = +lastPaymentBlock.querySelector('#totalSum').value; // Нужна валидация
    paymentInfo['card'] = currentCardPayment;
    paymentInfo['created'] = new Date().toISOString();
    paymentInfo['transfer'] = lastPaymentBlock.querySelector('#contact').value;
  }

  if (lastPaymentBlock.id === 'utilityBills') {
    paymentInfo['title'] = 'Оплата коммуналки';
    paymentInfo['description'] = lastPaymentBlock.querySelector('#services').value;
    paymentInfo['operation'] = 'debet';
    paymentInfo['amount'] = 1000; // Нужна исходные данные, default значение
    paymentInfo['card'] = currentCardPayment;
    paymentInfo['created'] = new Date().toISOString();
  }
  
  if (lastPaymentBlock.id === 'mobile') {
    paymentInfo['title'] = 'Пополнение мобилки';
    paymentInfo['description'] = lastPaymentBlock.querySelector('#contactTelNumber').value || lastPaymentBlock.querySelector('#contact').value;
    paymentInfo['operation'] = 'debet';
    paymentInfo['amount'] = +lastPaymentBlock.querySelector('#totalSum').value;
    paymentInfo['card'] = currentCardPayment;
    paymentInfo['created'] = new Date().toISOString();
  }

  createPaymentReq(paymentInfo).then(status => {
    if (status === 201) {
      reqAddCardsFromIndex();
    }
  });
};