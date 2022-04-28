//-----------------------------------------------
// associate Buttons, Popups and Elements with classes or ID's
//    buttonPencil = button to activate "Edit Profile" form
//    buttonPlus = button that activates form "New Place"
//    buttonCan = garbage can icon
//    buttonHeart = "like" icon
//    buttonEditProfileSave = button to 'SAVE' "Edit Profile" form
//    buttonNewPlaceCreate = the 'Create' button on 'New Place' Form
//    buttonEditProfileClose = 'big X' on 'editProfile' form
//    buttonNewPlaceClose = 'big X' on 'New Place' form
//    buttonZoomPicClose = 'big X' on 'Zoom Pic'
//    formEditProfile = "Edit Profile" popup
//    formEditProfileName = the name entered on "Edit Profile" form
//    formEditProfileAboutMe = the occupation entered on "Edit Profile" form
//    formNewPlace = "New Place" popup
//    formNewPlaceLink = url for new card image
//    formNewPlaceTitle = card location
//    zoomPopup = "Zoom Pic" popup"
//    nameElement = starting name on page
//    aboutMeElement = starting occupation on page
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

const formEditProfile = document.querySelector("#editProfileForm");

const formEditProfileName = document.querySelector('input[name ="name"]');
const formEditProfileAboutMe = document.querySelector(
  'input[name = "aboutme"]'
);
const formNewPlace = document.querySelector("#newPlaceForm");
const formNewPlaceLink = document.querySelector("#link");
const formNewPlaceTitle = document.querySelector("#place");
const zoomPopup = document.querySelector("#image-popup-container");
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
//-----------------------------------------------
for (let i = initialCards.length - 1; i >= 0; i--) {
  console.log("AAAA initialCards[i]", initialCards[i]);
  const currentCard = initialCards[i];
  // createCard(currentCard, containerForImage);
  renderCard(currentCard, containerForImages);
}

//-----------------------------------------------
//  FUNCTION 'openPopup'
//-----------------------------------------------
function openPopup(containerElement) {
  containerElement.classList.add("popup-container_visible");
}

//-----------------------------------------------
//  FUNCTION 'closePopup'
//-----------------------------------------------
function closePopup(containerElement) {
  containerElement.classList.remove("popup-container_visible");
}

//-----------------------------------------------
//  FUNCTION 'fillProfileForm'
//-----------------------------------------------
function fillProfileForm() {
  formEditProfileName.value = nameElement.textContent;
  formEditProfileAboutMe.value = aboutMeElement.textContent;
  // openProfilePopup();
}

//-----------------------------------------------
//  FUNCTION 'openProfilePopup'
//-----------------------------------------------
function openProfilePopup() {
  fillProfileForm();
  // formEditProfileName.value = nameElement.textContent;
  // formEditProfileAboutMe.value = aboutMeElement.textContent;
  openPopup(containerElementPerson);
}

//-----------------------------------------------
//  FUNCTION 'saveProfile'
//-----------------------------------------------
function saveProfile(evtSave) {
  evtSave.preventDefault();
  nameElement.textContent = formEditProfileName.value;
  aboutMeElement.textContent = formEditProfileAboutMe.value;
  closePopup(containerElementPerson);
}

//-----------------------------------------------
//  FUNCTION 'closeProfilePopup'
//-----------------------------------------------
function closeProfilePopup() {
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
//  FUNCTION 'closeZoomPopup'
//-----------------------------------------------
function closeZoom() {
  closePopup(zoomPopup);
}

//-----------------------------------------------
//  FUNCTION 'openAddCardPopup'
//-----------------------------------------------
function openAddCardPopup(evtNewPlace) {
  formNewPlace.reset();
  openPopup(containerElementPicture);
}

//-----------------------------------------------
//  FUNCTION 'createButton'
//-----------------------------------------------
function createButton(evtCreate) {
  evtCreate.preventDefault();
  newCardInfo = {};
  newCardInfo.name = formNewPlaceTitle.value;
  newCardInfo.link = formNewPlaceLink.value;
  // const newCardToDraw = createCard(newCardInfo);
  console.log("XXXX newCardInfo", newCardInfo);
  renderCard(newCardInfo, containerForImages);
  closeAddCardPopup();
  return;
}

//-----------------------------------------------
//  FUNCTION 'closeAddCardPopup'
//-----------------------------------------------
function closeAddCardPopup() {
  closePopup(containerElementPicture);
}

//************************************* */
//  FUNCTION - createCard - create cards and assign event listeners
//************************************* */
function createCard(card) {
  console.log("BBBB card", card);
  const cardElement = cardTemplate.content.firstElementChild.cloneNode(true);
  console.log("XXXX cardElement", cardElement);

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

  console.log("CCCC cardElement", cardElement);
  console.log("cccc cardElement.classList", cardElement.classList);
  console.log("DDDD card", card);
  // const containerForImages = document.querySelector(".card-grid__format");
  console.log("EEEE container", containerForImages);

  // renderCard(cardElement, container);
  return cardElement;
}

//************************************* */
//  FUNCTION - render Card
//************************************* */
function renderCard(card, container) {
  console.log("FFFF card", card);
  console.log("GGGG container", container);
  const cardElement = createCard(card);
  // console.log("HHHH cardElement", cardElement);
  console.log("IIII card", card);
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
buttonZoomPicClose.addEventListener("click", closeZoom);

//-----------------------------------------------
//  LISTEN for clicks on introButtonPencil
//-----------------------------------------------
buttonPencil.addEventListener("click", openProfilePopup);

//-----------------------------------------------
//  LISTEN for clicks on buttonEditProfileSave
//-----------------------------------------------
formEditProfile.addEventListener("submit", saveProfile);

//-----------------------------------------------
//  LISTEN - click on big X 'editProfile' form
//-----------------------------------------------
buttonEditProfileClose.addEventListener("click", closeProfilePopup);

//-----------------------------------------------
//  LISTEN for clicks on introButtonPlus
//-----------------------------------------------
buttonPlus.addEventListener("click", openAddCardPopup);

//-----------------------------------------------
//  LISTEN for clicks on buttonNewPlaceCreate
//-----------------------------------------------
formNewPlace.addEventListener("submit", createButton);

//-----------------------------------------------
//  LISTEN - click on big X 'newPlace' form
//-----------------------------------------------
buttonNewPlaceClose.addEventListener("click", closeAddCardPopup);
