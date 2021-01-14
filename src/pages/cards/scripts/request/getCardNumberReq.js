const getCardNumberReq = async (value) => {
  let response = await fetch(`https://lab.lectrum.io/js2/api/ironbank/orders/${value}`, {
    method: 'GET',
    headers: {
      'accept': 'application/json',
      'x-token': localStorage.getItem('token'),
    },
  });

  let result = await response.json();

  if (response.status !== 200) {
    console.log(result);
  }

  return { status: response.status, data: result.data };
};

export { getCardNumberReq };