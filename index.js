//-----------------------------------------------
// associate Buttons, Popups and Elements with classes or ID's
//    buttonPencil = button to activate "Edit Profile" form
//    buttonCreateCard = the 'Create' button on 'New Place' Form
//    buttonSaveProfile = button to 'SAVE' "Edit Profile" form
//    buttonCloseProfile = 'big X' on 'editProfile' form
//    buttonCloseCard = 'big X' on 'New Place' form
//    buttonCardCan = garbage can icon
//    buttonHeart = "like" icon
//    buttonPlus = button that activates form "New Place"
//    buttonCloseZoomPic = 'big X' on 'Zoom Pic'
//    popupProfileName = the name entered on "Edit Profile" form
//    popupProfileAboutMe = the occupation entered on "Edit Profile" form
//    popupLink = card url
//    popupTitle = card location
//    profilePopup = "Edit Profile" popup
//    picturePopup = "New Place" popup
//    zoomPopup = "Zoom Pic" popup"
//    imagePopup = "Zoom Pic" popup
//    nameElement = starting name on page
//    aboutMeElement = starting occupation on page
//    zoomElement = card that is zoomed-up
//    listElement = card object
//    cardElement = clone of card object

const cardTemplate = document.querySelector("#myTemplate");
const buttonPencil = document.querySelector(".intro__button-pencil");
const buttonCreateCard = document.querySelector("#buttonCreateCard");
const buttonSaveProfile = document.querySelector("#buttonSaveProfile");
const buttonCloseProfile = document.querySelector("#buttonCloseProfile");
const buttonCloseCard = document.querySelector("#buttonCloseCard");
const buttonCardCan = cardTemplate.content.querySelector(".card-grid__garbage");
const buttonHeart = cardTemplate.content.querySelector(".card-grid__icon");
const buttonPlus = document.querySelector(".intro__button-plus");
const buttonCloseZoomPic = document.querySelector("#buttonCloseZoomPic");
const popupProfileName = document.querySelector('input[name ="name"]');
const popupProfileAboutMe = document.querySelector('input[name = "aboutme"]');
const popupLink = document.querySelector("#link");
const popupTitle = document.querySelector("#place");
const profilePopup = document.querySelector("#person-popup-container");
const picturePopup = document.querySelector("#picture-popup-container");
const zoomPopup = document.querySelector("#image-popup-container");
const imagePopup = document.querySelector("#image-popup-container");
const nameElement = document.querySelector(".intro__name");
const aboutMeElement = document.querySelector(".intro__occupation");
const zoomElement = document.querySelector("#image-zoom");
const listElement = cardTemplate.content.querySelector(".card-grid__style");
const imageElement = cardTemplate.content.querySelector("img");

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
//  DRAW INITIAL CARDS using createCard function
//-----------------------------------------------
for (let i = initialCards.length - 1; i >= 0; i--) {
  createCard(initialCards[i]);
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
//  FUNCTION 'openProfilePopup'
//-----------------------------------------------
function openProfilePopup() {
  popupProfileName.value = nameElement.textContent;
  popupProfileAboutMe.value = aboutMeElement.textContent;
  const containerElement = document.querySelector("#person-popup-container");
  openPopup(containerElement);
}

//-----------------------------------------------
//  FUNCTION 'saveProfile'
//-----------------------------------------------
function saveProfile(evtSave) {
  evtSave.preventDefault();
  if (popupProfileName.value === "" || popupProfileAboutMe.value === "") {
    alert("please fill out the form before submitting");
  } else {
    nameElement.textContent = popupProfileName.value;
    aboutMeElement.textContent = popupProfileAboutMe.value;
    const containerElement = document.querySelector("#person-popup-container");
    closePopup(containerElement);
  }
}

//-----------------------------------------------
//  FUNCTION 'closeProfilePopup'
//-----------------------------------------------
function closeProfilePopup() {
  closePopup(profilePopup);
}

//-----------------------------------------------
//  FUNCTION 'zoomPic'
//-----------------------------------------------
function zoomPic(cardInfo) {
  const zoomTextElement = document.querySelector(
    ".card-grid__picture-zoom-text"
  );

  zoomElement.src = cardInfo.link;
  zoomElement.alt = cardInfo.name;
  zoomTextElement.innerText = cardInfo.name;

  const containerElement = document.querySelector("#image-popup-container");
  openPopup(containerElement);
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
  document.querySelector("#newPlaceForm").reset();
  const popupTitle = document.querySelector("#place");
  const containerElement = document.querySelector("#picture-popup-container");
  openPopup(containerElement);
}

//-----------------------------------------------
//  FUNCTION 'createButton'
//-----------------------------------------------
function createButton(evtCreate) {
  evtCreate.preventDefault();
  const popupTitle = document.querySelector("#place");
  if (popupTitle.value === "" || popupLink.value === "") {
    alert("please fill out the form before submitting");
  } else {
    newCardInfo = {};
    newCardInfo.name = popupTitle.value;
    newCardInfo.link = popupLink.value;
    const newCardToDraw = createCard(newCardInfo);
    closeAddCardPopup();
    return;
  }
}

//-----------------------------------------------
//  FUNCTION 'closeAddCardPopup'
//-----------------------------------------------
function closeAddCardPopup() {
  const containerElement = document.querySelector("#picture-popup-container");
  closePopup(containerElement);
}

//************************************* */
//  FUNCTION - createCard
//************************************* */
function createCard(card) {
  const cardElement = cardTemplate.content.firstElementChild.cloneNode(true);

  // set const's
  const imageElement = cardElement.querySelector(".card-grid__picture");
  const titleElement = cardElement.querySelector(".card-grid__text");
  const heartElement = cardElement.querySelector(".card-grid__icon");
  const canElement = cardElement.querySelector(".card-grid__garbage");

  // define elements
  imageElement.src = card.link;
  imageElement.alt = card.name;
  titleElement.innerText = card.name;

  // add EventListener for buttonCardCan
  canElement.addEventListener("click", () => {
    cardElement.remove();
  });

  // add EventListener for heartbutton
  heartElement.addEventListener("click", (evt) => {
    evt.preventDefault();
    changeHeartColor(heartElement);
  });

  // add EventListener for zoomPic
  imageElement.addEventListener("click", () => {
    zoomPic(card);
  });

  const container = document.querySelector(".card-grid__format");

  renderCard(cardElement, container);

  return;
}

//************************************* */
//  FUNCTION - render Card
//************************************* */
function renderCard(card, container) {
  container.prepend(card);
}

//-----------------------------------------------
//  FUNCTION 'changeHeartColor'
//-----------------------------------------------

function changeHeartColor(heartToChange) {
  if (heartToChange.className === "card-grid__icon") {
    heartToChange.classList.add("card-grid__icon_active");
  } else {
    heartToChange.classList.remove("card-grid__icon_active");
  }
}

//-----------------------------------------------
//  LISTEN - click on big X zoomPic
//-----------------------------------------------
buttonCloseZoomPic.addEventListener("click", closeZoom);

//-----------------------------------------------
//  LISTEN for clicks on introButtonPencil
//-----------------------------------------------
buttonPencil.addEventListener("click", openProfilePopup);

//-----------------------------------------------
//  LISTEN for clicks on buttonSaveProfile
//-----------------------------------------------
buttonSaveProfile.addEventListener("click", saveProfile);

//-----------------------------------------------
//  LISTEN - click on big X 'editProfile' form
//-----------------------------------------------
buttonCloseProfile.addEventListener("click", closeProfilePopup);

//-----------------------------------------------
//  LISTEN for clicks on introButtonPlus
//-----------------------------------------------
buttonPlus.addEventListener("click", openAddCardPopup);

//-----------------------------------------------
//  LISTEN for clicks on buttonCreateCard
//-----------------------------------------------
buttonCreateCard.addEventListener("click", createButton);

//-----------------------------------------------
//  LISTEN - click on big X 'newPlace' form
//-----------------------------------------------
buttonCloseCard.addEventListener("click", closeAddCardPopup);
