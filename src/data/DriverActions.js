'use strict';

import DriverActionTypes from './DriverActionTypes';
import AppDispatcher from './AppDispatcher';
import request from 'superagent';

const Actions = {
  addDriver(params) {
    params.token = window.buddy.token;
    request.post('/drivers').send(params).set('Accept', 'application/json')
      .end((res, err) => {
        if (err) return;
        debugger;
        AppDispatcher.dispatch({
          type: DriverActionTypes.ADD_DRIVER,
          params,
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

  startEditingDriver(id) {
    AppDispatcher.dispatch({
      type: DriverActionTypes.START_EDITING_DRIVER,
      id,
    });
  },

  stopEditingDriver() {
    AppDispatcher.dispatch({
      type: DriverActionTypes.STOP_EDITING_DRIVER,
    });
  },

  updateDraft(params) {
    AppDispatcher.dispatch({
      type: DriverActionTypes.UPDATE_DRAFT,
      params,
    });
  },
};

export default Actions;
