const formButton = document.querySelector(".competition-form__button");
const userSurname = document.querySelector("#user-surname");
const userName = document.querySelector("#username");
const userEmail = document.querySelector("#user-email");
const popupError = document.querySelector(".popup-error");
const errorButton = popupError.querySelector(".popup__button");
const popupSuccess = document.querySelector(".popup-success");
const successButton = popupSuccess.querySelector(".popup__button");

formButton.addEventListener("click",function(event){
  if (!userSurname.value || !userName.value || !userEmail.value) {
    popupError.classList.add("popup--active");
  } else {
    event.preventDefault();
    popupSuccess.classList.add("popup--active");
  }
})

errorButton.addEventListener("click",function(event){
  popupError.classList.remove("popup--active");
})

successButton.addEventListener("click",function(event){
  popupSuccess.classList.remove("popup--active");
})
