import { saveTokenToLocaleStorage } from '../index';
import { authenticateUser } from '../auth/authenticateUser';

const registerReq = async (value) => {
  let response = await fetch('https://lab.lectrum.io/js2/api/ironbank/register', {
    method: 'POST',
    headers: {
      'accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(value),
  });

  let result = await response.json();

  if (response.status === 201) {
    saveTokenToLocaleStorage(result.data);

    authenticateUser().then(status => {
      if (status === 204) {
        document.location = 'issue-card.html';
      }
    });
  }

  return response.status;
};

export { registerReq };