'use strict';

import {ReduceStore} from 'flux/utils';
import PassengerActionTypes from './PassengerActionTypes';
import PassengerDispatcher from './PassengerDispatcher';

class PassengerEditStore extends ReduceStore {
  constructor() {
    super(PassengerDispatcher);
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
