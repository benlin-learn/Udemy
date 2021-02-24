import { combineReducers } from 'redux';

import authReducer from './authReducer';

export default combineReducers({
  replaceMe: () => 'dummy code',
  auth: authReducer
});
