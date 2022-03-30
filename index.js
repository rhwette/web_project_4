
//-----------------------------------------------
// associate variables with classes
//    introButtonPencil = button that activates form
//    nameVariable = starting name on form
//    aboutMeVariable = starting occupation on form
//    popupFormButton = the 'SAVE' button on form
//    popupFormName = the name entered on form
//    popupAboutMe = the occupation enterd on form
//-----------------------------------------------
const introButtonPencilElement = document.querySelector('.intro__button-pencil');
const nameVariable = document.querySelector(".intro__name");
const aboutmeVariable = document.querySelector(".intro__occupation");
const popupButtonVariable = document.querySelector(".popup__button");
const popupName=document.querySelector('input[name="name"]');
const popupAboutMe=document.querySelector('input[name="aboutme"]');
//-----------------------------------------------

//-----------------------------------------------
//  define function to open the Modal
//-----------------------------------------------  
function openModal() {
  popupName.value=nameVariable.textContent;
  popupAboutMe.value=aboutmeVariable.textContent;
  const containerElement = document.querySelector('.popup-container');
  containerElement.classList.add('popup-container_visible');
}
//-----------------------------------------------

//-----------------------------------------------
//  define function that controls form input and SAVE event
//-----------------------------------------------
function  saveButton (evt) {
 evt.preventDefault();
 nameVariable.textContent = popupName.value;
 aboutmeVariable.textContent = popupAboutMe.value;
 closeModal();
}
//-----------------------------------------------

//-----------------------------------------------
//  listen for clicks on Pencil and on SAVE
introButtonPencilElement.addEventListener('click', openModal);
popupButtonVariable.addEventListener('click', saveButton);
//-----------------------------------------------


//------------------------------------------------
// define variable for closing Modal
const popupButtonClose = document.querySelector('.popup__button-close');
//-----------------------------------------------

//-----------------------------------------------
//  define function to close the Modal
function closeModal() {
  const containerElement = document.querySelector('.popup-container');
    containerElement.classList.remove('popup-container_visible');
}
//-----------------------------------------------

//-----------------------------------------------
//  listen for click on big X
popupButtonClose.addEventListener('click', closeModal);
//------------------------------------------------









