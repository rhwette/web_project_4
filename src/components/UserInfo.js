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
    console.log("enter getUserInfo method");
    const newObj = {
      userName: nameElement.textContent,
      userJob: aboutMeElement.textContent,
    };
    console.log("newObj=", newObj);
    console.log("newObj.userName=", newObj.userName);
    return newObj;
  }

  setUserInfo() {
    console.log("enter setUserInfo method");
    const newNewObj = {
      // note the two lines below didnt work
      // userNameNew: nameElement.textContent,
      // userJobNew: aboutMeElement.textContent,
      userNameNew: popupEditProfileName.value,
      userJobNew: popupEditProfileAboutMe.value,
    };
    console.log("popupEditProfileName.value=", popupEditProfileName.value);
    console.log("newNewObj=", newNewObj);
    console.log("newNewObj.userNameNew=", newNewObj.userNameNew);
    return newNewObj;
  }
}
