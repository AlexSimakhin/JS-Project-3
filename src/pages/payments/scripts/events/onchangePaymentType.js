const paymentType = document.querySelector('#paymentType');
const radioButtons = document.querySelectorAll('.radio__button');
const mobile = document.querySelector('#mobile');
const utilityBills = document.querySelector('#utilityBills');
const clientCard = document.querySelector('#clientCard');
const ownCard = document.querySelector('#ownCard');

const radioBtn = [mobile, utilityBills, clientCard, ownCard];
let lastBtn = null;
export let lastPaymentBlock = null;

radioButtons.forEach(btn => {
  if (btn.querySelector('input').checked === true) {
    lastBtn = btn;
  }
});

export const onchangePaymentType = () => {
  paymentType.onchange = (e) => {
    let target = e.target.closest('.radio__button');
    if (!target.classList.contains('radio__button')) return;
  
    radioBtn.forEach(block => {
      if (block.id === lastBtn.dataset.id) {
        block.style.display = 'none';
      }
    });
  
    radioBtn.forEach(block => {
      if (block.id === target.dataset.id) {
        block.style.display = 'block';
        lastBtn = target;
        lastPaymentBlock = block;
      }
    });
  };
};