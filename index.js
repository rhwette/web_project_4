
//-----------------------------------------------
// associate variables with classes or ID's
//    introButtonPencilElement = button that activates form "Edit Profile"
//    nameVariable = starting name on page
//    aboutMeVariable = starting occupation on page
//    popupButtonSave = the 'SAVE' button on 'editProfile' form
//    popupButtonCreate = the 'Create' button on 'newPlace' Form
//    popupButtonCloseEditProfile = 'big X' on 'editProfile' form
//    popupButtonCloseNewPlace = 'big X' on 'newPlace' form
//    popupName = the name entered on form
//    popupAboutMe = the occupation enterd on form
//    introButtonPlusElement = button that activates form "New Place"
//-----------------------------------------------

const introButtonPencilElement = document.querySelector('.intro__button-pencil');
console.log('introButtonPencilElement', introButtonPencilElement);
const nameVariable = document.querySelector(".intro__name");
console.log('nameVariable', nameVariable);
const aboutmeVariable = document.querySelector(".intro__occupation");
console.log('aboutmeVariable', aboutmeVariable);
const popupButtonSave= document.querySelector("#popupButtonSave");
console.log('popupButtonSave', popupButtonSave);
const popupButtonCloseEditProfile = document.querySelector('#popupButtonCloseEditProfile');
console.log('popupButtonCloseEditProfile', popupButtonCloseEditProfile);
const popupButtonCreate= document.querySelector("#popupButtonCreate");
console.log('popupButtonCreate', popupButtonCreate);
const popupButtonCloseNewPlace = document.querySelector('#popupButtonCloseNewPlace');
console.log('popupButtonCloseNewPlace', popupButtonCloseNewPlace);
const popupName=document.querySelector('input[name="name"]');
console.log('popupName', popupName);
const popupAboutMe=document.querySelector('input[name="aboutme"]');
console.log('popupAboutMe', popupAboutMe);
const introButtonPlusElement = document.querySelector('.intro__button-plus');
console.log('introButtonPlusElement', introButtonPlusElement);
console.log('++++++++++++++++++++++++++++++++++++++');


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
// //  FUNCTION 'removePic'
// //-----------------------------------------------

function drawPics() {
  document.querySelector('.card-grid__format').innerHTML = "";
      // console.log('++++++++++++++++++++++++++++++++++++++');
  for(let i=0; i< initialCards.length; i++) {
      // console.log('xxxxxxxxxxxxxxxxx start loop', i , 'xxxxxxxxxxxxxxxx');
    listElement = document.createElement("li");
      // console.log(' listElement', i, listElement);
    listElement.className = "card-grid__style";
      // console.log(' listElement.classname', i, listElement.className);
    // listElement.id = `${cardGridGarbageButton[i]}Style`;
    listElement.id = `Style${[i]}`;
    listElement.innerHTML= `<img class="card-grid__picture" src="${initialCards[i]["link"]}" alt="location" title="${initialCards[i]['name']}"/>
    <button type="button" class="card-grid__garbage" ><img id="Button${[i]}" src="./images/garbage.svg" alt="garbage symbol"/></button>
    <div class="card-grid__info">
      <h2 class="card-grid__text block">${initialCards[i].name}</h2>
      <button type="button" class="card-grid__icon"><img id="place ${i}" src="./images/heart.svg" alt="heart" title="heart"/></button>
    </div>`
      console.log('YYYYYYYYYYYYYYYYYYYYYYYYYY');
   
  document.querySelector('.card-grid__format').append(listElement);

      // const currentGarbageCan = document.querySelector(`#${cardGridGarbageButton[i]}Button`);
      const currentGarbageCan = document.querySelector(`#Button${[i]}`);
      console.log('currentGarbageCan', currentGarbageCan);

      currentGarbageCan.addEventListener('click', removePic);

    }
 
  };
  function removePic(evtRemove) {
    let buttonID = evtRemove.target.id;
    let picIndex = buttonID.charAt(buttonID.length-1);
    console.log('picIndex', picIndex);

    initialCards.splice(picIndex,1);
    console.log('array at picindex', initialCards);
    drawPics();
  }
  
  drawPics();

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
  console.log( 'evtEditProfile:', evtEditProfile);
  popupName.value=nameVariable.textContent;
  popupAboutMe.value=aboutmeVariable.textContent;
  const containerElement = document.querySelector('#person-popup-container');
  console.log("popup container:" , containerElement);
  containerElement.classList.add('popup-container_visible');
}
//-----------------------------------------------
//  FUNCTION 'saveButton'
//-----------------------------------------------
function  saveButton (evtSave) {
  evtSave.preventDefault();
  nameVariable.textContent = popupName.value;
  aboutmeVariable.textContent = popupAboutMe.value;
  closeModal1();
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
  console.log( 'evtNewPlace:', evtNewPlace);
  const popupTitle= document.querySelector('#place');
  const popupLink= document.querySelector('#link');
  popupTitle.value = "";
  popupLink.value= "";
  const containerElement = document.querySelector('#picture-popup-container');
  console.log("popup container:" , containerElement);
  containerElement.classList.add('popup-container_visible');
  }

//-----------------------------------------------
//  FUNCTION 'createButton'
//-----------------------------------------------
function  createButton (evtCreate) {
  evtCreate.preventDefault();
  const popupTitle= document.querySelector('#place');
  const popupLink= document.querySelector('#link');
 
  initialCards.unshift({name: popupTitle.value, link: popupLink.value});
    if (initialCards.length > 6) {
      initialCards.pop()
    };
    console.log('entire array',initialCards);
  drawPics();
  closeModal2();
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
  console.log('close modal2');
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
  console.log('event:',anynameEvent.target.id)
  console.log('test:',(document.getElementById(anynameEvent.target.id).src))
  if(document.getElementById(anynameEvent.target.id).src==="http://127.0.0.1:5500/images/heart.svg") {
    document.getElementById(anynameEvent.target.id).src="./images/Union.svg";
  } else {
    document.getElementById(anynameEvent.target.id).src="./images/heart.svg";
  }
}