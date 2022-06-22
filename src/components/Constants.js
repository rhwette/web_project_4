export const ESC_KEYCODE = 27;

export const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg",
  },
];

export const selectors = {
  cardSection: "card-grid__format",
  // cardTemplate: "#myTemplate",
  cardTemplate: "myTemplate",
  previewPopup: "#image-popup-container",
  // previewPopup: "popup",
  // previewPopup: "image-popup",
  // previewPopup: "image-popup__picture-zoom",
  // or use an id instead
};
console.log("000 CONSTANTS.JS selectors", selectors);
