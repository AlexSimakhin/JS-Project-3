const cardSavedContactBlock = document.querySelector('#cardSavedContactBlock');
const cardSavedContactButton = document.querySelector('#cardSavedContactButton');
const cardSavedContactToggle = cardSavedContactBlock.querySelector('.dropdown__list');
const cardSavedContactInput = cardSavedContactButton.querySelector('input');

export const onclickSavedCardContactButton = () => {
  cardSavedContactButton.onclick = () => {
    if (cardSavedContactButton.classList.contains('active')) {
      cardSavedContactBlock.classList.remove('dropdown--open');
    } else {
      cardSavedContactBlock.classList.add('dropdown--open');
    }
    cardSavedContactButton.classList.toggle('active');
  };
};

export const onclickSavedCardContactList = () => {
  cardSavedContactToggle.onclick = (e) => {
    let target = e.target.parentNode;
  
    if (!target.classList.contains('dropdown__list__item')) return;
  
    let targetCardName = target.querySelector('.form__input').innerHTML;
  
    cardSavedContactInput.placeholder = targetCardName;
    cardSavedContactInput.value = targetCardName;
  
    cardSavedContactBlock.classList.remove('dropdown--open');
    cardSavedContactButton.classList.toggle('active');
  };
};