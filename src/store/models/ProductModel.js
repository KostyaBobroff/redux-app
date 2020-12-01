import {observable} from "mobx";

export class ProductModel {
  @observable title;
  @observable price;
  @observable img;
  @observable id;

  constructor({title, price, img, id}) {
    this.id = id;
    this.price = price;
    this.img = img;
    this.title = title;
  }

  static fromJSON(json) {
    return new ProductModel(json)
  }
}