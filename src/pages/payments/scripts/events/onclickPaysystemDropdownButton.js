const paysystemDropdownBlock = document.querySelector('#paysystemDropdownBlock');
const paysystemDropdownButton = paysystemDropdownBlock.querySelector('#paysystemDropdownButton');
const paysystemDropdownToggle = paysystemDropdownBlock.querySelector('.dropdown__toggle');

export const onclickPaysystemDropdownButton = () => {
  paysystemDropdownButton.onclick = () => {
    if (paysystemDropdownToggle.classList.contains('active')) {
      paysystemDropdownBlock.classList.remove('dropdown--open');
    } else {
      paysystemDropdownBlock.classList.add('dropdown--open');
    }
    paysystemDropdownToggle.classList.toggle('active');
  };
};

