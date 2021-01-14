import { loginReq } from '../request/loginReq';

const loginForm = document.querySelector('#loginForm');

const onsubmitLoginForm = () => {
  loginForm.onsubmit = (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get('password');
  
    const login = {
      'email': email,
      'password': password,
    };

    loginReq(login);
  };
};

export { onsubmitLoginForm };