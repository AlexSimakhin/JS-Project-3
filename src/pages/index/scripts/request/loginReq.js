import { saveTokenToLocaleStorage } from '../index';
import { authenticateUser } from '../auth/authenticateUser';

const loginReq = async (value) => {
  let response = await fetch('https://lab.lectrum.io/js2/api/ironbank/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(value),
  });

  let result = await response.json();

  if (response.status === 200) {
    saveTokenToLocaleStorage(result.data);

    authenticateUser().then(status => {
      if (status === 204) {
        document.location = 'cards.html';
      }
    });
  }

  return response.status;
};

export { loginReq };