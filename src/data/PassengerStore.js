'use strict';

import Counter from './Counter';
import Immutable from 'immutable';
import {ReduceStore} from 'flux/utils';
import Passenger from './Passenger';
import PassengerActionTypes from './PassengerActionTypes';
import AppDispatcher from './AppDispatcher';

class PassengerStore extends ReduceStore {
  constructor() {
    super(AppDispatcher);
  }

  getInitialState() {
    return Immutable.OrderedMap();
  }

  reduce(state, action) {
    switch (action.type) {
      case PassengerActionTypes.ADD_PASSENGER:
        // Don't add passengers without an user id.
        if (!action.user_id) {
          return state;
        }
        const id = Counter.increment();
        return state.set(id, new Passenger({
          id,
          username: action.username,
          first_name: action.first_name,
          last_name: action.last_name,
          home_address: action.home_address,
          home_zip_code: action.home_zip_code,
          work_address: action.work_address,
          work_zip_code: action.work_zip_code,
          license_number: action.license_number,
          email: action.email,
          phone_number: action.phone_number,
          user_id: action.user_id,
        }));

      case PassengerActionTypes.DELETE_PASSENGER:
        return state.delete(action.id);

      case PassengerActionTypes.EDIT_PASSENGER:
        return state.setIn([action.id, 'username'], action.username);

      default:
        return state;
    }
  }
}

export default new PassengerStore();
