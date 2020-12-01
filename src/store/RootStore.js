import UserStore from "./user/UserStore";
import ProductsStore from "./products/ProductsStore";
import {action} from "mobx";


class RootStore {
  userStore = new UserStore(this);
  productStore = new ProductsStore(this);

  @action.bound
  async init() {
    await Promise.all([
      this.userStore.init(),
      this.productStore.init
    ]);
  }
}

export default new RootStore();