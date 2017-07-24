'use strict';

// import AppView from '../views/AppView';
import {Container} from 'flux/utils';
import PassengerActions from '../data/PassengerActions';
import PassengerEditStore from '../data/PassengerEditStore';
import PassengerStore from '../data/PassengerStore';
import App from '../App';



function getStores() {
  return [
    PassengerEditStore,
    PassengerStore,
  ];
}

function getState() {
  return {
    editing: PassengerEditStore.getState(),
    passengers: PassengerStore.getState(),

    onAdd: PassengerActions.addPassenger,
    onDeletePassenger: PassengerActions.deletePassenger,
    onEditPassenger: PassengerActions.editPassenger,
    onStartEditingPassenger: PassengerActions.startEditingPassenger,
    onStopEditingPassenger: PassengerActions.stopEditingPassenger,
  };
}

export default Container.createFunctional(App, getStores, getState);
