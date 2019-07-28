import { combineReducers } from 'redux';
import user from './user';
import header from './header';

export default combineReducers({
  user,
  header,
});
