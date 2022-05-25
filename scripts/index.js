import FormValidator from "./FormValidator.js";
import Card from "./Card.js";
import Utils from "./Utils.js";
// import {openPopup}  from "./Utils.js";

//-----------------------------------------------
// associate Buttons, Popups and Elements with classes or ID's
//    buttonPencil = button to activate "Edit Profile" popup
//    buttonPlus = button that activates "New Place" popup
//    buttonCan = garbage can icon
//    buttonHeart = "like" icon
//    buttonEditProfileSave = the 'SAVE' button on "Edit Profile" popup
//    buttonNewPlaceCreate = the 'Create' button on 'New Place' popup
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
//    zoomElement = card that is zoomed-up
//    cardElement = clone of card object
//    imageElement =image used in Zoom and in createCard
//    containerElementPerson = containerElement for "Edit Profile"
//    containerElementPicture = containerElement for "New Place"
//    containerElementImage = containerElement for "Zoom Pic"

const cardTemplate = document.querySelector("#myTemplate");
const buttonPencil = document.querySelector(".intro__button-pencil");
const buttonPlus = document.querySelector(".intro__button-plus");
const buttonEditProfileSave = document.querySelector("#buttonEditProfileSave");
const buttonNewPlaceCreate = document.querySelector("#buttonNewPlaceCreate");
const buttonEditProfileClose = document.querySelector(
  "#buttonEditProfileClose"
);
const buttonNewPlaceClose = document.querySelector("#buttonNewPlaceClose");
// const buttonZoomPicClose = document.querySelector("#buttonZoomPicClose");
const popupEditProfile = document.querySelector("#editProfileForm");
const popupEditProfileName = document.querySelector('input[name ="name"]');
const popupEditProfileAboutMe = document.querySelector(
  'input[name = "aboutme"]'
);
const popupNewPlace = document.querySelector("#newPlaceForm");

const popupNewPlaceAlt = document.querySelector("#picture-popup-container");

const popupNewPlaceLink = document.querySelector("#link-input");
const popupNewPlaceTitle = document.querySelector("#place-input");
const nameElement = document.querySelector(".intro__name");
const aboutMeElement = document.querySelector(".intro__occupation");
const zoomElement = document.querySelector("#image-zoom");
const imageElement = cardTemplate.content.querySelector("img");
const containerElementPerson = document.querySelector(
  "#person-popup-container"
);
const containerElementPicture = document.querySelector(
  "#picture-popup-container"
);
const containerElementImage = document.querySelector("#image-popup-container");
const containerForImages = document.querySelector(".card-grid__format");

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
//  FUNCTION 'openPopup'
//-----------------------------------------------
function openPopup(containerElement) {
  console.log("99a INDEX.JS FUNCTION OPENPOPUP");
  console.log(
    "99b INDEX.JS FUNCTION OPENPOPUP - containerElement =",
    containerElement
  );
  containerElement.classList.add("popup-container_visible");
  console.log(
    "99c INDEX.JS FUNCTION OPENPOPUP - containerElement =",
    containerElement
  );
  console.log("99d INDEX.JS FUNCTION OPENPOPUP - LISTEN FOR ESCAPE =");

  containerElement.addEventListener("mousedown", closePopupWithRemoteClick);
  document.addEventListener("keydown", closePopupWithEscape);
  console.log(
    "99e INDEX.JS FUNCTION OPENPOPUP - containerElement =",
    containerElement
  );
}

//-----------------------------------------------
//  FUNCTION 'closePopup'
//-----------------------------------------------
function closePopup(containerElement) {
  console.log(
    "AAAA INDEX.JS FUNCTION CLOSEPOPUP - containerElement =",
    containerElement
  );
  containerElement.classList.remove("popup-container_visible");
  console.log(
    "BBBB INDEX.JS FUNCTION CLOSEPOPUP - containerElement.classList =",
    containerElement.classList
  );
  containerElement.removeEventListener("mousedown", closePopupWithRemoteClick);
  document.removeEventListener("keydown", closePopupWithEscape);
}

//-----------------------------------------------
//  FUNCTION 'closePopupWithEscape'
//-----------------------------------------------
function closePopupWithEscape(event) {
  console.log("222 Index JS FUNCTION CLOSEPOPUPWITHESCAPE");
  if (event.key === "Escape") {
    console.log("222b event.key", event.key);
    const openedPopup = document.querySelector(".popup-container_visible");
    console.log("222d openedPopup", openedPopup);
    if (openedPopup) {
      closePopup(openedPopup);
    }
  }
}

//-----------------------------------------------
//  FUNCTION 'closePopupWithRemoteClick'
//-----------------------------------------------
function closePopupWithRemoteClick(event) {
  if (event.target === event.currentTarget) {
    closePopup(event.target);
  }
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
//  FUNCTION 'openPopupAddCard'
//-----------------------------------------------
function openPopupAddCard(evtNewPlace) {
  console.log("66a INDEX.JS FUNCTION OPENPOPUPADDCARD");
  console.log(
    "66b INDEX.JS FUNCTION OPENPOPUPADDCARD - popupNewPlace =",
    popupNewPlace
  );

  popupNewPlace.reset();
  openPopup(containerElementPicture);
  console.log(
    "66c INDEX.JS FUNCTION OPENPOPUPADDCARD - popupNewPlace =",
    popupNewPlace
  );
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
//  LISTEN for clicks on introButtonPencil
//-----------------------------------------------
buttonPencil.addEventListener("click", openPopupEditProfile);

//-----------------------------------------------
//  LISTEN for clicks on buttonEditProfileSave
//-----------------------------------------------
popupEditProfile.addEventListener("submit", submitPopupEditProfile);

//-----------------------------------------------
//  LISTEN - click on big X 'editProfile' form
//-----------------------------------------------
buttonEditProfileClose.addEventListener("click", closePopupEditProfile);
//
//-----------------------------------------------
//  LISTEN for clicks on introButtonPlus
//-----------------------------------------------
buttonPlus.addEventListener("click", openPopupAddCard);

//-----------------------------------------------
//  LISTEN for clicks on buttonNewPlaceCreate
//-----------------------------------------------
popupNewPlace.addEventListener("submit", submitPopupNewPlace);

//-----------------------------------------------
//  LISTEN - click on big X 'newPlace' form
//-----------------------------------------------
buttonNewPlaceClose.addEventListener("click", closePopupAddCard);

//-----------------------------------------------
//  VALIDATION
//-----------------------------------------------
const validationSettings = {
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
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
