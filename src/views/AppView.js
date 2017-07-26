'use strict';

import React from 'react';
import classnames from 'classnames';

function AppView(props) {
  return (
    <div>
      <Header {...props} />
      <Main {...props} />
      <Footer {...props} />
    </div>
  );
}

function Header(props) {
  return (
    <header id="header">
      <h1>drivers</h1>
      <NewDriver {...props} />
    </header>
  );
}

function Main(props) {
  if (props.drivers.size === 0) {
    return null;
  }


  return (
    <section id="main">
      <ul id="driver-list">
        {[...props.drivers.values()].reverse().map(driver => (
          <DriverItem
            key={driver.id}
            editing={props.editing}
            driver={driver}
            onDeleteDriver={props.onDeleteDriver}
            onEditDriver={props.onEditDriver}
            onStartEditingDriver={props.onStartEditingDriver}
            onStopEditingDriver={props.onStopEditingDriver}
          />
        ))}
      </ul>
    </section>
  );
}

function Footer(props) {
  if (props.drivers.size === 0) {
    return null;
  }

  // const remaining = props.drivers.filter(driver => !driver.complete).size;
  // const completed = props.drivers.size - remaining;
  // const phrase = remaining === 1 ? ' item left' : ' items left';

  // let clearCompletedButton = null;
  // if (completed > 0) {
  //   clearCompletedButton =
  //     <button
  //       id="clear-completed"
  //       onClick={props.onDeleteCompletedDrivers}>
  //       Clear completed ({completed})
  //     </button>
  // }
  //
  // return (
  //   <footer id="footer">
  //     <span id="driver-count">
  //       <strong>
  //         {remaining}
  //       </strong>
  //       {phrase}
  //     </span>
  //     {clearCompletedButton}
  //   </footer>
  // );
}

const ENTER_KEY_CODE = 13;
function NewDriver(props) {
  const addDriver = () => props.onAdd(props.draft);
  const onBlur = () => addDriver();
  const onChange = (event) => props.onUpdateDraft(event.target.value);
  const onKeyDown = (event) => {
    if (event.keyCode === ENTER_KEY_CODE) {
      addDriver();
    }
  };
  return (
    <input
      autoFocus={true}
      id="new-driver"
      placeholder="Fill the params"
      value={props.draft}
      onBlur={onBlur}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  );
}

function DriverItem(props) {
  const {editing, driver} = props;
  const isEditing = editing === driver.id;
  const onDeleteDriver = () => props.onDeleteDriver(driver.id);
  const onStartEditingDriver = () => props.onStartEditingDriver(driver.id);
  const onToggleDriver = () => props.onToggleDriver(driver.id);

  // Construct the input for editing a task if necessary.
  let input = null;
  if (isEditing) {
    const onChange = (event) => props.onEditDriver(driver.id, event.target.value);
    const onStopEditingDriver = props.onStopEditingDriver;
    const onKeyDown = (event) => {
      if (event.keyCode === ENTER_KEY_CODE) {
        onStopEditingDriver();
      }
    };
    input =
      <input
        autoFocus={true}
        className="edit"
        value={driver.text}
        onBlur={onStopEditingDriver}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />;
  }

  return (
    <li
      className={classnames({
        completed: driver.complete,
        editing: isEditing,
      })}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={driver.complete}
          onChange={onToggleDriver}
        />
        <label onDoubleClick={onStartEditingDriver}>
          {driver.text}
        </label>
        <button className="destroy" onClick={onDeleteDriver} />
      </div>
      {input}
    </li>
  );
}


export default AppView;
