const authenticateUser = async () => {
  let response = await fetch('https://lab.lectrum.io/js2/api/ironbank/auth', {
    method: 'GET',
    headers: {
      'accept': '*/*',
      'x-token': localStorage.getItem('token'),
    },
  });

  return response.status;
};

export { authenticateUser };