'use strict';

import DriverActionTypes from './DriverActionTypes';
import AppDispatcher from './AppDispatcher';
import request from 'superagent';

const Actions = {
  getDriver(params) {
    // params.token = window.buddy.token;
    window.buddy.token = params.token;
    window.buddy.id = params.id;
    request.get('http://localhost:3000/drivers/' + params.id).withCredentials()
      .end((err, res) => {
        // debugger;
        if (err) return;
        AppDispatcher.dispatch({
          type: DriverActionTypes.GET_DRIVER,
          res,
        });
      });
  },

  addDriver(params) {
    params.token = window.buddy.token;
    // window.buddy.token = params.token;
    request.post('http://localhost:3000/drivers').withCredentials().send(params).set('Accept', 'application/json')
      .end((err, res) => {
        // debugger;
        if (err) return;
        AppDispatcher.dispatch({
          type: DriverActionTypes.ADD_DRIVER,
          driverInfo: res.body,
        });
      });
  },


  deleteDriver(id) {
    AppDispatcher.dispatch({
      type: DriverActionTypes.DELETE_DRIVER,
      id,
    });
  },

  editDriver(id, params) {
    AppDispatcher.dispatch({
      type: DriverActionTypes.EDIT_DRIVER,
      id,
      params,
    });
  },

  // startEditingDriver(id) {
  //   AppDispatcher.dispatch({
  //     type: DriverActionTypes.START_EDITING_DRIVER,
  //     id,
  //   });
  // },
  //
  // stopEditingDriver() {
  //   AppDispatcher.dispatch({
  //     type: DriverActionTypes.STOP_EDITING_DRIVER,
  //   });
  // },
  //
  // updateDraft(params) {
  //   AppDispatcher.dispatch({
  //     type: DriverActionTypes.UPDATE_DRAFT,
  //     params,
  //   });
  // },
};

export default Actions;
