import "./index.css";

// import all the classes
import { initialCards, selectors } from "../components/constants";
import Card from "../components/Card";
import Section from "../components/Section";
// import FormValidator from "../components/FormValidator";
// import PopupWithImage from "../components/PopupWithImage";
// import PopupWithForm from "../components/PopupWithForm";
// import UserInfo from "../components/UserInfo";

console.log("initialCards =", initialCards);
console.log("selectors.cardSection = ", selectors.cardSection);
console.log("selectors.cardTemplate = ", selectors.cardTemplate);

// create all instances of classes

// begin with Section class

const CardSection = new Section(
  {
    renderer: (item) => {
      const cardElement = new Card(item, selectors.cardTemplate);
      CardSection.addItem(cardElement, createCard());
    },
  },
  selectors.cardSection
);

// initialize instances - draw the 6 images
CardSection.renderItems(initialCards);
