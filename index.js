
//-----------------------------------------------
// associate Buttons, Popups and Elements with classes or ID's
//    buttonPencil = button to activate "Edit Profile" form
//    buttonCreateCard = the 'Create' button on 'newPlace' Form
//    buttonSaveProfile = button to 'SAVE' "Edit Profile" form
//    buttonCloseProfile = 'big X' on 'editProfile' form
//    buttonCloseCard = 'big X' on 'newPlace' form
//    buttonCardCan = garbage can icon
//    buttonHeart = "like" icon
//    buttonPlus = button that activates form "New Place"
//    buttonCloseZoomPic = 'big X' on 'zoomPic' 
//    popupProfileName = the name entered on "Edit Profile" form
//    popupProfileAboutMe = the occupation entered on "Edit Profile" form
//    popupLink = card url
//    popupTitle = card location
//    nameElement = starting name on page
//    aboutMeElement = starting occupation on page
//    zoomElement = card that is zoomed-up
//    listElement = card object

const cardTemplate = document.querySelector('#myTemplate');
const buttonPencil = document.querySelector('.intro__button-pencil');
const buttonCreateCard = document.querySelector("#buttonCreateCard");
const buttonSaveProfile = document.querySelector("#buttonSaveProfile");
const buttonCloseProfile = document.querySelector('#buttonCloseProfile');
const buttonCloseCard = document.querySelector('#buttonCloseCard');
const buttonCardCan = cardTemplate.content.querySelector('.card-grid__garbage');
const buttonHeart = cardTemplate.content.querySelector('.card-grid__icon');
const buttonPlus = document.querySelector('.intro__button-plus');
const buttonCloseZoomPic = document.querySelector('#buttonCloseZoomPic');
const popupProfileName = document.querySelector('input[name ="name"]');
const popupProfileAboutMe = document.querySelector('input[name = "aboutme"]');
const popupLink = document.querySelector('#link');
const popupTitle = document.querySelector('#place');
const nameElement = document.querySelector(".intro__name");
const aboutMeElement = document.querySelector(".intro__occupation");
const zoomElement = document.querySelector("#image-zoom");
const listElement = cardTemplate.content.querySelector('li');



//  ARRAY of OBJECTS containing image links
const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
  },
  {
    name: "Lake Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
  },
  {
    name: "Bald Mountains",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg"
  },
  {
    name: "Vanoise National Park",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg"
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg"
  }
]; 

//
// use cardIndex as permanent ID for all elements in Template
//    including initial cards and any added cards
// note: element id's must not start with a number, so will need a prefix for each 
//
  
//-----------------------------------------------  
//  myTEMPLATE TO DRAW INITIAL CARDS
//-----------------------------------------------
    for (let i = 0; i < initialCards.length; i++) {

      // li element
      cardTemplate.content.querySelector('li').id = `listElement${i}`;
    const listElement = cardTemplate.content.querySelector('li');
    
      // card image
      cardTemplate.content.querySelector('img').src = initialCards[i]["link"];
      cardTemplate.content.querySelector('img').alt = initialCards[i]["name"];
      cardTemplate.content.querySelector('img').id = `cardImage${[i]}`;
    const cardPicture = cardTemplate.content.querySelector('img');
    
      // card can  
      cardTemplate.content.querySelector('.canSymbol').id = `buttonCardCan${[i]}`;
    const buttonCardCan = cardTemplate.content.querySelector('.card-grid__garbage');

      // card words
      cardTemplate.content.querySelector('h2').textContent = initialCards[i]["name"];
      cardTemplate.content.querySelector('h2').id = `cardName${[i]}`;
    
      // card heart
      cardTemplate.content.querySelector('.heartSymbol').id = `buttonHeart${[i]}`;
      cardTemplate.content.querySelector('.heartSymbol').name = 'buttonHeart';
    const buttonHeart = cardTemplate.content.querySelector('.card-grid__icon');
      
      // assign clone
    const clone = document.importNode(cardTemplate.content, true);

      // append clone to ul element within the list elements
    document.querySelector('ul').appendChild(clone);

      // add EventListeners for all buttonCardCan and cardPicture
    const currentCan = document.querySelector(`#buttonCardCan${[i]}`);
    currentCan.addEventListener('click', removePic);

    const currentCardPicture = document.querySelector(`#cardImage${[i]}`);
    currentCardPicture.addEventListener('click', zoomPic);

      // reset cardIndex at each loop
      // at end of looping, cardIndex will be (initialCards.length -1)
      // each element above will keep index permanently
    cardIndex = i;

    }

//-----------------------------------------------
//  FUNCTION 'openPopup' 
//-----------------------------------------------
    function openPopup(containerElement) {
    containerElement.classList.add('popup-container_visible');
}

//-----------------------------------------------
//  FUNCTION 'closePopup'
//-----------------------------------------------
    function closePopup(containerElement) {
    containerElement.classList.remove('popup-container_visible')
    }

//-----------------------------------------------
//  FUNCTION 'removePic'
//-----------------------------------------------

    function removePic(evtRemove) {
    const canId = evtRemove.target.id;
    const cardCanId = canId.charAt(canId.length-1);
    const cardToDelete = document.querySelector(`#listElement${cardCanId}`);
    cardToDelete.remove();
}
 
//-----------------------------------------------
//  FUNCTION 'zoomPic'
//-----------------------------------------------
    function zoomPic(evtZoom) {
    const textId = evtZoom.target.id;
    const pictureIndex= textId.charAt(textId.length-1);

    if (pictureIndex < initialCards.length) {
    const zoomElement = document.querySelector("#image-zoom");
    zoomElement.src=`${initialCards[pictureIndex]["link"]}`;
    zoomElement.alt="locationx";
    zoomElement.title=`"${initialCards[pictureIndex]['name']}"`;
    } else {

    const zoomElement = document.querySelector("#image-zoom");
    zoomElement.src = document.querySelector(`#cardImage${pictureIndex}`).src;
    zoomElement.alt = document.querySelector(`#cardImage${pictureIndex}`).alt;
    zoomElement.id = document.querySelector(`#cardImage${pictureIndex}`).id;
    }
  
    const containerElement = document.querySelector('#image-popup-container');
    openPopup(containerElement);
}

//-----------------------------------------------
//  LISTEN - click on big X zoomPic
//-----------------------------------------------
    buttonCloseZoomPic.addEventListener('click', closeZoom);

//-----------------------------------------------
//  FUNCTION 'closeZoom'
//-----------------------------------------------
    function closeZoom() {
    const containerElement = document.querySelector('#image-popup-container');
    closePopup(containerElement);
}

//***********************************************
//-----------------------------------------------
// 'EDIT PROFILE POPUP'
//-----------------------------------------------
//***********************************************

//-----------------------------------------------
//  LISTEN for clicks on introButtonPencil and on buttonSaveProfile
//-----------------------------------------------
    buttonPencil.addEventListener('click', openProfilePopup);
    buttonSaveProfile.addEventListener('click', saveProfile);

//-----------------------------------------------
//  FUNCTION 'openProfilePopup'
//-----------------------------------------------  
    function openProfilePopup() {
    popupProfileName.value = nameElement.textContent;
    popupProfileAboutMe.value = aboutMeElement.textContent;
    const containerElement = document.querySelector('#person-popup-container');
    openPopup(containerElement);
}

//-----------------------------------------------
//  FUNCTION 'saveProfile'
//-----------------------------------------------
    function  saveProfile (evtSave) {
    evtSave.preventDefault();
    if (popupProfileName.value === "" || popupProfileAboutMe.value === "") {
    alert("please fill out the form before submitting");
    } else {  
    nameElement.textContent = popupProfileName.value;
    aboutMeElement.textContent = popupProfileAboutMe.value;
    const containerElement = document.querySelector('#person-popup-container');
    closePopup(containerElement);
    }
}

//-----------------------------------------------
//  LISTEN - click on big X 'editProfile' form
//-----------------------------------------------
    buttonCloseProfile.addEventListener('click', closeProfilePopup);

//-----------------------------------------------
//  FUNCTION 'closeProfilePopup'
//-----------------------------------------------
    function closeProfilePopup() {
    const containerElement = document.querySelector('#person-popup-container');
    closePopup(containerElement);
}

//***********************************************
//-----------------------------------------------
// 'NEW PLACE POPUP'
//-----------------------------------------------
//***********************************************

//-----------------------------------------------
//  LISTEN for clicks on introButtonPlus and on buttonCreateCard
//-----------------------------------------------
    buttonPlus.addEventListener('click', openAddCardPopup);
    buttonCreateCard.addEventListener('click', createButton);

//-----------------------------------------------
//  FUNCTION 'openAddCardPopup'
//-----------------------------------------------  
    function openAddCardPopup(evtNewPlace) {
    document.querySelector('#newPlaceForm').reset();
    const popupTitle = document.querySelector('#place');
    const popupLink = document.querySelector('#link');
    const containerElement = document.querySelector('#picture-popup-container');
    openPopup(containerElement);
   }

//-----------------------------------------------
//  FUNCTION 'createButton'
//-----------------------------------------------
    function  createButton (evtCreate) {
    evtCreate.preventDefault();
    const popupTitle = document.querySelector('#place');
    const popupLink = document.querySelector('#link');
    if (popupTitle.value === "" || popupLink.value === "") {
    alert("please fill out the form before submitting");
    } else {
   //--------------------------------------------
   // DRAW NEW CARD 
   //--------------------------------------------
    cardIndex = cardIndex + 1;
    const cardTemplate = document.querySelector('#myTemplate');

  // li element
  cardTemplate.content.querySelector('li').id = `listElement${cardIndex}`;
    const listElement = cardTemplate.content.querySelector('li');

  // card image
    const popupLink = document.querySelector('#link');
    const popupTitle = document.querySelector('#place');
    cardTemplate.content.querySelector('img').src = ` ${popupLink.value} `;
    cardTemplate.content.querySelector('img').alt = ` "${popupTitle.value}" ` ;
    cardTemplate.content.querySelector('img').id = `cardImage${cardIndex}`;

    const cardPicture = cardTemplate.content.querySelector('img');

  // card can  
  cardTemplate.content.querySelector('.canSymbol').id = `buttonCardCan${cardIndex}`;
    const buttonCardCan = cardTemplate.content.querySelector('.card-grid__garbage');

  // card words
  cardTemplate.content.querySelector('h2').textContent = popupTitle.value;
  cardTemplate.content.querySelector('h2').id = `cardName${[cardIndex]}`;


  // card heart
  cardTemplate.content.querySelector('.heartSymbol').id = `buttonHeart${cardIndex}`;
  cardTemplate.content.querySelector('.heartSymbol').name = 'buttonHeart';
  
    const clone = document.importNode(cardTemplate.content, true);
    document.querySelector('ul').prepend(clone);
    
    const currentHeartElement = document.querySelector(`#buttonHeart${cardIndex}`);
    const currentCanElement = document.querySelector(`#buttonCardCan${cardIndex}`);

    const currentCardPicture = document.querySelector(`#cardImage${cardIndex}`);
    currentCanElement.addEventListener('click', removePic);
    currentHeartElement.addEventListener('click', changeHeartColor);
    currentCardPicture.addEventListener('click', zoomPic); 

    const containerElement = document.querySelector('#picture-popup-container');
    closePopup(containerElement);
  }
}
 

//-----------------------------------------------
//  LISTEN - click on big X 'newPlace' form
//-----------------------------------------------
buttonCloseCard.addEventListener('click', closeAddCardPopup);

//-----------------------------------------------
//  FUNCTION 'closeAddCardPopup'
//-----------------------------------------------
    function closeAddCardPopup() {
    const containerElement = document.querySelector('#picture-popup-container');
    closePopup(containerElement);
}

//------------------------------------------------
//  HEART ICON
//------------------------------------------------

    const cardGridIcon = document.querySelectorAll('.heartSymbol');
    for (let i = 0; i < cardGridIcon.length; i++) {
    cardGridIcon[i].addEventListener('click',changeHeartColor);
}

    function changeHeartColor(anynameEvent) {

    if (document.getElementById(anynameEvent.target.id).src===
      "http://127.0.0.1:5500/images/heart.svg") {
    document.getElementById(anynameEvent.target.id).src = "images/Union.svg";
    } else {
    document.getElementById(anynameEvent.target.id).src = "images/heart.svg";
    }
}


