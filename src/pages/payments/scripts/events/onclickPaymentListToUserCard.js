//const paymentToUserCardDropdownBlock = document.querySelector('#paymentToUserCardDropdownBlock');
const paymentSystem = document.querySelector('#paymentSystem');
const paymentDropdownToggle = paymentToUserCardDropdownBlock.querySelector('.dropdown__toggle');
const paymentDroplist = paymentToUserCardDropdownBlock.querySelector('.dropdown__list');

export const onclickPaymentListToUserCard = () => {
  paymentDroplist.onclick = (e) => {
    let target = e.target.parentNode;
  
    if (!target.classList.contains('dropdown__list__item')) return;
  
    let targetCardName = target.querySelector('.form__input').innerHTML;
    let targetImgSrc = target.querySelector('img').src;
  
    paymentSystem.placeholder = targetCardName;
    paymentSystem.value = targetCardName;
    paymentToUserCardDropdownBlock.querySelector('.paysystem__icon.visa__icon').src = targetImgSrc;
  
    paymentToUserCardDropdownBlock.classList.remove('dropdown--open');
    paymentDropdownToggle.classList.toggle('active');
  };
};
