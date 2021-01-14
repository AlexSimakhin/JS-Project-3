const pageHeaderUsername = document.querySelector('.page__header__username');

const getProfileReq = async () => {
  let response = await fetch('https://lab.lectrum.io/js2/api/ironbank/profile', {
    method: 'GET',
    headers: {
      'accept': 'application/json',
      'x-token': localStorage.getItem('token'),
    },
  });

  let result = await response.json();

  if (response.status === 200) { 
    pageHeaderUsername.innerHTML = result.data.name;
  } 

  if (response.status !== 200) {
    console.log(result);
  }

  return { status: response.status, data: result.data };
};

export { getProfileReq };