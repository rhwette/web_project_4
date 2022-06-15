// FROM PLATFORM
export default class Section {
  constructor({ data }, containerSelector) {
    this._initialArray = data;
    this._container = document.querySelector(containerSelector);
  }

  renderItems(item) {
    this._initialArray.forEach((item) => {
      const cardElement = card.createCard();
      this._addItemToDom(cardElement);
    });
  }

  addItemToDom(element) {
    this._container.append(element);
  }
}

// //  AJ VERSION
// export default class Section {
//   constructor({ renderer, selector }) {
//     this._renderer = renderer;
//     this._element = document.querySelector(`${selector}`);
//     console.log("selector =", selector);
//     console.log("this._element =", this._element);
//   }

//   // use this.renderer to create the elements for rendering
//   renderItems(data) {
//     this._element.forEach((data) => {
//       const cardElement = card.generateCard();
//       this.addItem(cardElement);
//     });
//   }
//   addItem(item) {
//     // take the item and render it into this._element
//     this._container.append(element);
//   }
// }
