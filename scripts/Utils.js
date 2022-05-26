// -----------------------------------------------
//  FUNCTION 'openPopup'
// -----------------------------------------------
export function openPopup(containerElement) {
  containerElement.classList.add("popup-container_visible");
  containerElement.addEventListener("mousedown", closePopupWithRemoteClick);
  document.addEventListener("keydown", closePopupWithEscape);
}

//-----------------------------------------------
//  FUNCTION 'closePopup'
//-----------------------------------------------
export function closePopup(containerElement) {
  containerElement.classList.remove("popup-container_visible");
  containerElement.removeEventListener("mousedown", closePopupWithRemoteClick);
  document.removeEventListener("keydown", closePopupWithEscape);
}

//-----------------------------------------------
//  FUNCTION 'closePopupWithEscape'
//-----------------------------------------------
function closePopupWithEscape(event) {
  if (event.key === "Escape") {
    const openedPopup = document.querySelector(".popup-container_visible");
    closePopup(openedPopup);
  }
}

//-----------------------------------------------
//  FUNCTION 'closePopupWithRemoteClick'
//-----------------------------------------------
function closePopupWithRemoteClick(event) {
  if (event.target === event.currentTarget) {
    const openedPopup = document.querySelector(".popup-container_visible");
    closePopup(openedPopup);
  }
}
