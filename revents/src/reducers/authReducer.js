import { LOGIN_USER, LOGOUT_USER } from '../actions/authConstants';
import { createReducer } from '../common/reducerUtil';

const initialState = {
  currentUser: {}
};

const loginUser = (state, payload) => {
  return {
    ...state,
    isAuthenticated: true,
    currentUser: payload.credentials.email
  }
};

const logoutUser = (state, payload) => {
  return {
    ...state,
    isAuthenticated: false,
    currentUser: {}
  }
};

export default createReducer(initialState, {
  [LOGIN_USER]: loginUser,
  [LOGOUT_USER]: logoutUser
});
