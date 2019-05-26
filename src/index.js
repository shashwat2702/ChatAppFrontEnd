import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';
import Router from './router/index';
import * as serviceWorker from './serviceWorker';
import store from './redux/store';

const reduxStore = store();

ReactDOM.render(
  <div>
    <Provider store={reduxStore}>
      <HashRouter>
        <Router />
      </HashRouter>
    </Provider>
  </div>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
