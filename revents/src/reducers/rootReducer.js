import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import eventReducer from './eventReducer';

const rootReducer = combineReducers({
  events: eventReducer,
  form: formReducer
});

export default rootReducer;
