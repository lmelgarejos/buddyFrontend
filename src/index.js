import React from 'react';
import ReactDOM from 'react-dom';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
import theme from './toolbox/theme';
import './index.css';
import App from './containers/AppContainer';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <ThemeProvider theme={theme}>
  <App />
  </ThemeProvider>,
  document.getElementById('root')
);
registerServiceWorker();
