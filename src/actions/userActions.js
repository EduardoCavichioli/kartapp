import * as actionTypes from '../helpers/actionTypes';

export const loginButton = (email, password) => {
  return {
    type: actionTypes.LOGIN,
    value: email
  }
}