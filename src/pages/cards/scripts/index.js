import '../../../css/style.scss';
import * as request from './request';
import * as components from './components';
import { socketIo } from './socket';
import { onclickBtnSignOut } from './events/onclickBtnSignOut';

export const cardsInfoLayout = document.querySelector('.cards__info__layout');
const transactionLayout = document.querySelectorAll('.transaction__layout');

request.getCardsReq().then(cb => {
  const { status, data } = cb;

  if (status === 200) {
    components.addUserCards(data);


    let newDB = request.getCardNumberReq(data[0].card).then(cb => {
      const { status, data } = cb;

      if (status === 200) {
        return data;
      }
    });

    return newDB;
  }
}).then(item => {
  components.addUserTransactions(item);

  transactionLayout.forEach(item => {
    if (item.dataset.status === 'download') {
      item.style.display = 'none';
    } else {
      item.style.display = 'block';
    }
  });
});

socketIo();
request.getProfileReq();
onclickBtnSignOut();


cardsInfoLayout.onclick = function(e) {
  let target = e.target.closest('.card__info__item');

  if (!!target.classList.value.indexOf('card__info__item')) return;

  target.classList.toggle('collapsed');
};