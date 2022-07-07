import "./index.css";
// import all the classes
import { initialCards, selectors } from "../components/Constants";
import Card from "../components/Card";
import Section from "../components/Section";
import Popup from "../components/Section";
import PopupWithImage from "../components/PopupWithImage";
import FormValidator from "../components/FormValidator";
import PopupWithForm from "../components/PopupWithForm";
import UserInfo from "../components/UserInfo";

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

const editProfilePopup = new PopupWithForm({
  popupSelector: selectors.profilePopup,
  handleFormSubmit: (evtSave) => {
    evtSave.preventDefault();
    nameElement.textContent = popupEditProfileName.value;
    aboutMeElement.textContent = popupEditProfileAboutMe.value;
    close();
  },
});
// function submitPopupEditProfile(evtSave) {
//   evtSave.preventDefault();
//   nameElement.textContent = popupEditProfileName.value;
//   aboutMeElement.textContent = popupEditProfileAboutMe.value;
//   closePopup(containerElementPerson);
// }

const newPlacePopup = new PopupWithForm({
  popupSelector: selectors.placePopup,
  handleFormSubmit: () => {
    console.log("test2");
  },
});

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
