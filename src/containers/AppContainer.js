'use strict';

import AppView from '../views/AppView';
import {Container} from 'flux/utils';
import DriverActions from '../data/DriverActions';
import DriverDraftStore from '../data/DriverDraftStore';
import DriverEditStore from '../data/DriverEditStore';
import DriverStore from '../data/DriverStore';
import SessionStore from '../data/SessionStore';

function getStores() {
  return [
    DriverEditStore,
    DriverDraftStore,
    DriverStore,
    SessionStore,
  ];
}

function getState() {
  return {
    draft: DriverDraftStore.getState(),
    editing: DriverEditStore.getState(),
    drivers: DriverStore.getState(),
    loggedIn: SessionStore.getState().get('loggedIn'),

    onAdd: DriverActions.addDriver,
    onDeleteDriver: DriverActions.deleteDriver,
    onEditDriver: DriverActions.editDriver,
    onStartEditingDriver: DriverActions.startEditingDriver,
    onStopEditingDriver: DriverActions.stopEditingDriver, 
  };
}

export default Container.createFunctional(AppView, getStores, getState);
