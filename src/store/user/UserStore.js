import {action, observable} from 'mobx';

export class UserStore {
  rootStore = null;
  @observable isLoding = false;
  @observable name = '';
  @observable email = '';
  @observable img = '';

  constructor(rootStore) {
    this.rootStore = rootStore
  }

  @action.bound
  async init() {
    this.isLoding = true;

    const response = await fetch('http://localhost:3001/user');
    const {name, img, email} = await response.json();

    this.name = name;
    this.email = email;
    this.img = img;
    this.isLoding = false
  }
}

export default UserStore;