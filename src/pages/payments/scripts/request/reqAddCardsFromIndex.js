import * as request from '../../../cards/scripts/request';
import * as components from '../components';
import { cardsUser } from '../index';

export const reqAddCardsFromIndex = () => {
  request.getCardsReq().then(cb => {
    const { status, data } = cb;
    if (status === 200) {
      components.addUserCards(data);
      
      data.forEach((cardItem) => {
        cardsUser.push(cardItem.card);
      });
      
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
  });
};
