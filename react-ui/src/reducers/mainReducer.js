import * as actionTypes from '../helpers/actionTypes';

const initialState = {
  loggedUser: '',
  isLogged: false
}

export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      return {
        ...state,
        loggedUser: action.value,
        isLogged: true
      }
    case actionTypes.LOGOUT:
      return {
        ...state,
        loggedUser: '',
        isLogged: false
      }
    default:
      return state;
  }
};