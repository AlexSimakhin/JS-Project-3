const createPaymentReq = async (value) => {
  let response = await fetch('https://lab.lectrum.io/js2/api/ironbank/orders', {
    method: 'POST',
    headers: {
      'accept': 'application/json',
      'x-token': localStorage.getItem('token'),
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(value),
  });

  let result = await response.json();

  console.log(result);
  if (response.status === 201) {
    console.log('Выполнено!');
  }

  return response.status;
};

export { createPaymentReq };