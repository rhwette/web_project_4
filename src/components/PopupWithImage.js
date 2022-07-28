import Popup from "./Popup";
//FEEDBACK PWI  Line 2... remove the two consts below
//  they are not used in PWI
// const buttonPencil = document.querySelector(".intro__button-pencil");
// const buttonPlus = document.querySelector(".intro__button-plus");

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    //FEEDBACK PWI line7 suggested...no need to override methods if no new functionality
    //  i tried removing the super below but causes images to not disply
    //  so leave it in.......not sure what the reviewer is asking for
    super(popupSelector);
    //FEEDBACK PWI line 12 .. save element in constructor then reuse them
    this.image = this._popupElement.querySelector(".image-popup__picture-zoom");
  }
  open({ link, name }) {
    console.log("link=", link);
    console.log("name=", name);
    console.log("this._popupelement=", this._popupElement);
    //FEEDBACK PWI line 10 suggested..  better to put elements into variables first,
    //  then use them
    const imageName = this._popupElement.querySelector(
      ".image-popup__picture-text"
    );
    imageName.textContent = name;
    // this._popupElement.querySelector(".image-popup__picture-text").textContent =
    //   name;

    //FEEDBACK PWI line 12 .. save element in constructor then reuse them here
    // const image = this._popupElement.querySelector(
    //   ".image-popup__picture-zoom"
    // );
    console.log("image=", this.image);

    // image.src = link;
    // image.alt = ` ${name}`;

    this.image.src = link;
    //FEEDBACK PWI line 17...no need for extra space before name
    //  also the alt text should be more descritptive
    // this.image.alt = ` ${name}`;
    this.image.alt = `Photo of ${name}`;
    super.open();
  }
}
