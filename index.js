console.log('hello world');



//-----------------------------------------------
// open form when click on pencil
const introButtonPencilElement = document.querySelector('.intro__button-pencil');
console.log("test=", introButtonPencilElement);
const nameVariable = document.querySelector(".intro__name");
const aboutmeVariable = document.querySelector(".intro__occupation");
const popupFormButtonVariable = document.querySelector(".popup-form__button");
const popupFormName= document.querySelector(".popup-form__name");
const popupFormAboutMe=document.querySelector(".popup-form__aboutme");

console.log("popupFormName=",popupFormName);
function openModal() {
  popupFormName.value=nameVariable.textContent;
  popupFormAboutMe.value=aboutmeVariable.textContent;
  const containerElement = document.querySelector('.popup-container');
  containerElement.classList.add('popup-container_visible');
}

function  saveButton (evt) {
  console.log("evt=", evt);
 evt.preventDefault();
 console.log("button clickedddee");
 nameVariable.textContent = popupFormName.value;
 aboutmeVariable.textContent = popupFormAboutMe.value;
 closeModal();
}
introButtonPencilElement.addEventListener('click', openModal);
popupFormButtonVariable.addEventListener('click', saveButton);
// console.log('button was clicked');
//------------------------------------------------

//------------------------------------------------
// close form when click on big x
const popupFormButtonClose = document.querySelector('.popup-form__button-close');

function closeModal() {
  const containerElement = document.querySelector('.popup-container');
    containerElement.classList.remove('popup-container_visible');
}

popupFormButtonClose.addEventListener('click', closeModal);
console.log('big x was clicked');
//------------------------------------------------
//------------------------------------------------









