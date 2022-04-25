//-----------------------------------------------
// associate Buttons, Popups and Elements with classes or ID's
//    buttonPencil = button to activate "Edit Profile" form
//    buttonPlus = button that activates form "New Place"
//    buttonCardCan = garbage can icon
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

const cardTemplate = document.querySelector("#myTemplate");
const buttonPencil = document.querySelector(".intro__button-pencil");
const buttonPlus = document.querySelector(".intro__button-plus");
const buttonCardCan = cardTemplate.content.querySelector(".card-grid__garbage");
const buttonHeart = cardTemplate.content.querySelector(".card-grid__icon");
const buttonEditProfileSave = document.querySelector("#buttonEditProfileSave");
const buttonNewPlaceCreate = document.querySelector("#buttonNewPlaceCreate");
const buttonEditProfileClose = document.querySelector(
  "#buttonEditProfileClose"
);
const buttonNewPlaceClose = document.querySelector("#buttonNewPlaceClose");
const buttonZoomPicClose = document.querySelector("#buttonZoomPicClose");

// const formEditProfile = document.querySelector("#person-popup-container");
const formEditProfile = document.querySelector("#editProfileForm");

const formEditProfileName = document.querySelector('input[name ="name"]');
const formEditProfileAboutMe = document.querySelector(
  'input[name = "aboutme"]'
);
// const formNewPlace = document.querySelector("#picture-popup-container");
const formNewPlace = document.querySelector("#newPlaceForm");
const formNewPlaceLink = document.querySelector("#link");
const formNewPlaceTitle = document.querySelector("#place");
const zoomPopup = document.querySelector("#image-popup-container");
const nameElement = document.querySelector(".intro__name");
const aboutMeElement = document.querySelector(".intro__occupation");
const zoomElement = document.querySelector("#image-zoom");
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
  formEditProfileName.value = nameElement.textContent;
  formEditProfileAboutMe.value = aboutMeElement.textContent;
  const containerElement = document.querySelector("#person-popup-container");
  openPopup(containerElement);
}

//-----------------------------------------------
//  FUNCTION 'saveProfile'
//-----------------------------------------------
function saveProfile(evtSave) {
  evtSave.preventDefault();
  if (formEditProfileName.value === "" || formEditProfileAboutMe.value === "") {
    alert("please fill out the form before submitting");
    return;
  }
  nameElement.textContent = formEditProfileName.value;
  aboutMeElement.textContent = formEditProfileAboutMe.value;
  const containerElement = document.querySelector("#person-popup-container");
  closePopup(containerElement);
}

//-----------------------------------------------
//  FUNCTION 'closeProfilePopup'
//-----------------------------------------------
function closeProfilePopup() {
  const containerElement = document.querySelector("#person-popup-container");
  closePopup(containerElement);
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
  zoomTextElement.textContent = cardInfo.name;

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
  formNewPlace.reset();
  const formNewPlaceTitle = document.querySelector("#place");
  const containerElement = document.querySelector("#picture-popup-container");
  openPopup(containerElement);
}

//-----------------------------------------------
//  FUNCTION 'createButton'
//-----------------------------------------------
function createButton(evtCreate) {
  evtCreate.preventDefault();
  const formNewPlaceTitle = document.querySelector("#place");
  if (formNewPlaceTitle.value === "" || formNewPlaceLink.value === "") {
    alert("please fill out the form before submitting");
  } else {
    newCardInfo = {};
    newCardInfo.name = formNewPlaceTitle.value;
    newCardInfo.link = formNewPlaceLink.value;
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
  titleElement.textContent = card.name;

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
  heartToChange.classList.toggle("card-grid__icon_active");
  // if (heartToChange.className === "card-grid__icon") {
  //   heartToChange.classList.add("card-grid__icon_active");
  // } else {
  //   heartToChange.classList.remove("card-grid__icon_active");
  // }
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
// buttonEditProfileSave.addEventListener("click", saveProfile);

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
// buttonNewPlaceCreate.addEventListener("click", createButton);
formNewPlace.addEventListener("submit", createButton);

//-----------------------------------------------
//  LISTEN - click on big X 'newPlace' form
//-----------------------------------------------
buttonNewPlaceClose.addEventListener("click", closeAddCardPopup);
