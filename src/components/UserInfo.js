const nameElement = document.querySelector(".intro__name");
const aboutMeElement = document.querySelector(".intro__occupation");
const popupEditProfileName = document.querySelector('input[name ="name"]');
const popupEditProfileAboutMe = document.querySelector(
  'input[name = "aboutme"]'
);

export default class UserInfo {
  constructor(nameElement, aboutMeElement) {
    this.nameElement = nameElement;
    this.aboutMeElement = aboutMeElement;
  }

  getUserInfo() {
    newObj = {
      userName: nameElement.textContent,
      userJob: aboutMeElement.textContent,
    };
    return newObj;
  }

  setUserInfo() {
    this.nameElement.textContent = this.popupEditProfileName.value;
    this.aboutMeElement.textContent = this.popupEditProfileAboutMe.value;
  }
}
