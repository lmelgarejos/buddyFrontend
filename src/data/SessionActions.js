import SessionActionTypes from './SessionActionTypes';
import AppDispatcher from './AppDispatcher';

export default {
  setLoggedIn() {
    AppDispatcher.dispatch({
      type: SessionActionTypes.SET_LOGGED_IN,
    });
  },
};
