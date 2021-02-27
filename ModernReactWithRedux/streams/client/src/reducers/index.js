import { combineReducers } from 'redux';
//  reducer as formReducer avoid the same name 'reducer'
import { reducer as formReducer } from 'redux-form';

import authReducer from './authReducer';
import streamReducer from './streamReducer';

export default combineReducers({
  replaceMe: () => 'dummy code',
  auth: authReducer,
  // redux-form setup
  form: formReducer,
  streams: streamReducer
});
