export const normalizeProducts = (products) => {
  const collection = {};
  const order = [];

  products.forEach((elem) => {
    collection[elem.id] = elem;
    order.push(elem.id)
  })

  return {
    entities: collection,
    order
  }
}