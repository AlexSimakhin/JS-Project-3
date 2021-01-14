import { registerReq } from '../request/registerReq';

const regForm = document.querySelector('#regForm');

const onsubmitRegForm = () => {
  regForm.onsubmit = (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('tel');
    const password = formData.get('password');
    const termsCheck = formData.get('terms');

    if (!!termsCheck) {
      const register = {
        'name': name,
        'email': email,
        'phone': phone,
        'password': password,
      };

      registerReq(register);
    } else {
      alert('Вы не согласны с положениями Банка?');
    }
  };
};

export { onsubmitRegForm };