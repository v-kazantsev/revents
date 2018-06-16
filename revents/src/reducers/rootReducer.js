import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import eventReducer from './eventReducer';
import modalReducer from './modalReducer';

const rootReducer = combineReducers({
  events: eventReducer,
  form: formReducer,
  modal: modalReducer
});

export default rootReducer;
