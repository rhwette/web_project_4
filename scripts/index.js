//-----------------------------------------------
// associate Buttons, Popups and Elements with classes or ID's
//    buttonPencil = button to activate "Edit Profile" popup
//    buttonPlus = button that activates "New Place" popup
//    buttonCan = garbage can icon
//    buttonHeart = "like" icon
//    buttonEditProfileSave = the 'SAVE' button on "Edit Profile" popup
//    buttonNewPlaceCreate = the 'Create' button on 'New Place' popup
//    buttonEditProfileClose = 'big X' on 'EditProfile' popup
//    buttonNewPlaceClose = 'big X' on 'New Place' popup
//    buttonZoomPicClose = 'big X' on 'Zoom Pic' popup
//    popupEditProfile = "Edit Profile" popup
//    popupEditProfileName = "Edit Profile" popup name
//    popupEditProfileAboutMe = "Edit Profile" popup aboutMe
//    popupNewPlace = "New Place" popup
//    popupNewPlaceAlt = "New Place" popup alternate
//    popupNewPlaceLink = "New Place" popup URL
//    popupNewPlaceTitle = "New Place" popup location
//    nameElement = starting name on "EditProfile" popup
//    aboutMeElement = starting aboutMe on "EditProfile" popup
//    zoomElement = card that is zoomed-up
//    cardElement = clone of card object
//    imageElement =image used in Zoom and in createCard
//    containerElementPerson = containerElement for "Edit Profile"
//    containerElementPicture = containerElement for "New Place"
//    containerElementImage = containerElement for "Zoom Pic"

const cardTemplate = document.querySelector("#myTemplate");
const buttonPencil = document.querySelector(".intro__button-pencil");
const buttonPlus = document.querySelector(".intro__button-plus");
const buttonEditProfileSave = document.querySelector("#buttonEditProfileSave");
const buttonNewPlaceCreate = document.querySelector("#buttonNewPlaceCreate");
const buttonEditProfileClose = document.querySelector(
  "#buttonEditProfileClose"
);
const buttonNewPlaceClose = document.querySelector("#buttonNewPlaceClose");
const buttonZoomPicClose = document.querySelector("#buttonZoomPicClose");
const popupEditProfile = document.querySelector("#editProfileForm");
const popupEditProfileName = document.querySelector('input[name ="name"]');
const popupEditProfileAboutMe = document.querySelector(
  'input[name = "aboutme"]'
);
const popupNewPlace = document.querySelector("#newPlaceForm");
const popupNewPlaceAlt = document.querySelector("#picture-popup-container");
const popupNewPlaceLink = document.querySelector("#link-input");
const popupNewPlaceTitle = document.querySelector("#place-input");
const nameElement = document.querySelector(".intro__name");
const aboutMeElement = document.querySelector(".intro__occupation");
const zoomElement = document.querySelector("#image-zoom");
const imageElement = cardTemplate.content.querySelector("img");
const containerElementPerson = document.querySelector(
  "#person-popup-container"
);
const containerElementPicture = document.querySelector(
  "#picture-popup-container"
);
const containerElementImage = document.querySelector("#image-popup-container");
const containerForImages = document.querySelector(".card-grid__format");

//  ARRAY of OBJECTS containing image links
const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg",
  },
];

//-----------------------------------------------
//  Render INITIAL CARDS using renderCard function
//    use i-- to reverse order of images
//-----------------------------------------------
for (let i = initialCards.length - 1; i >= 0; i--) {
  const currentCard = initialCards[i];
  renderCard(currentCard, containerForImages);
}

//-----------------------------------------------
//  FUNCTION 'openPopup'
//-----------------------------------------------
function openPopup(containerElement) {
  containerElement.classList.add("popup-container_visible");
  containerElement.addEventListener("mousedown", closePopupWithRemoteClick);
  document.addEventListener("keydown", closePopupWithEscape);
}

//-----------------------------------------------
//  FUNCTION 'closePopup'
//-----------------------------------------------
function closePopup(containerElement) {
  containerElement.classList.remove("popup-container_visible");
  containerElement.removeEventListener("mousedown", closePopupWithRemoteClick);
  document.removeEventListener("keydown", closePopupWithEscape);
}

//-----------------------------------------------
//  FUNCTION 'closePopupWithEscape'
//-----------------------------------------------
function closePopupWithEscape(event) {
  if (event.key === "Escape") {
    const openedPopup = document.querySelector(".popup-container_visible");
    closePopup(openedPopup);
  }
}

//-----------------------------------------------
//  FUNCTION 'closePopupWithRemoteClick'
//-----------------------------------------------
function closePopupWithRemoteClick(event) {
  if (event.target === event.currentTarget) {
    closePopup(event.target);
  }
}

//-----------------------------------------------
//  FUNCTION 'openPopupEditProfile'
//-----------------------------------------------
function openPopupEditProfile() {
  fillPopupEditProfile();
  openPopup(containerElementPerson);
}

//-----------------------------------------------
//  FUNCTION 'fillPopupEditProfile'
//-----------------------------------------------
function fillPopupEditProfile() {
  popupEditProfileName.value = nameElement.textContent;
  popupEditProfileAboutMe.value = aboutMeElement.textContent;
}

//-----------------------------------------------
//  FUNCTION 'submitPopupEditProfile'
//-----------------------------------------------
function submitPopupEditProfile(evtSave) {
  evtSave.preventDefault();
  nameElement.textContent = popupEditProfileName.value;
  aboutMeElement.textContent = popupEditProfileAboutMe.value;
  closePopup(containerElementPerson);
}

//-----------------------------------------------
//  FUNCTION 'closePopupEditProfile'
//-----------------------------------------------
function closePopupEditProfile() {
  closePopup(containerElementPerson);
}

//-----------------------------------------------
//  FUNCTION 'zoomPic'
//-----------------------------------------------
function zoomPic(cardInfo) {
  const zoomTextElement = document.querySelector(".image-popup__picture-text");
  zoomElement.src = cardInfo.link;
  zoomElement.alt = cardInfo.name;
  zoomTextElement.textContent = cardInfo.name;
  openPopup(containerElementImage);
}

//-----------------------------------------------
//  FUNCTION 'closePopupZoom'
//-----------------------------------------------
function closePopupZoom() {
  closePopup(containerElementImage);
}

//-----------------------------------------------
//  FUNCTION 'openPopupAddCard'
//-----------------------------------------------
function openPopupAddCard(evtNewPlace) {
  popupNewPlace.reset();
  openPopup(containerElementPicture);
}

//-----------------------------------------------
//  FUNCTION 'submitPopupNewPlace'
//-----------------------------------------------
function submitPopupNewPlace(evtCreate) {
  evtCreate.preventDefault();
  newCardInfo = {};
  newCardInfo.name = popupNewPlaceTitle.value;
  newCardInfo.link = popupNewPlaceLink.value;
  renderCard(newCardInfo, containerForImages);
  closePopupAddCard();
}

//-----------------------------------------------
//  FUNCTION 'closePopupAddCard'
//-----------------------------------------------
function closePopupAddCard() {
  closePopup(containerElementPicture);
}

//************************************* */
//  FUNCTION - createCard - create cards and assign event listeners
//************************************* */
function createCard(card) {
  const cardElement = cardTemplate.content.firstElementChild.cloneNode(true);

  // set const's
  const imageElement = cardElement.querySelector(".card-grid__picture");
  const titleElement = cardElement.querySelector(".card-grid__text");
  const buttonHeart = cardElement.querySelector(".card-grid__icon");
  const buttonCan = cardElement.querySelector(".card-grid__garbage");

  // define elements
  imageElement.src = card.link;
  imageElement.alt = card.name;
  titleElement.textContent = card.name;

  // add EventListener for buttonCan
  buttonCan.addEventListener("click", () => {
    cardElement.remove();
  });

  // add EventListener for buttonHeart
  buttonHeart.addEventListener("click", (evt) => {
    evt.preventDefault();
    changeHeartColor(buttonHeart);
  });

  // add EventListener for zoomPic
  imageElement.addEventListener("click", () => {
    zoomPic(card);
  });

  return cardElement;
}

//************************************* */
//  FUNCTION - render Card
//************************************* */
function renderCard(card, container) {
  const cardElement = createCard(card);
  container.prepend(cardElement);
}

//-----------------------------------------------
//  FUNCTION 'changeHeartColor'
//-----------------------------------------------
function changeHeartColor(heartToChange) {
  heartToChange.classList.toggle("card-grid__icon_active");
}

//-----------------------------------------------
//  LISTEN - click on big X zoomPic
//-----------------------------------------------
buttonZoomPicClose.addEventListener("click", closePopupZoom);

//-----------------------------------------------
//  LISTEN for clicks on introButtonPencil
//-----------------------------------------------
buttonPencil.addEventListener("click", openPopupEditProfile);

//-----------------------------------------------
//  LISTEN for clicks on buttonEditProfileSave
//-----------------------------------------------
popupEditProfile.addEventListener("submit", submitPopupEditProfile);

//-----------------------------------------------
//  LISTEN - click on big X 'editProfile' form
//-----------------------------------------------
buttonEditProfileClose.addEventListener("click", closePopupEditProfile);

//-----------------------------------------------
//  LISTEN for clicks on introButtonPlus
//-----------------------------------------------
buttonPlus.addEventListener("click", openPopupAddCard);

//-----------------------------------------------
//  LISTEN for clicks on buttonNewPlaceCreate
//-----------------------------------------------
popupNewPlace.addEventListener("submit", submitPopupNewPlace);

//-----------------------------------------------
//  LISTEN - click on big X 'newPlace' form
//-----------------------------------------------
buttonNewPlaceClose.addEventListener("click", closePopupAddCard);

// stuff for proj 7

// const editFormValidator = new FormValidator(settings, editForm );
// const addFormValidator = new FormValidator(settings, addForm );
