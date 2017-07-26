'use strict';

import Counter from './Counter';
import Immutable from 'immutable';
import {ReduceStore} from 'flux/utils';
import Driver from './Driver';
import DriverActionTypes from './DriverActionTypes';
import AppDispatcher from './AppDispatcher';

class DriverStore extends ReduceStore {
  constructor() {
    super(AppDispatcher);
  }

  getInitialState() {
    return Immutable.OrderedMap();
  }

  reduce(state, action) {
    switch (action.type) {
      case DriverActionTypes.ADD_DRIVER:
        if (!action.params) {
          return state;
        }
        const id = Counter.increment();
        return state.set(id, new Driver({
          id,
          params: action.params,
          complete: false,
        }));


      case DriverActionTypes.DELETE_DRIVER:
        return state.delete(action.id);

      case DriverActionTypes.EDIT_DRIVER:
        return state.setIn([action.id, 'params'], action.params);

      default:
        return state;
    }
  }
}

export default new DriverStore();
