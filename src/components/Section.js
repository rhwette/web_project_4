// import { initialCards, selectors } from "../components/constants";

export default class Section {
  constructor({ data, renderer }, containerSelector) {
    this._renderedItems = data;
    this._renderer = renderer;
    this._container = document.querySelector(`.${containerSelector}`);
  }

  renderItems() {
    this._renderedItems.forEach(this._renderer);
    // const cardElement = createCard();
    // this._addItem(cardElement);
  }

  addItem(item) {
    this._container.append(item);
  }
}
