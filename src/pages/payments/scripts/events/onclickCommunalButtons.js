const UserAdressBlock = document.querySelector('#UserAdressBlock');
const UserAdressButton = document.querySelector('#UserAdressButton');
const UserAdressToggle = UserAdressBlock.querySelector('.dropdown__list');
const UserAdressInput = UserAdressButton.querySelector('input');

const communalBlock = document.querySelector('#communalBlock');
const communalButton = document.querySelector('#communalButton');
const communalToggle = communalBlock.querySelector('.dropdown__list');
const communalInput = communalButton.querySelector('input');

const communalSwitchBlock = document.querySelector('#communalSwitchBlock');


export const onclickUserAdressDropdownButton = () => {
  UserAdressButton.onclick = () => {
    if (UserAdressToggle.classList.contains('active')) {
      UserAdressBlock.classList.remove('dropdown--open');
    } else {
      UserAdressBlock.classList.add('dropdown--open');
    }
    UserAdressToggle.classList.toggle('active');
  };
};

export const onclickUserAdressDropdownList = () => {
  UserAdressToggle.onclick = (e) => {
    let target = e.target.parentNode;
  
    if (!target.classList.contains('dropdown__list__item')) return;
  
    let targetCardName = target.querySelector('.form__input').innerHTML;
  
    UserAdressInput.placeholder = targetCardName;
    UserAdressInput.value = targetCardName;
  
    UserAdressBlock.classList.remove('dropdown--open');
    UserAdressToggle.classList.toggle('active');
  };
};

export const onclickCommunalDropdownButton = () => {
  communalButton.onclick = () => {
    if (communalToggle.classList.contains('active')) {
      communalBlock.classList.remove('dropdown--open');
    } else {
      communalBlock.classList.add('dropdown--open');
    }
    communalToggle.classList.toggle('active');
  };
};

export const onclickCommunalDropdownList = () => {
  communalToggle.onclick = (e) => {
    let target = e.target.parentNode;
  
    if (!target.classList.contains('dropdown__list__item')) return;
  
    let targetCardName = target.querySelector('.form__input').innerHTML;
  
    communalInput.placeholder = targetCardName;
    communalInput.value = targetCardName;
  
    communalBlock.classList.remove('dropdown--open');
    communalToggle.classList.toggle('active');
  };
};

export const onclickCommunalSwitchBlock = () => {
  communalSwitchBlock.onclick = () => {
    communalSwitchBlock.classList.toggle('checked');
  };
};