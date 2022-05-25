// class Utils {
// constructor() {}

// -----------------------------------------------
//  FUNCTION 'openPopup'
// -----------------------------------------------
// export const openPopup = function (containerElement) {
export function openPopup(containerElement) {
  // openPopup(containerElement) {
  console.log("22 UTILS.JS FUNCTION OPENPOPUP");
  containerElement.classList.add("popup-container_visible");

  containerElement.addEventListener("mousedown", closePopupWithRemoteClick);
  console.log("33 UTILS.JS FUNCTION OPENPOPUP  LISTEN FOR ESCAPE");
  document.addEventListener("keydown", closePopupWithEscape);
}

//-----------------------------------------------
//  FUNCTION 'closePopup'
//-----------------------------------------------
// export const closePopup = function (containerElement) {
export function closePopup(containerElement) {
  // closePopup(containerElement) {
  console.log("UTILS.JS FUNCTION CLOSEPOPUP");
  containerElement.classList.remove("popup-container_visible");
  containerElement.removeEventListener("mousedown", closePopupWithRemoteClick);
  document.removeEventListener("keydown", closePopupWithEscape);
  // containerElement.removeEventListener("mousedown", closePopupWithRemoteClick);
  // document.removeEventListener("keydown", closePopupWithEscape);
}

//-----------------------------------------------
//  FUNCTION 'closePopupWithEscape'
//-----------------------------------------------
// export const closePopupWithEscape = function (event) {
function closePopupWithEscape(event) {
  // closePopupWithEscape(event) {
  console.log("55a UTILS.JS FUNCTION CLOSEPOPUPWITHESCAPE");
  if (event.key === "Escape") {
    console.log("55b UTILS.JS FUNCTION CLOSEPOPUPWITHESCAPE");
    console.log("55c UTILS.JS FUNCTION CLOSEPOPUPWITHESCAPE - event = ", event);
    const openedPopup = document.querySelector(".popup-container_visible");
    console.log(
      "55d UTILS.JS FUNCTION CLOSEPOPUPWITHESCAPE - openedPopup =",
      openedPopup
    );
    console.log(
      "55e UTILS.JS FUNCTION CLOSEPOPUPWITHESCAPE - openedPopup.classList =",
      openedPopup.classList
    );
    document.removeEventListener("keydown", this.closePopupWithEscape);
    openedPopup.classList.remove("popup-container_visible");
    console.log(
      "55f UTILS.JS FUNCTION CLOSEPOPUPWITHESCAPE - openedPopup.classList =",
      openedPopup.classList
    );
    // console.log("55g should go to closePopup");
    // closePopup(openedPopup);
  }
}

//-----------------------------------------------
//  FUNCTION 'closePopupWithRemoteClick'
//-----------------------------------------------
// export const closePopupWithRemoteClick = function (event) {
function closePopupWithRemoteClick(event) {
  // closePopupWithRemoteClick(event) {
  if (event.target === event.currentTarget) {
    const openedPopup = document.querySelector(".popup-container_visible");
    openedPopup.classList.remove("popup-container_visible");
  }
}

// export default Utils;
