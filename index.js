
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
// const popupFormButtonVariable = document.querySelector(".popup-form__button");
const popupFormButtonVariable = document.querySelector(".popup__form_button");
const popupFormName=document.querySelector('input[name="name"]');
const popupFormAboutMe=document.querySelector('input[name="aboutme"]');
//-----------------------------------------------

//-----------------------------------------------
//  define function to open the Modal
//-----------------------------------------------  
function openModal() {
  popupFormName.value=nameVariable.textContent;
  popupFormAboutMe.value=aboutmeVariable.textContent;
  const containerElement = document.querySelector('.popup-container');
  containerElement.classList.add('popup-container_visible');
}
//-----------------------------------------------

//-----------------------------------------------
//  define function that controls form input and SAVE event
//-----------------------------------------------
function  saveButton (evt) {
 evt.preventDefault();
 nameVariable.textContent = popupFormName.value;
 aboutmeVariable.textContent = popupFormAboutMe.value;
 closeModal();
}
//-----------------------------------------------

//-----------------------------------------------
//  listen for clicks on Pencil and on SAVE
introButtonPencilElement.addEventListener('click', openModal);
popupFormButtonVariable.addEventListener('click', saveButton);
//-----------------------------------------------


//------------------------------------------------
// define variable for closing Modal
// const popupFormButtonClose = document.querySelector('.popup-form__button-close');
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
// popupFormButtonClose.addEventListener('click', closeModal);
popupButtonClose.addEventListener('click', closeModal);
//------------------------------------------------









