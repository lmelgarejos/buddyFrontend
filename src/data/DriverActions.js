'use strict';

import DriverActionTypes from './DriverActionTypes';
import AppDispatcher from './AppDispatcher';

const Actions = {
  addDriver(params) {
    AppDispatcher.dispatch({
      type: DriverActionTypes.ADD_DRIVER,
      params,
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
