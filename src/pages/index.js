import "./index.css";

// import all the classes
import { initialCards, selectors } from "../components/constants";
import Card from "../components/Card";
import Section from "../components/Section";
// import FormValidator from "../components/FormValidator";
// import PopupWithImage from "../components/PopupWithImage";
// import PopupWithForm from "../components/PopupWithForm";
// import UserInfo from "../components/UserInfo";

console.log("111 INDEX.JS initialCards =", initialCards);
console.log("111 INDEX.JS selectors.cardSection = ", selectors.cardSection);
console.log("111 INDEX.JS selectors.cardTemplate = ", selectors.cardTemplate);

// create all instances of classes

// begin with Section class

const CardSection = new Section(
  {
    data: initialCards,
    renderer: (item) => {
      const cardElement = new Card(item, selectors.cardTemplate);
      const createdCard = cardElement.createCard();
      // const cardTemplate = cardElement.createCard;
      CardSection.addItem(createdCard);
    },
  },
  selectors.cardSection
);
console.log("111 INDEX.JS CardSection = ", CardSection);
// console.log("111 INDEX.JS CardTemplate = ", CardTemplate);

// initialize instances - draw the 6 images
CardSection.renderItems(initialCards);
