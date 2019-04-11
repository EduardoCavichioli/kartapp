import * as actionTypes from '../helpers/actionTypes';

const initialState = {
  loggedUser: '',
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
        loginMessage: action.loginMessage
      }
    case actionTypes.LOGOUT:
      return {
        ...state,
        loggedUser: '',
        isLogged: false,
        loginMessage: ''
      }
    default:
      return state;
  }
};