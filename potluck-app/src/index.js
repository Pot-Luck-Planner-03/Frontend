import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { potluckReducer } from '../src/Reducers/PotluckReducer';

const store = createStore(potluckReducer, applyMiddleware(logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);