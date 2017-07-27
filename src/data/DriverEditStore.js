'use strict';

import {ReduceStore} from 'flux/utils';
import DriverActionTypes from './DriverActionTypes';
import AppDispatcher from './AppDispatcher';

class DriverEditStore extends ReduceStore {
  constructor() {
    super(AppDispatcher);
  }

  getInitialState() {
    return '';
  }

  reduce(state, action) {
    switch (action.type) {
      case DriverActionTypes.START_EDITING_DRIVER:
        return action.id;

      case DriverActionTypes.STOP_EDITING_DRIVER:
        return '';

      default:
        return state;
    }
  }
}

export default new DriverEditStore();
