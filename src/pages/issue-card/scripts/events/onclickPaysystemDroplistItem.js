const cardCreateForm = document.querySelector('#cardCreateForm');
const paySystem = cardCreateForm.querySelector('#paySystem');
const paysystemDropdown = cardCreateForm.querySelector('.paysystem__block').querySelector('.dropdown');
const paysystemDropdownToggle = cardCreateForm.querySelector('.paysystem__block').querySelector('.dropdown__toggle');
const paysystemDroplist = cardCreateForm.querySelector('.paysystem__block').querySelector('.dropdown__list');
export const cardRadioButtons = cardCreateForm.querySelectorAll('.radio__button'); // export to 'onsubmitCreateCard.js'

const cards = {
  visa: ['Gold', 'Platinum', 'Signature'],
  mastercard: ['Gold', 'World', 'Platinum'],
};

export const onclickPaysystemDroplistItem = () => {
  paysystemDroplist.onclick = (e) => {
    let target = e.target.parentNode;
  
    if (!target.classList.contains('dropdown__list__item')) return;
  
    let targetCardName = target.querySelector('.form__input').innerHTML;
    let targetImgSrc = target.querySelector('img').src;
  
    paySystem.placeholder = targetCardName;
    paySystem.value = targetCardName;
    paysystemDropdown.querySelector('.paysystem__icon.visa__icon').src = targetImgSrc;
  
    paysystemDropdown.classList.remove('dropdown--open');
    paysystemDropdownToggle.classList.toggle('active');
  
    if (targetCardName === 'Visa') {
      cards.visa.forEach((item, index) => {
        cardRadioButtons[index].querySelector('label').innerHTML = item;
      });
    }
  
    if (targetCardName === 'Mastercard') {
      cards.mastercard.forEach((item, index) => {
        cardRadioButtons[index].querySelector('label').innerHTML = item;
      });
    }
  };
};
