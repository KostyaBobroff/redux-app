import {observable, action, get, computed} from "mobx";
import {normalizeProducts} from "./normalize";
import {ProductModel} from "../models/ProductModel";

class ProductsStore {
  @observable productEntities = {};
  @observable productOrder = []
  @observable isLoading = false;

  rootStore = null;

  constructor(rootStore) {
    this.rootStore = rootStore
  }

  @action.bound
  async init() {
    this.isLoading = true;
    const response = await fetch('http://localhost:3001/products');
    const json = await response.json();

    const {entities, order} = normalizeProducts(json.products);

    this.productEntities = order.reduce((accum, id) => ({
      ...accum,
      [id]: ProductModel.fromJSON(entities[id])
    }), {});

    this.productOrder = order;
    this.isLoading = false;
  }

  @computed
  get products() {
    return this.productOrder.map(id => this.productEntities[id]);
  }

}

export default ProductsStore