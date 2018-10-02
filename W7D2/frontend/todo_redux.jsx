import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { applyMiddleware } from 'redux';

import Root from './components/root';

// const addLoggingToDispatch = store => {
//   const dispatch = store.dispatch;
//   return action => {
//     console.log('Prev state:', store.getState());
//     console.log('Action:', action);
//     dispatch(action);
//     console.log('Next state:', store.getState());
//   };
// };

// const addLoggingToDispatch = store => next => action => {
//   console.log('Prev state:', store.getState());
//   console.log('Action:', action);
//   next(action);
//   console.log('Next state:', store.getState());
// };

// function applyMiddlewares(store, ...middlewares) {
//   let dispatch = store.dispatch;
//   middlewares.forEach(middleware => {
//     dispatch = middleware(store)(dispatch);
//   });
//   return Object.assign({}, store, { dispatch });
// }

document.addEventListener('DOMContentLoaded', () => {
  const preloadedState = localStorage.state ?
    JSON.parse(localStorage.state) : {};
  let store = configureStore(preloadedState);
  // store.dispatch = addLoggingToDispatch(store);
  // store = applyMiddlewares(store, addLoggingToDispatch);

  const root = document.getElementById('content');
  ReactDOM.render(<Root store={store} />, root);
});
