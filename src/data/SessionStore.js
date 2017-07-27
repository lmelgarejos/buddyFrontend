import {ReduceStore} from 'flux/utils';
import AppDispatcher from './AppDispatcher';
import SessionActionTypes from './SessionActionTypes';
import Immutable from 'immutable';
import DriverActionTypes from './DriverActionTypes';


class SessionStore extends ReduceStore {
  constructor() {
    super(AppDispatcher);
  }

  getInitialState() {
    return Immutable.Map({
      loggedIn: false,
    });
  }

  reduce(state, action) {
    switch (action.type) {
      case SessionActionTypes.SET_LOGGED_IN:
        return state.set('loggedIn', true);
        break;
      default:
        return state;
    }
  }
}

export default new SessionStore();
