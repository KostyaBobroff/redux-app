import {normalizeProducts} from './normalize'
export const PRODUCTS_INIT = 'PRODUCT_INIT';
export const PRODUCTS_ISLOADING = 'PRODUCTS_ISLOADING';


export const productsInitAction = (products) => ({
  type: PRODUCTS_INIT,
  payload: products
});

export const productsIsLoading = (isLoading) => ({
  type: PRODUCTS_ISLOADING,
  payload: isLoading
});

export const fetchProducts = () => async (dispatch, getState) => {

  dispatch(productsIsLoading(false));
  const response = await fetch('http://localhost:3001/products');
  const json = await response.json();

  const normalizedData = normalizeProducts(json.products);

  dispatch(productsInitAction(normalizedData));
  dispatch(productsIsLoading(false));
}



