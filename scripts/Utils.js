class Utils {
  constructor() {}

  // -----------------------------------------------
  //  FUNCTION 'openPopup'
  // -----------------------------------------------
  openPopup(containerElement) {
    containerElement.classList.add("popup-container_visible");

    containerElement.addEventListener(
      "mousedown",
      this.closePopupWithRemoteClick
    );

    document.addEventListener("keydown", this.closePopupWithEscape);
  }

  //-----------------------------------------------
  //  FUNCTION 'closePopup'
  //-----------------------------------------------
  closePopup(containerElement) {
    containerElement.classList.remove("popup-container_visible");
    containerElement.removeEventListener(
      "mousedown",
      this.closePopupWithRemoteClick
    );
    document.removeEventListener("keydown", this.closePopupWithEscape);
  }

  //-----------------------------------------------
  //  FUNCTION 'closePopupWithEscape'
  //-----------------------------------------------
  closePopupWithEscape(event) {
    if (event.key === "Escape") {
      const openedPopup = document.querySelector(".popup-container_visible");
      openedPopup.classList.remove("popup-container_visible");
    }
  }

  //-----------------------------------------------
  //  FUNCTION 'closePopupWithRemoteClick'
  //-----------------------------------------------
  closePopupWithRemoteClick(event) {
    if (event.target === event.currentTarget) {
      const openedPopup = document.querySelector(".popup-container_visible");
      openedPopup.classList.remove("popup-container_visible");
    }
  }
}

export default Utils;
