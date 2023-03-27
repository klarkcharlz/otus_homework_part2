//import rootReducer from './reducers';
//import { applyMiddleware, createStore } from 'redux';
//import thunkMiddleware from 'redux-thunk';
//
//const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));


import { applyMiddleware, createStore } from 'redux';
import rootReducer from './reducers';

const localStorageMiddleware = store => next => action => {
  const result = next(action);
  localStorage.setItem('state', JSON.stringify(store.getState()));
  return result;
};

const initialState = localStorage.getItem('state')
  ? JSON.parse(localStorage.getItem('state'))
    : {};
  
const store = createStore(rootReducer, initialState, applyMiddleware(localStorageMiddleware));

export default store;