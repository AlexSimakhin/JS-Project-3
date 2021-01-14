const currencyDropdownButton = cardCreateForm.querySelector('#currencyDropdownButton');
const currencyDropdown = cardCreateForm.querySelector('.currency__block').querySelector('.dropdown');
const currencyDropdownToggle = cardCreateForm.querySelector('.currency__block').querySelector('.dropdown__toggle');

export const onclickCurrencyDropdownButton = () => {
  currencyDropdownButton.onclick = () => {
    if (currencyDropdownToggle.classList.contains('active')) {
      currencyDropdown.classList.remove('dropdown--open');
    } else {
      currencyDropdown.classList.add('dropdown--open');
    }
    currencyDropdownToggle.classList.toggle('active');
  };
};

