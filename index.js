
//-----------------------------------------------
// associate variables with classes
//    introButtonPencilElement = button that activates form "Edit Profile"
//    nameVariable = starting name on form
//    aboutMeVariable = starting occupation on form
//    popupButtonSave = the 'SAVE' button on 'editProfile' form
//    popupButtonCreate = the 'Create' button on 'newPlace' Form
//    popupButtonCloseEditProfile = 'big X' on 'editProfile' form
//    popupButtonCloseNewPlace = 'big X' on 'newPlace' form
//    popupName = the name entered on form
//    popupAboutMe = the occupation enterd on form
//    introButtonPlusElement = button that activates form "New Place"
//-----------------------------------------------

const introButtonPencilElement = document.querySelector('.intro__button-pencil');
console.log('introButtonPencilElement',introButtonPencilElement);
const nameVariable = document.querySelector(".intro__name");
const aboutmeVariable = document.querySelector(".intro__occupation");
const popupButtonSave= document.querySelector("#popupButtonSave");
const popupButtonCloseEditProfile = document.querySelector('#popupButtonCloseEditProfile');
const popupButtonCreate= document.querySelector("popupButtonCreate");
const popupButtonCloseNewPlace = document.querySelector('#popupButtonCloseNewPlace');
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
  // popupName.value=nameVariable.textContent;
  // popupAboutMe.value=aboutmeVariable.textContent;
    const containerElement = document.querySelector('#picture-popup-container');
    console.log("popup container:" , containerElement);
    containerElement.classList.add('popup-container_visible');
  }

//-----------------------------------------------
//  FUNCTION 'createButton'
//-----------------------------------------------
function  createButton (evtCreate) {
  evtCreate.preventDefault();
  // ???????????????????????delete or replace?????????????????????????????????
  // nameVariable.textContent = popupName.value;
  // aboutmeVariable.textContent = popupAboutMe.value;
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
}







//------------------------------------------------
//  Below code will handle the 'heart' status
//------------------------------------------------

// const cardGridInfo = document.querySelectorAll('.card-grid__icon');
// console.log('cardGridInfo:', cardGridInfo);
// for(let i=0; i<cardGridInfo.length; i++){
//   console.log('cardGridInfo at index i:',cardGridInfo[i])
//   cardGridInfo[i].addEventListener('click',changeHeartColor);
// }

// cardGridInfo.forEach((anyElement) => {
//   console.log('anyElement:', anyElement);
// })

// console.log('cardGridInfo after listen:', cardGridInfo);


// function changeHeartColor(anynameEvent) {
//   console.log('event:',anynameEvent.target.id)
//   console.log('test:',(document.getElementById(anynameEvent.target.id).src))
//   if(document.getElementById(anynameEvent.target.id).src==="http://127.0.0.1:5500/images/heart.svg") {
//     document.getElementById(anynameEvent.target.id).src="./images/Union.svg";
//   } else {
//     document.getElementById(anynameEvent.target.id).src="./images/heart.svg";
//   }
// }









