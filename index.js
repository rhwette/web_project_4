console.log('hello world');

// let artistName = document.querySelector(".intro__name").textContent;

//-----------------------------------------------
// open form when click on pencil
const introButtonPencilElement = document.querySelector('.intro__button-pencil');

function openModal() {
  const containerElement = document.querySelector('.popup-container');
  containerElement.classList.add('popup-container_visible');
}

introButtonPencilElement.addEventListener('click', openModal);
console.log('button was clicked');
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
const popupFormName = document.querySelector(".popup-form__name");
console.log(popupFormName);

const nameVariable = document.querySelector(".intro__name");
console.log(nameVariable);
nameVariable.setAttribute('name', popupFormName);

console.log(nameVariable);






