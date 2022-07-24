import "./index.css";
import { initialCards, selectors } from "../utils/constants";
import Card from "../components/Card";
import Section from "../components/Section";
import PopupWithImage from "../components/PopupWithImage";
import FormValidator from "../components/FormValidator";
import PopupWithForm from "../components/PopupWithForm";
import UserInfo from "../components/UserInfo";

const nameElement = document.querySelector(".intro__name");
const aboutMeElement = document.querySelector(".intro__occupation");
const popupEditProfileName = document.querySelector('input[name ="name"]');
const popupEditProfileAboutMe = document.querySelector(
  'input[name = "aboutme"]'
);

const popupNewPlaceLink = document.querySelector("#link-input");
const popupNewPlaceTitle = document.querySelector("#place-input");
const containerElementPerson = document.querySelector(
  "#person-popup-container"
);
const containerElementPicture = document.querySelector(
  "#picture-popup-container"
);
const popupElement = document.querySelector(".popup__container");
const containerForImages = document.querySelector(".card-grid__format");

const newCardPopup = new PopupWithImage(selectors.previewPopup);

// create a renderCard method and then use in 3 places below
// rewrite below using a renderCard method
const renderCard = (data) => {
  const cardElement = new Card(
    {
      data,
      handleZoom: () => {
        newCardPopup.open(data);
      },
    },
    selectors.cardTemplate
  );
  // container.prepend(cardElement.createCard());
  cardsSection.addItem(cardElement.createCard());
};

const cardsSection = new Section(
  {
    data: initialCards,
    renderer: renderCard,
    // renderer: (data) => {
    //   const cardElement = new Card(
    //     {
    //       data,
    //       handleZoom: () => {
    //         imageZoomPopup.open(data);
    //       },
    //     },
    //     selectors.cardTemplate
    //   );
    //   cardsSection.addItem(cardElement.createCard());
    // },
  },
  selectors.cardSection
);

const imageZoomPopup = new PopupWithImage(selectors.previewPopup);
console.log("imageZoomPopup=", imageZoomPopup);

// use renderCard method here also
const newPlacePopup = new PopupWithForm({
  popupSelector: selectors.placePopup,
  handleFormSubmit: () => {
    const newCardInfo = newPlacePopup._getInputValues();
    // formValidators["formNewPlace"].resetValidation();
    // newCardInfo.name = popupNewPlaceTitle.value;
    // newCardInfo.link = popupNewPlaceLink.value;
    renderCard(newCardInfo);
    newPlacePopup.close();
  },
});

const editProfilePopup = new PopupWithForm({
  popupSelector: selectors.profilePopup,
  handleFormSubmit: () => {
    // evtSave.preventDefault();
    editProfilePopup.close();
  },
});

// const renderCard = (data, container) => {
//   const cardElement = new Card(
//     {
//       data,
//       handleZoom: () => {
//         newCardPopup.open(data);
//       },
//     },
//     selectors.cardTemplate
//   );
//   container.prepend(cardElement.createCard());
// };

cardsSection.renderItems(initialCards);
imageZoomPopup.setEventListeners();
newPlacePopup.setEventListeners();
editProfilePopup.setEventListeners();

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
