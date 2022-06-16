import "./index.css";

// import all the classes
import { initialCards, selectors } from "../components/constants";
import Card from "../components/Card";
import Section from "../components/Section";
// import FormValidator from "../components/FormValidator";
// import PopupWithImage from "../components/PopupWithImage";
// import PopupWithForm from "../components/PopupWithForm";
// import UserInfo from "../components/UserInfo";

console.log("111a INDEX.JS initialCards =", initialCards);
console.log("111a INDEX.JS selectors = ", selectors);
console.log("111a INDEX.JS selectors.cardSection = ", selectors.cardSection);
console.log("111a INDEX.JS selectors.cardTemplate = ", selectors.cardTemplate);

// create all instances of classes

// begin with Section class

const CardSection = new Section(
  {
    data: initialCards,
    renderer: (item) => {
      const cardElement = new Card(item, selectors.cardTemplate);
      console.log("111b INDEX.JS  item =", item);
      console.log(
        "111b INDEX.JS selectors.cardTemplate =",
        selectors.cardTemplate
      );
      console.log("111b INDEX.JS  cardElement =", cardElement);
      const createdCard = cardElement.createCard();
      console.log("111b INDEX.JS  createdCard =", createdCard);
      CardSection.addItem(createdCard);
      console.log("111b INDEX.JS  CardSection =", CardSection);
    },
  },
  selectors.cardSection
);

// draw the 6 images using the method 'renderItems' from the Section class
CardSection.renderItems(initialCards);
