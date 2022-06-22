import "./index.css";

// import all the classes
import { initialCards, selectors } from "../components/Constants";
import Card from "../components/Card";
import Section from "../components/Section";
import PopupWithImage from "../components/PopupWithImage";
import FormValidator from "../components/FormValidator";
// import PopupWithForm from "../components/PopupWithForm";
// import UserInfo from "../components/UserInfo";

// create all instances of classes

// begin with Section class

// console.log("111a INDEX.JS selectors.previewPopup= ", selectors.previewPopup);
// const imageZoomPopup = new PopupWithImage(selectors.previewPopup);
// console.log("111b INDEX.JS imageZoomPopup=", imageZoomPopup);

// const CardSection = new Section(
//   {
//     data: initialCards,
//     renderer: (item) => {
//       console.log(
//         "111c INDEX.JS selectors.cardTemplate = ",
//         selectors.cardTemplate
//       );
//       console.log("111d INDEX.JS cardElement=", cardElement);
//       const cardElement = new Card(item, selectors.cardTemplate);
//       const createdCard = cardElement.createCard();
//       CardSection.addItem(createdCard);
//     },
//   },
//   selectors.cardSection
// );

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
      console.log("dddd", selectors.cardSection);
      CardNew.addItem(cardElement.createCard());
    },
  },
  selectors.cardSection
);

const imageZoomPopup = new PopupWithImage(selectors.previewPopup);

// draw the 6 images using the method 'renderItems' from the Section class
CardNew.renderItems(initialCards);
imageZoomPopup.setEventListeners();
