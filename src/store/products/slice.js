import {createSlice } from '@reduxjs/toolkit';
import {normalizeProducts} from "./normalize";


const initialState = {
  entities: {},
  order: [],
  isLoading: false
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    init: (state, action) => {
      state.entities = action.payload.entities;
      state.order = action.payload.order;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload
    }
  }
});

export const fetchProducts = () => async (dispatch, getState) => {

  dispatch(productsSlice.actions.setIsLoading(false));
  const response = await fetch('http://localhost:3001/products');
  const json = await response.json();

  const normalizedData = normalizeProducts(json.products);

  dispatch(productsSlice.actions.init(normalizedData));
  dispatch(productsSlice.actions.setIsLoading(false));
}

export const actions = {
  ...productsSlice.actions,
  fetchProducts
}

export const reducer = productsSlice.reducer;