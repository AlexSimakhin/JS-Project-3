const btnSignOut = document.querySelector('#btnSignOut');

export const onclickBtnSignOut = () => {
  btnSignOut.onclick = (e) => {
    e.preventDefault();

    localStorage.removeItem('token');
    document.location = '../';
  };
};