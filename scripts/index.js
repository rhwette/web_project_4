import FormValidator from "./FormValidator.js";
import Card from "./Card.js";
import { openPopup, closePopup } from "./Utils.js";

//-----------------------------------------------
// associate Buttons, Popups and Elements with classes or ID's
//    buttonPencil = button to activate "Edit Profile" popup
//    buttonPlus = button that activates "New Place" popup
//    buttonCan = garbage can icon
//    buttonHeart = "like" icon

// turn off
//    buttonEditProfileSave = the 'SAVE' button on "Edit Profile" popup
// turn off
// turn off
//    buttonNewPlaceCreate = the 'Create' button on 'New Place' popup
// turn off

//    buttonEditProfileClose = 'big X' on 'EditProfile' popup
//    buttonNewPlaceClose = 'big X' on 'New Place' popup
//    buttonZoomPicClose = 'big X' on 'Zoom Pic' popup
//    popupEditProfile = "Edit Profile" popup
//    popupEditProfileName = "Edit Profile" popup name
//    popupEditProfileAboutMe = "Edit Profile" popup aboutMe
//    popupNewPlace = "New Place" popup
//    popupNewPlaceLink = "New Place" popup URL
//    popupNewPlaceTitle = "New Place" popup location
//    nameElement = starting name on "EditProfile" popup
//    aboutMeElement = starting aboutMe on "EditProfile" popup
// turn off
//    zoomElement = card that is zoomed-up
// turn off
//    cardElement = clone of card object
// turn off
//    imageElement =image used in Zoom and in createCard
// turn off
//    containerElementPerson = containerElement for "Edit Profile"
//    containerElementPicture = containerElement for "New Place"
//    containerElementImage = containerElement for "Zoom Pic"
// turn off
// const cardTemplate = document.querySelector("#myTemplate");
// turn off
//    closeButtons = one of the three buttons that close a form or a zoom pic
const buttonPencil = document.querySelector(".intro__button-pencil");
const buttonPlus = document.querySelector(".intro__button-plus");
// const buttonEditProfileSave = document.querySelector("#buttonEditProfileSave");
// const buttonNewPlaceCreate = document.querySelector("#buttonNewPlaceCreate");
const buttonEditProfileClose = document.querySelector(
  "#buttonEditProfileClose"
);
const buttonNewPlaceClose = document.querySelector("#buttonNewPlaceClose");
const buttonZoomPicClose = document.querySelector("#buttonZoomPicClose");
const popupEditProfile = document.querySelector("#editProfileForm");
const popupEditProfileName = document.querySelector('input[name ="name"]');
const popupEditProfileAboutMe = document.querySelector(
  'input[name = "aboutme"]'
);
const popupNewPlace = document.querySelector("#newPlaceForm");

// const popupNewPlaceAlt = document.querySelector("#picture-popup-container");

const popupNewPlaceLink = document.querySelector("#link-input");
const popupNewPlaceTitle = document.querySelector("#place-input");
const nameElement = document.querySelector(".intro__name");
const aboutMeElement = document.querySelector(".intro__occupation");
// const zoomElement = document.querySelector("#image-zoom");
// const imageElement = cardTemplate.content.querySelector("img");
const containerElementPerson = document.querySelector(
  "#person-popup-container"
);
const containerElementPicture = document.querySelector(
  "#picture-popup-container"
);
const containerElementImage = document.querySelector("#image-popup-container");
const containerForImages = document.querySelector(".card-grid__format");
const closeButtons = document.querySelectorAll(
  ".popup__container_button-close"
);

//  ARRAY of OBJECTS containing image links
const initialCards = [
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

//************************************* */
//  FUNCTION - render Card
//************************************* */
const renderCard = (data, container) => {
  const cardElement = new Card(data, "#myTemplate").createCard();
  container.prepend(cardElement);
};

//-----------------------------------------------
//  Render INITIAL CARDS using renderCard function
//    use i-- to reverse order of images
//-----------------------------------------------
for (let i = initialCards.length - 1; i >= 0; i--) {
  const currentCard = initialCards[i];
  renderCard(currentCard, containerForImages);
}

//-----------------------------------------------
//  FUNCTION 'openPopupEditProfile'
//-----------------------------------------------
function openPopupEditProfile() {
  fillPopupEditProfile();
  openPopup(containerElementPerson);
}

//-----------------------------------------------
//  FUNCTION 'fillPopupEditProfile'
//-----------------------------------------------
function fillPopupEditProfile() {
  popupEditProfileName.value = nameElement.textContent;
  popupEditProfileAboutMe.value = aboutMeElement.textContent;
}

//-----------------------------------------------
//  FUNCTION 'submitPopupEditProfile'
//-----------------------------------------------
function submitPopupEditProfile(evtSave) {
  evtSave.preventDefault();
  nameElement.textContent = popupEditProfileName.value;
  aboutMeElement.textContent = popupEditProfileAboutMe.value;
  closePopup(containerElementPerson);
}

//-----------------------------------------------
//  FUNCTION 'closePopupEditProfile'
//-----------------------------------------------
function closePopupEditProfile() {
  closePopup(containerElementPerson);
}

//-----------------------------------------------
//  FUNCTION 'closePopupZoom'
//-----------------------------------------------
function closePopupZoom() {
  closePopup(containerElementImage);
}

//-----------------------------------------------
//  FUNCTION 'openPopupAddCard'
//-----------------------------------------------
function openPopupAddCard(evtNewPlace) {
  popupNewPlace.reset();
  // the following 2 lines will disable the "create' button
  // const buttonNewPlaceCreate = document.querySelector("#buttonNewPlaceCreate");
  // buttonNewPlaceCreate.disabled = true;
  openPopup(containerElementPicture);
}

//-----------------------------------------------
//  FUNCTION 'submitPopupNewPlace'
//-----------------------------------------------
function submitPopupNewPlace(evtCreate) {
  evtCreate.preventDefault();
  const newCardInfo = {};
  newCardInfo.name = popupNewPlaceTitle.value;
  newCardInfo.link = popupNewPlaceLink.value;
  renderCard(newCardInfo, containerForImages);
  closePopupAddCard();
}

//-----------------------------------------------
//  FUNCTION 'closePopupAddCard'
//-----------------------------------------------
function closePopupAddCard() {
  closePopup(containerElementPicture);
}

//-----------------------------------------------
//  LISTEN - click on big X zoomPic
//-----------------------------------------------
// buttonZoomPicClose.addEventListener("click", closePopupZoom);

//-----------------------------------------------
//  LISTEN - click on big X 'editProfile' form
//-----------------------------------------------
// buttonEditProfileClose.addEventListener("click", closePopupEditProfile);

//-----------------------------------------------
//  LISTEN - click on big X 'newPlace' form
//-----------------------------------------------
// buttonNewPlaceClose.addEventListener("click", closePopupAddCard);

//-----------------------------------------------
//  LISTEN - click on big X on editProfile, on newPlace, on zoomPic forms
//-----------------------------------------------

closeButtons.forEach((button) => {
  const closestPopup = button.closest(".popup");
  button.addEventListener("click", () => closePopup(closestPopup));
});

//-----------------------------------------------
//  LISTEN for clicks on introButtonPencil
//-----------------------------------------------
buttonPencil.addEventListener("click", openPopupEditProfile);

//-----------------------------------------------
//  LISTEN for clicks on buttonEditProfileSave
//-----------------------------------------------
popupEditProfile.addEventListener("submit", submitPopupEditProfile);

//-----------------------------------------------
//  LISTEN for clicks on introButtonPlus
//-----------------------------------------------
buttonPlus.addEventListener("click", openPopupAddCard);

//-----------------------------------------------
//  LISTEN for clicks on buttonNewPlaceCreate
//-----------------------------------------------
popupNewPlace.addEventListener("submit", submitPopupNewPlace);

//-----------------------------------------------
//  VALIDATION
//-----------------------------------------------
const validationSettings = {
  inputSelector: ".popup__container_input",
  submitButtonSelector: ".popup__container_button",
  inactiveButtonClass: "popup__container_button-disabled",
  inputErrorClass: "popup__container_input_type-error",
  errorClass: "popup__container_error-visible",
};

const editFormElement = containerElementPerson.querySelector(".popup__form");
const addFormElement = containerElementPicture.querySelector(".popup__form");
const editFormValidator = new FormValidator(
  validationSettings,
  editFormElement
);
editFormValidator.enableValidation();
const addFormValidator = new FormValidator(validationSettings, addFormElement);
addFormValidator.enableValidation();
