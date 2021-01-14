const paymentToUserCardDropdownBlock = document.querySelector('#paymentToUserCardDropdownBlock');
const paymentToUserCard = document.querySelector('#paymentToUserCard');
const paymentDropdownBlock = document.querySelector('#paymentToUserCardDropdownBlock');
const paymentDropdownToggle = paymentToUserCardDropdownBlock.querySelector('.dropdown__list');


export const onclickPaymentToUserCard = () => {
  paymentToUserCard.onclick = () => {
    if (paymentDropdownToggle.classList.contains('active')) {
      paymentDropdownBlock.classList.remove('dropdown--open');
    } else {
      paymentDropdownBlock.classList.add('dropdown--open');
    }
    paymentDropdownToggle.classList.toggle('active');
  };
};

