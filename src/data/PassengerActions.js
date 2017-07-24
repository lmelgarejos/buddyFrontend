'use strict';

import PassengerActionTypes from './PassengerActionTypes';
import PassengerDispatcher from './PassengerDispatcher';

const Actions = {

  addPassenger(params) {
    request.post('http://localhost:3001/passengers').send(params).set('Accept', 'application/json').end(() => {
      // params.type
      // debugger;
      PassengerDispatcher.dispatch({
        type: PassengerActionTypes.ADD_PASSENGER,
        params,
      });


    });

      // username,
      // first_name,
      // last_name,
      // home_address,
      // home_zip_code,
      // work_address,
      // work_zip_code,
      // license_number,
      // email,
      // phone_number,
      // user_id,
    // }
  },

  deletePassenger(id) {
    PassengerDispatcher.dispatch({
      type: PassengerActionTypes.DELETE_PASSENGER,
      id,
    });
  },

  editPassenger(id, username, first_name, last_name, home_address, home_zip_code, work_address, work_zip_code, license_number, email, phone_number, user_id) {
    PassengerDispatcher.dispatch({
      type: PassengerActionTypes.EDIT_PASSENGER,
      id,
      username,
      first_name,
      last_name,
      home_address,
      home_zip_code,
      work_address,
      work_zip_code,
      license_number,
      email,
      phone_number,
      user_id,
    });
  },

  startEditingPassenger(id) {
    PassengerDispatcher.dispatch({
      type: PassengerActionTypes.START_EDITING_PASSENGER,
      id,
    });
  },

  stopEditingPassenger() {
    PassengerDispatcher.dispatch({
      type: PassengerActionTypes.STOP_EDITING_PASSENGER,
    });
  },

};

export default Actions;
