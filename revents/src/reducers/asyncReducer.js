import { ASYNC_ACTION_START, ASYNC_ACTION_FINISH, ASYNC_ACTION_ERROR } from '../actions/asyncConstants';
import { createReducer } from '../common/reducerUtil';

const initialState = {
  loading: false
};

const asyncActionStarted = (state, _payload) => ({
  ...state, loading: true
});

const asyncActionFinished = (state, _payload) => ({
  ...state, loading: false
});

const asyncActionError = (state, _payload) => ({
  ...state, loading: false
});

export default createReducer(initialState, {
  [ASYNC_ACTION_START]: asyncActionStarted,
  [ASYNC_ACTION_FINISH]: asyncActionFinished,
  [ASYNC_ACTION_ERROR]: asyncActionError
});
