import "./index.css";
// import all the classes
import { initialCards, selectors } from "../components/Constants";
import Card from "../components/Card";
import Section from "../components/Section";
import Popup from "../components/Popup";
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
console.log("popupElement=", popupElement);

const containerForImages = document.querySelector(".card-grid__format");
const newCardPopup = new PopupWithImage(selectors.placePopup);

const CardNew = new Section(
  {
    data: initialCards,
    renderer: (data) => {
      const cardElement = new Card(
        {
          data,
          handleZoom: () => {
            imageZoomPopup.open(data);
          },
        },
        selectors.cardTemplate
      );
      CardNew.addItem(cardElement.createCard());
    },
  },
  selectors.cardSection
);

const imageZoomPopup = new PopupWithImage(selectors.previewPopup);
// const editProfilePopup = new PopupWithForm({
//   popupSelector: selectors.profilePopup,
//   handleFormSubmit: () => {
//     console.log("test");
//   },
// });

const newPlacePopup = new PopupWithForm({
  popupSelector: selectors.placePopup,
  handleFormSubmit: () => {
    const newCardInfo = {};
    formValidators["formNewPlace"].resetValidation();
    newCardInfo.name = popupNewPlaceTitle.value;
    newCardInfo.link = popupNewPlaceLink.value;
    console.log("newCardInfo=", newCardInfo);
    console.log("test2");

    renderCard(newCardInfo, containerForImages);
    newPlacePopup.close();
  },
});

const editProfilePopup = new PopupWithForm({
  popupSelector: selectors.profilePopup,
  handleFormSubmit: (evtSave) => {
    evtSave.preventDefault();
    nameElement.textContent = popupEditProfileName.value;
    aboutMeElement.textContent = popupEditProfileAboutMe.value;
    console.log("popElement=", popupElement);
    console.log("this=", this);
    console.log("editProfilePopup=", editProfilePopup);
    editProfilePopup.close();
  },
});

//************************************* */
//  FUNCTION - render Card
//************************************* */

const renderCard = (data, container) => {
  console.log("data=", data);
  console.log("data.name=", data.name);
  console.log("data.link=", data.link);
  console.log("container=", container);
  const cardElement = new Card(
    {
      data,
      handleZoom: () => {
        newCardPopup.open(data);
      },
    },
    selectors.cardTemplate
  );
  console.log("cardElement=", cardElement);
  container.prepend(cardElement.createCard());
};

// draw the 6 images using the method 'renderItems' from the Section class
CardNew.renderItems(initialCards);
imageZoomPopup.setEventListeners();
editProfilePopup.setEventListeners();
editProfilePopup._getInputValues();
newPlacePopup.setEventListeners();

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
console.log("1111 formValidators=", formValidators);
const enableValidation = (config) => {
  console.log("2222 config=", config);
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  console.log("3333 formList=", formList);
  formList.forEach((formElement) => {
    console.log("4444 config=", config);
    console.log("5555 formElement=", formElement);

    const validator = new FormValidator(config, formElement);
    console.log("6666 validator=", validator);
    const formName = formElement.getAttribute("name");
    console.log("7777 formName=", formName);
    formValidators[formName] = validator;
    console.log("8888 formValidators[formName] =", formValidators[formName]);
    validator.enableValidation();
  });
};
enableValidation(config);
