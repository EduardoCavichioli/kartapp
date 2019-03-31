import * as actionTypes from '../helpers/actionTypes';

const initialState = {
  loggedUser: ''
}

export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      return {
        ...state,
        loggedUser: action.value
      }
    default:
      return state;
  }
};