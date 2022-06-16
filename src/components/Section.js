import { initialCards, selectors } from "../components/constants";

export default class Section {
  constructor({ data, renderer }, containerSelector) {
    this._renderedItems = data;
    this._renderer = renderer;
    this._container = document.querySelector(`.${containerSelector}`);
    console.log("222 SECTION.JS this._renderedItems=", this._renderedItems);
    console.log("222 SECTION.JS this._renderer=", this._renderer);
    console.log("222 SECTION.JS containerSelector=", `.${containerSelector}`);
    console.log("222 SECTION.JS this._container=", this._container);
  }

  renderItems() {
    this._renderedItems.forEach(this._renderer);
    // const cardElement = createCard();
    // this._addItem(cardElement);

    console.log(
      "333 SECTION.JS FUNCTION RENDERITEMS renderedItems =",
      this._renderedItems
    );
    console.log(
      "333 SECTION.JS FUNCTION RENDERITEMS this._renderer =",
      this._renderer
    );
  }

  addItem(item) {
    // console.log("444 SECTION.JS FUNCTION ADDITEM item =", item);
    // console.log(
    //   "444 SECTION.JS FUNCTION ADDITEM this._container =",
    //   this._container
    // );
    this._container.append(item);
  }
}
