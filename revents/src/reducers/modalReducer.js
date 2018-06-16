import { MODAL_CLOSE, MODAL_OPEN } from '../actions/modalConstants';
import { createReducer } from '../common/reducerUtil';

const initialState = null;

const openModal = (state, payload) => {
  const {modalType, modalProps} = payload;
  return {modalType, modalProps};
};

const closeModal = () => {
  return null
};

export default createReducer(initialState, {
  [MODAL_CLOSE]: closeModal,
  [MODAL_OPEN]: openModal
});
