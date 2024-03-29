// src/store/index.js
import { createStore, combineReducers } from 'redux';
import clickReducer from '../reducer';

const rootReducer = combineReducers({ clickReducer });

const store = createStore(rootReducer);

export default store;
