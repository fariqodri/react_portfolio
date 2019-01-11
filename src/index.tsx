import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './layouts/App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
// import configureStore from "./configureStore"
import { AppState, configureStore } from './store';

const initialState: AppState = {
  nameVisibility: {
    isNameVisible: true
  }, 
  drawer: {
    isDrawerOpen: false
  }
}

const store = configureStore(initialState)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();