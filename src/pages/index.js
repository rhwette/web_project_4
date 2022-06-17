import "./index.css";

// import all the classes
import { initialCards, selectors } from "../components/constants";
import Card from "../components/Card";
import Section from "../components/Section";
import PopupWithImage from "../components/PopupWithImage";
// import FormValidator from "../components/FormValidator";
// import PopupWithImage from "../components/PopupWithImage";
// import PopupWithForm from "../components/PopupWithForm";
// import UserInfo from "../components/UserInfo";

// create all instances of classes

// begin with Section class

const imageZoomPopup = new PopupWithImage("previewPopup");

const CardSection = new Section(
  {
    data: initialCards,
    renderer: (item) => {
      const cardElement = new Card(item, selectors.cardTemplate);
      const createdCard = cardElement.createCard();
      CardSection.addItem(createdCard);
    },
  },
  selectors.cardSection
);

// draw the 6 images using the method 'renderItems' from the Section class
CardSection.renderItems(initialCards);
