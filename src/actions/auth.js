import { USER_LOGGED_IN } from '../types.js';
import api from '../api.js';

export const userLoggedIn = user => ({
  type: USER_LOGGED_IN,
  user,
});
// thunk action - func that returns another func
export const login = credentials => dispatch =>
  // api.user.login(credentials).then(res => res.data.user);
  api.user.login(credentials).then(user => dispatch(userLoggedIn(user)));
