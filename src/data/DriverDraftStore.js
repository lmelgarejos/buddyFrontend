'use strict';

import {ReduceStore} from 'flux/utils';
import DriverActionTypes from './DriverActionTypes';
import AppDispatcher from './AppDispatcher';

class DriverDraftStore extends ReduceStore {
  constructor() {
    super(AppDispatcher);
  }

  getInitialState() {
    return '';
  }

  reduce(state, action) {
    switch (action.type) {
      case DriverActionTypes.ADD_DRIVER:
        return '';

      case DriverActionTypes.UPDATE_DRAFT:
        return action.text;

      default:
        return state;
    }
  }
}

export default new DriverDraftStore();
