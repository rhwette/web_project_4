import "./index.css";
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

const imageZoomPopup = new PopupWithImage(selectors.previewPopup);
const editProfilePopup = new PopupWithForm(selectors.profilePopup);
const newPlacePopup = new PopupWithForm(selectors.placePopup);

// draw the 6 images using the method 'renderItems' from the Section class
CardNew.renderItems(initialCards);
imageZoomPopup.setEventListeners();
editProfilePopup.setEventListeners();
newPlacePopup.setEventListeners();
