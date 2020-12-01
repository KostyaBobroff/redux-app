import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import productsReducer from './products';
import userReducer from './user';

const rootReducer = combineReducers({
  user: userReducer,
  products: productsReducer
});

const middleware = [
  thunk
];

const isDevelopment = process.env.NODE_ENV !== 'production';

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(...middleware),
  )
);

export default store;