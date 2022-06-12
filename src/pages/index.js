import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import { openPopup, closePopup } from "../components/Utils.js";
import "./index.css";

//-----------------------------------------------
// associate Buttons, Popups and Elements with classes or ID's
//    buttonPencil = button to activate "Edit Profile" popup
//    buttonPlus = button that activates "New Place" popup
//    buttonCan = garbage can icon
//    buttonHeart = "like" icon
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
//    cardElement = clone of card object
//    containerElementPerson = containerElement for "Edit Profile"
//    containerElementPicture = containerElement for "New Place"
//    containerElementImage = containerElement for "Zoom Pic"
//    closeButtons = one of the three buttons that close a form or a zoom pic
const buttonPencil = document.querySelector(".intro__button-pencil");
const buttonPlus = document.querySelector(".intro__button-plus");
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
const popupNewPlaceLink = document.querySelector("#link-input");
const popupNewPlaceTitle = document.querySelector("#place-input");
const nameElement = document.querySelector(".intro__name");
const aboutMeElement = document.querySelector(".intro__occupation");
const containerElementPerson = document.querySelector(
  "#person-popup-container"
);
const containerElementPicture = document.querySelector(
  "#picture-popup-container"
);
const containerElementImage = document.querySelector("#image-popup-container");
const containerForImages = document.querySelector(".card-grid__format");
const closeButtons = document.querySelectorAll(
  ".popup__container-button-close"
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
  formValidators["formEditProfile"].resetValidation();
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
//  FUNCTION 'openPopupAddCard'
//-----------------------------------------------
function openPopupAddCard(evtNewPlace) {
  popupNewPlace.reset();
  formValidators["formNewPlace"].resetValidation();
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

const config = {
  formSelector: ".popup__form",
  inputSelector: ".popup__container-input",
  submitButtonSelector: ".popup__container-button",
  inactiveButtonClass: "popup__container-button-disabled",
  inputErrorClass: "popup__container-input-type-error",
  errorClass: "popup__container-error-visible",
};

const formValidators = {};
const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formElement) => {
    const validator = new FormValidator(config, formElement);
    const formName = formElement.getAttribute("name");
    formValidators[formName] = validator;
    validator.enableValidation();
  });
};

enableValidation(config);
