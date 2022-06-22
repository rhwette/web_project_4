// -----------------------------------------------
//  FUNCTION 'openPopup'
// -----------------------------------------------
export function openPopup(containerElement) {
  containerElement.classList.add("popup_visible");
  containerElement.addEventListener("mousedown", closePopupWithRemoteClick);
  document.addEventListener("keydown", closePopupWithEscape);
}

//-----------------------------------------------
//  FUNCTION 'closePopup'
//-----------------------------------------------
export function closePopup(containerElement) {
  containerElement.classList.remove("popup_visible");
  containerElement.removeEventListener("mousedown", closePopupWithRemoteClick);
  document.removeEventListener("keydown", closePopupWithEscape);
}

//-----------------------------------------------
//  FUNCTION 'closePopupWithEscape'
//-----------------------------------------------
function closePopupWithEscape(event) {
  if (event.key === "Escape") {
    const openedPopup = document.querySelector(".popup_visible");
    closePopup(openedPopup);
  }
}

//-----------------------------------------------
//  FUNCTION 'closePopupWithRemoteClick'
//-----------------------------------------------
function closePopupWithRemoteClick(event) {
  if (event.target === event.currentTarget) {
    closePopup(event.target);
  }
}
