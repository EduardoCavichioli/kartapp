import * as actionTypes from '../helpers/actionTypes';

const initialState = {
  loggedUser: '',
  loggedUserID: '',
  isLogged: false,
  loginMessage: ''
}

export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      return {
        ...state,
        loggedUser: action.email,
        isLogged: action.loginStatus,
        loginMessage: action.loginMessage,
        loggedUserID: action.loggedUserID
      }
    case actionTypes.LOGOUT:
      return {
        ...state,
        loggedUser: '',
        isLogged: false,
        loginMessage: '',
        loggedUserID: ''
      }
    default:
      return state;
  }
};