
//-----------------------------------------------
// associate Elements with classes or ID's
//    introButtonPencilElement = button that activates form "Edit Profile"
//    nameElement = starting name on page
//    aboutMeElement = starting occupation on page
//    popupButtonSave = the 'SAVE' button on 'editProfile' form
//    popupButtonCreate = the 'Create' button on 'newPlace' Form
//    popupButtonCloseEditProfile = 'big X' on 'editProfile' form
//    popupButtonCloseNewPlace = 'big X' on 'newPlace' form
//    popupName = the name entered on form
//    popupAboutMe = the occupation enterd on form
//    introButtonPlusElement = button that activates form "New Place"
//-----------------------------------------------

const introButtonPencilElement = document.querySelector('.intro__button-pencil');
const nameElement = document.querySelector(".intro__name");
const aboutMeElement = document.querySelector(".intro__occupation");
const popupButtonSave= document.querySelector("#popupButtonSave");
const popupButtonCloseEditProfile = document.querySelector('#popupButtonCloseEditProfile');
const popupButtonCreate= document.querySelector("#popupButtonCreate");
const popupButtonCloseNewPlace = document.querySelector('#popupButtonCloseNewPlace');
const popupButtonCloseZoomPic = document.querySelector('#popupButtonCloseZoomPic');
const popupName=document.querySelector('input[name="name"]');
const popupAboutMe=document.querySelector('input[name="aboutme"]');
const introButtonPlusElement = document.querySelector('.intro__button-plus');


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


// //-----------------------------------------------
// //  FUNCTION 'drawPics'
// //-----------------------------------------------

function drawPics() {
  document.querySelector('.card-grid__format').innerHTML = "";
  for(let i=0; i< initialCards.length; i++) {
    listElement = document.createElement("li");
    listElement.className = "card-grid__style";
    listElement.id = `Style${[i]}`;
    listElement.innerHTML= ` <img class="card-grid__picture" id="image${[i]}" src="${initialCards[i]["link"]}" alt="location" title="${initialCards[i]['name']}"/>
    <button type="button" class="card-grid__garbage" ><img id="Button${[i]}" src="./images/garbage.svg" alt="garbage symbol"/></button>
    <div class="card-grid__info">
      <h2 class="card-grid__text block" id="Text${[i]}">${initialCards[i].name}</h2>
      <button type="button" class="card-grid__icon"><img id="place ${i}" src="./images/heart.svg" alt="heart" title="heart"/></button>
    </div>`;
    
   
  document.querySelector('.card-grid__format').append(listElement);

  // console.log('can id', `Button${[i]}`);

      const currentGarbageCan = document.querySelector(`#Button${[i]}`);
      currentGarbageCan.addEventListener('click', removePic);

      const currentImage = document.querySelector(`#image${[i]}`);
      currentImage.addEventListener('click', zoomPic);

    }
  };
  drawPics();

// //-----------------------------------------------
// //  FUNCTION 'removePic'
// //-----------------------------------------------
  function removePic(evtRemove) {
    let buttonID = evtRemove.target.id;
    let picIndex = buttonID.charAt(buttonID.length-1);
    initialCards.splice(picIndex,1);
    drawPics();
  }
 
  drawPics();

  
// //-----------------------------------------------
// //  FUNCTION 'zoomPic'
// //-----------------------------------------------

  function zoomPic (evtZoom) {
    let textId = evtZoom.target.id;
    let pictureIndex= textId.charAt(textId.length-1);
    zoomElement = document.createElement("img");
    zoomElement.className = "card-grid__picture-zoom";
    zoomElement.id = 'picture';
    zoomElement.src=`${initialCards[pictureIndex]["link"]}`;
    zoomElement.alt="locationx";
    zoomElement.title=`"${initialCards[pictureIndex]['name']}"`;
    document.querySelector('.image-popup').append(zoomElement);
    const containerElement = document.querySelector('#image-popup-container');
    containerElement.classList.add('popup-container_visible');
    drawPics();
  }

//-----------------------------------------------
//  LISTEN - click on big X zoomPic
//-----------------------------------------------
popupButtonCloseZoomPic.addEventListener('click', closeZoom);

//-----------------------------------------------
//  FUNCTION 'closeZoom'
//-----------------------------------------------
function closeZoom() {
    const containerElement = document.querySelector('#image-popup-container');
    containerElement.classList.remove('popup-container_visible');
    zoomElement.remove();
    drawPics();
}


//***********************************************
//-----------------------------------------------
//  CONTROLS FOR 'EDIT PROFILE POPUP'
//-----------------------------------------------
//***********************************************

//-----------------------------------------------
//  LISTEN for clicks on introButtonPencil and on popupButtonSAVE
//-----------------------------------------------
introButtonPencilElement.addEventListener('click', openModal1);
popupButtonSave.addEventListener('click', saveButton);

//-----------------------------------------------
//  FUNCTION 'openModal1'
//-----------------------------------------------  
function openModal1(evtEditProfile) {
  popupName.value=nameElement.textContent;
  popupAboutMe.value=aboutMeElement.textContent;
  const containerElement = document.querySelector('#person-popup-container');
  containerElement.classList.add('popup-container_visible');
}
//-----------------------------------------------
//  FUNCTION 'saveButton'
//-----------------------------------------------
function  saveButton (evtSave) {
  evtSave.preventDefault();
  if (popupName.value === "" || popupAboutMe.value === "") {
    alert("please fill out the form before submitting");
  } else {  nameElement.textContent = popupName.value;
    aboutMeElement.textContent = popupAboutMe.value;
    closeModal1()}
}

//-----------------------------------------------
//  LISTEN - click on big X 'editProfile' form
//-----------------------------------------------
popupButtonCloseEditProfile.addEventListener('click', closeModal1);

//-----------------------------------------------
//  FUNCTION 'closeModal1'
//-----------------------------------------------
function closeModal1() {
  const containerElement = document.querySelector('#person-popup-container');
    containerElement.classList.remove('popup-container_visible');
}

//***********************************************
//-----------------------------------------------
//  CONTROLS FOR 'NEW PLACE POPUP'
//-----------------------------------------------
//***********************************************

//-----------------------------------------------
//  LISTEN for clicks on introButtonPlus and on popupButtonCreate
//-----------------------------------------------
introButtonPlusElement.addEventListener('click', openModal2);
popupButtonCreate.addEventListener('click', createButton);

//-----------------------------------------------
//  FUNCTION 'openModal2'
//-----------------------------------------------  
function openModal2(evtNewPlace) {
  const popupTitle= document.querySelector('#place');
  const popupLink= document.querySelector('#link');
  popupTitle.value = "";
  popupLink.value= "";
  const containerElement = document.querySelector('#picture-popup-container');
  containerElement.classList.add('popup-container_visible');
  }

//-----------------------------------------------
//  FUNCTION 'createButton'
//-----------------------------------------------
function  createButton (evtCreate) {
  evtCreate.preventDefault();
  const popupTitle= document.querySelector('#place');
  console.log('popupTitle', popupTitle);
  console.log('popupTitle.value', popupTitle.value);
  const popupLink= document.querySelector('#link');
  console.log('popupLink', popupLink);
  console.log('popupLink.value', popupLink.value);
  if (popupTitle.value === "" || popupLink.value === "") {
    alert("please fill out the form before submitting");
  } else {
 
  initialCards.unshift({name: popupTitle.value, link: popupLink.value});
    if (initialCards.length > 6) {
      initialCards.pop()
    };
  drawPics();
  closeModal2();
  }
 }

//-----------------------------------------------
//  LISTEN - click on big X 'newPlace' form
//-----------------------------------------------
popupButtonCloseNewPlace.addEventListener('click', closeModal2);


//-----------------------------------------------
//  FUNCTION 'closeModal2'
//-----------------------------------------------
function closeModal2() {
  const containerElement = document.querySelector('#picture-popup-container');
  containerElement.classList.remove('popup-container_visible');
}

// //------------------------------------------------
// //  HEART ICON
// //------------------------------------------------

const cardGridInfo = document.querySelectorAll('.card-grid__icon');
for(let i=0; i<cardGridInfo.length; i++){
  cardGridInfo[i].addEventListener('click',changeHeartColor);
}

cardGridInfo.forEach((anyElement) => {
})

function changeHeartColor(anynameEvent) {
  if(document.getElementById(anynameEvent.target.id).src==="http://127.0.0.1:5500/images/heart.svg") {
    document.getElementById(anynameEvent.target.id).src="./images/Union.svg";
  } else {
    document.getElementById(anynameEvent.target.id).src="./images/heart.svg";
  }
}