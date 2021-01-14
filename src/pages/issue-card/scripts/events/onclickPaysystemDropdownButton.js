const paysystemDropdownButton = cardCreateForm.querySelector('#paysystemDropdownButton');
const paysystemDropdown = cardCreateForm.querySelector('.paysystem__block').querySelector('.dropdown');
const paysystemDropdownToggle = cardCreateForm.querySelector('.paysystem__block').querySelector('.dropdown__toggle');

export const onclickPaysystemDropdownButton = () => {
  paysystemDropdownButton.onclick = () => {
    if (paysystemDropdownToggle.classList.contains('active')) {
      paysystemDropdown.classList.remove('dropdown--open');
    } else {
      paysystemDropdown.classList.add('dropdown--open');
    }
    paysystemDropdownToggle.classList.toggle('active');
  };
};

