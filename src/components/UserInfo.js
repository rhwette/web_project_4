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
    const newObj = {
      userName: nameElement.textContent,
      userJob: aboutMeElement.textContent,
    };
    return newObj;
  }

  setUserInfo() {
    const newNewObj = {
      userNameNew: popupEditProfileName.value,
      userJobNew: popupEditProfileAboutMe.value,
    };
    return newNewObj;
  }
}
