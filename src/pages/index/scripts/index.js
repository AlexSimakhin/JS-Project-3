import '../../../css/style.scss';

import * as events from './events';

const signInButton = document.querySelector('#signInButton');
const signUpButton = document.querySelector('#signUpButton');
const login = document.querySelector('#login');
const registration = document.querySelector('#registration');

export const saveTokenToLocaleStorage = (token) => {
  localStorage.setItem('token', token);
};

signInButton.onclick = (e) => {
  e.preventDefault();
  registration.style.display = 'none';
  login.style.display = 'block';
};

signUpButton.onclick = (e) => {
  e.preventDefault();
  login.style.display = 'none';
  registration.style.display = 'block';
};

events.onsubmitRegForm();
events.onsubmitLoginForm();
