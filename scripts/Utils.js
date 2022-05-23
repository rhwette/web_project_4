class Utils {
  constructor() {}

  // -----------------------------------------------
  //  FUNCTION 'openPopup'
  // -----------------------------------------------
  openPopup(containerElement) {
    console.log("UTIL JS FUNCTION OPENPOPUP");
    console.log(
      "UTIL JS FUNCTION OPENPOPUP -- containerElement = ",
      containerElement
    );

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
    console.log("UTIL FUNCTION CLOSEPOPUP");
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
    console.log("UTIL FUNCTION CLOSEPOPUP WITH ESCAPE");
    if (event.key === "Escape") {
      const openedPopup = document.querySelector(".popup-container_visible");
      console.log("openedPopup", openedPopup);
      openedPopup.classList.remove("popup-container_visible");
    }
  }

  //-----------------------------------------------
  //  FUNCTION 'closePopupWithRemoteClick'
  //-----------------------------------------------
  closePopupWithRemoteClick(event) {
    console.log("UTIL FUNCTION CLOSEPOPUP WITH REMOTE CLICK");
    console.log("event.target", event.target);
    console.log("event.currentTarget", event.currentTarget);
    if (event.target === event.currentTarget) {
      const openedPopup = document.querySelector(".popup-container_visible");
      console.log("openedPopup", openedPopup);
      openedPopup.classList.remove("popup-container_visible");
    }
  }
}

export default Utils;
