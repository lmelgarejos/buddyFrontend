'use strict';

import AppView from '../views/AppView';
import {Container} from 'flux/utils';
import DriverActions from '../data/DriverActions';
import DriverDraftStore from '../data/DriverDraftStore';
import DriverEditStore from '../data/DriverEditStore';
import DriverStore from '../data/DriverStore';

function getStores() {
  return [
    DriverEditStore,
    DriverDraftStore,
    DriverStore,
  ];
}

function getState() {
  return {
    draft: DriverDraftStore.getState(),
    editing: DriverEditStore.getState(),
    todos: DriverStore.getState(),

    onAdd: DriverActions.addDriver,
    onDeleteDriver: DriverActions.deleteDriver,
    onEditDriver: DriverActions.editDriver,
    onStartEditingDriver: DriverActions.startEditingDriver,
    onStopEditingDriver: DriverActions.stopEditingDriver,
    onToggleAllDrivers: DriverActions.toggleAllDrivers,
    onToggleDriver: DriverActions.toggleDriver,
    onUpdateDraft: DriverActions.updateDraft,
  };
}

export default Container.createFunctional(AppView, getStores, getState);
