const cardCreateForm = document.querySelector('#cardCreateForm');
const currencyDroplist = cardCreateForm.querySelector('.currency__block').querySelector('.dropdown__list');
const currency = cardCreateForm.querySelector('#currency');
const currencyDropdown = cardCreateForm.querySelector('.currency__block').querySelector('.dropdown');
const currencyDropdownToggle = cardCreateForm.querySelector('.currency__block').querySelector('.dropdown__toggle');

export const onclickCurrencyDroplistItem = () => {
  currencyDroplist.onclick = (e) => {
    let target = e.target.parentNode;
  
    if (!target.classList.contains('dropdown__list__item')) return;
  
    let targetName = target.querySelector('.form__input').innerHTML;
    
    currency.placeholder = targetName;
    currency.value = targetName;
  
    currencyDropdown.classList.remove('dropdown--open');
    currencyDropdownToggle.classList.toggle('active');
  };
};
