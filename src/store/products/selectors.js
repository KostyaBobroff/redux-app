export const getProducts = (state) => ({
  entities: state.products.entities,
  isLoading: state.products.isLoading,
  order: state.products.order
});