import React from 'react';
import ReactDOM from 'react-dom';
// import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
// import theme from './toolbox/theme';
import './index.css';
import App from './containers/AppContainer';
import registerServiceWorker from './registerServiceWorker';
import QueryString from 'query-string';
import SessionActions from './data/SessionActions';
import DriverActions from './data/DriverActions';


window.DriverActions = DriverActions;

const query = QueryString.parse(window.location.search);

if (query.token) {
  SessionActions.setLoggedIn();
  window.buddy = window.buddy || {};
  window.buddy.token = query.token;
}


ReactDOM.render(
  // <div></div>,
  // <ThemeProvider theme={theme}>
  <App />,
  // </ThemeProvider>,
  document.getElementById('root')
);
registerServiceWorker();
