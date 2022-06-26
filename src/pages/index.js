import "./index.css";
console.log("1111a INDEX.JS ");
// import all the classes
import { initialCards, selectors } from "../components/Constants";
import Card from "../components/Card";
import Section from "../components/Section";
import PopupWithImage from "../components/PopupWithImage";
import FormValidator from "../components/FormValidator";
import PopupWithForm from "../components/PopupWithForm";
// import UserInfo from "../components/UserInfo";

// create all instances of classes

// begin with Section class
console.log("1111b INDEX.JS initialCards = ", initialCards);
console.log("1111c INDEX.JS selectors= ", selectors);

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

// function submitPopupEditProfile(evtSave) {
//   evtSave.preventDefault();
//   nameElement.textContent = popupEditProfileName.value;
//   aboutMeElement.textContent = popupEditProfileAboutMe.value;
//   closePopup(containerElementPerson);
// }
console.log("1111d INDEX.JS just before call to NEW CLASS");
const imageZoomPopup = new PopupWithImage(selectors.previewPopup);
// const editProfilePopup = new PopupWithForm("#person-popup-container");
const editProfilePopup = new PopupWithForm(selectors.profilePopup);
console.log("1111e INDEX.JS just after call to NEW CLASS");

// draw the 6 images using the method 'renderItems' from the Section class
CardNew.renderItems(initialCards);
imageZoomPopup.setEventListeners();
editProfilePopup.setEventListeners();
console.log("1111f INDEX.JS after EVLs");
