const paysystemDropdownBlock = document.querySelector('#paysystemDropdownBlock');
const paySystem = paysystemDropdownBlock.querySelector('#paySystem');
const paysystemDropdownToggle = paysystemDropdownBlock.querySelector('.dropdown__toggle');
const paysystemDroplist = paysystemDropdownBlock.querySelector('.dropdown__list');

export const onclickPaysystemDroplistItem = () => {
  paysystemDroplist.onclick = (e) => {
    let target = e.target.parentNode;
  
    if (!target.classList.contains('dropdown__list__item')) return;
  
    let targetCardName = target.querySelector('.form__input').innerHTML;
    let targetImgSrc = target.querySelector('img').src;
  
    paySystem.placeholder = targetCardName;
    paySystem.value = targetCardName;
    paysystemDropdownBlock.querySelector('.paysystem__icon.visa__icon').src = targetImgSrc;
  
    paysystemDropdownBlock.classList.remove('dropdown--open');
    paysystemDropdownToggle.classList.toggle('active');
  };
};
