import * as actionTypes from '../helpers/actionTypes';

export const loginButton = (history, email, password) => (dispatch) => {
  fetch('/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: email,
      password: password
    })
  })
  .then(response => response.json())
  .then(response => {
    let loginStatus = false;
    let loginMessage = '';
    let userID = '';
    console.log('Success', JSON.stringify(response));

    if (response.value) {
      loginStatus = true;
      loginMessage = response.value;
      userID = response.id;
    } else {
      loginStatus = false;
      loginMessage = response.error
      userID = ''
    }

    dispatch({
      type: actionTypes.LOGIN,
      email: email,
      loginStatus: loginStatus,
      loginMessage: loginMessage,
      loggedUserID: userID
    });
    history.push('/championships');
  })
  .catch(error => {
    console.error('Error:', error);
     dispatch({
      type: actionTypes.LOGIN,
      loginStatus: false,
      loginMessage: 'Error'
    })
  });
}

export const logoutButton = () => {
  return {
    type: actionTypes.LOGOUT
  }
}