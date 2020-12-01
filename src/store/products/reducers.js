import * as products from './actions';
import {act} from "@testing-library/react";

const initialState = {
  entities: {},
  order: [],
  isLoading: false
}


const actionsMap = {
  [products.PRODUCTS_INIT]: (state, action) => ({
    ...state,
    ...action.payload
  }),
  [products.PRODUCTS_ISLOADING]: (state, action) => ({
    ...state,
    isLoading: action.payload,
  })
}



export default (state = initialState, action = {}) => {
  const fn = actionsMap[action.type];
  return fn ? fn(state, action) : state;
}