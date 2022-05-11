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
const formNewPlaceLink = document.querySelector("#link-input");
const formNewPlaceTitle = document.querySelector("#place-input");
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
  const currentCard = initialCards[i];
  renderCard(currentCard, containerForImages);
}

//-----------------------------------------------
//  FUNCTION 'openPopup'
//-----------------------------------------------
function openPopup(containerElement) {
  containerElement.classList.add("popup-container_visible");
  let addOrRemove = "add";
  addOrRemoveListener(addOrRemove, containerElement);
}

//-----------------------------------------------
//  FUNCTION 'closePopup'
//-----------------------------------------------
function closePopup(containerElement) {
  containerElement.classList.remove("popup-container_visible");
  let addOrRemove = "remove";
  addOrRemoveListener(addOrRemove, containerElement);
}

//-----------------------------------------------
//  FUNCTION 'addOrRemoveListener'
//-----------------------------------------------
function addOrRemoveListener(status, container) {
  if (status === "add") {
    document.addEventListener("keydown", (event) => {
      closeWithEscape(event, container);
    });
  } else {
    document.removeEventListener("keydown", (event) => {
      closeWithEscape(event, container);
    });
  }
}

//-----------------------------------------------
//  FUNCTION 'closeWithEscape'
//-----------------------------------------------
function closeWithEscape(event, container) {
  if (event.key === "Escape") {
    closePopup(container);
  }
}

//-----------------------------------------------
//  FUNCTION 'fillProfileForm'
//-----------------------------------------------
function fillProfileForm() {
  formEditProfileName.value = nameElement.textContent;
  formEditProfileAboutMe.value = aboutMeElement.textContent;
}

//-----------------------------------------------
//  FUNCTION 'openProfilePopup'
//-----------------------------------------------
function openProfilePopup() {
  fillProfileForm();
  openPopup(containerElementPerson);
}

//-----------------------------------------------
//  FUNCTION 'submitEditProfileForm'
//-----------------------------------------------
function submitEditProfileForm(evtSave) {
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
//  FUNCTION 'submitNewPlaceForm'
//-----------------------------------------------
function submitNewPlaceForm(evtCreate) {
  evtCreate.preventDefault();
  newCardInfo = {};
  newCardInfo.name = formNewPlaceTitle.value;
  newCardInfo.link = formNewPlaceLink.value;
  renderCard(newCardInfo, containerForImages);
  closeAddCardPopup();
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
buttonZoomPicClose.addEventListener("click", closeZoom);

//-----------------------------------------------
//  LISTEN for clicks on introButtonPencil
//-----------------------------------------------
buttonPencil.addEventListener("click", openProfilePopup);

//-----------------------------------------------
//  LISTEN for clicks on buttonEditProfileSave
//-----------------------------------------------
formEditProfile.addEventListener("submit", submitEditProfileForm);

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
formNewPlace.addEventListener("submit", submitNewPlaceForm);

//-----------------------------------------------
//  LISTEN - click on big X 'newPlace' form
//-----------------------------------------------
buttonNewPlaceClose.addEventListener("click", closeAddCardPopup);

//-----------------------------------------------
//  LISTEN - escape key press....close zoom pic
//-----------------------------------------------

//-----------------------------------------------
//  LISTEN - close the forms or the zoom when clicking outside of them
//-----------------------------------------------

// assign containerArray to the containers
const containerArray = [
  containerElementPerson,
  containerElementPicture,
  containerElementImage,
];
// assign boxArray to id's for each form
const boxArray = ["popupEditProfile", "popupNewPlace", "popupImageZoom"];

document.addEventListener("mousedown", function (event) {
  for (let i = 0; i < boxArray.length; i++) {
    let box = document.getElementById(boxArray[i]);
    let containerElement = containerArray[i];
    if (
      event.target != box &&
      event.target.parentNode != box &&
      event.target.id != "name-input" &&
      event.target.id != "aboutme-input" &&
      event.target.id != "place-input" &&
      event.target.id != "link-input" &&
      event.target.id != "buttonEditProfileSave" &&
      event.target.id != "buttonNewPlaceCreate"
    ) {
      closePopup(containerElement);
    }
  }
});
