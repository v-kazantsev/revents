import { LOGIN_USER, LOGOUT_USER } from './authConstants';
import { closeModal } from './modalActions';

export const login = (credentials) => {
  return dispatch => {
    dispatch({type: LOGIN_USER, payload: {credentials}})
    dispatch(closeModal())
  }
};

export const logout = () => ({
  type: LOGOUT_USER
});
