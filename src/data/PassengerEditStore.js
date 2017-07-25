'use strict';

import {ReduceStore} from 'flux/utils';
import PassengerActionTypes from './PassengerActionTypes';
import AppDispatcher from './AppDispatcher';

class PassengerEditStore extends ReduceStore {
  constructor() {
    super(AppDispatcher);
  }

  getInitialState() {
    return '';
  }

  reduce(state, action) {
    switch (action.type) {
      case PassengerActionTypes.START_EDITING_PASSENGER:
        return action.id;

      case PassengerActionTypes.STOP_EDITING_PASSENGER:
        return '';

      default:
        return state;
    }
  }
}

export default new PassengerEditStore();
