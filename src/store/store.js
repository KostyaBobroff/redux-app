import { combineReducers } from 'redux';

import {configureStore} from '@reduxjs/toolkit';

import * as products from './products';
import * as user from './user';

const rootReducer = combineReducers({
  user: user.reducer,
  products: products.reducer
});

const store = configureStore({
  reducer: rootReducer,
  devTools: true
})

export default store;