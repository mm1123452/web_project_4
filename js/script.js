import { Card } from './Card.js'
import {Section} from './Section.js'
import {PopupWithImage} from './PopupWithImage.js'
import {PopupWithForm} from './PopupWithForm.js'
//import {UserInfo} from './UserInfo.js'
import { FormValidator } from './FormValidator.js'
// import {popupSelector} from './utils.js'
import { UserInfo } from './UserInfo.js';

//Edit popup


//Add place popup
// const addPlacePopup = document.querySelector(".popup_type_add-place");
// const addPlaceForm = addPlacePopup.querySelector(".popup__form");
// const addPlaceCaption = addPlacePopup.querySelector(".popup__name");
// const addPlaceImageLink = addPlacePopup.querySelector(".popup__about");

//Form data
const editPopup = document.querySelector(".popup_type_edit");
//const editForm = editPopup.querySelector(".popup__form");
let nameInput = editPopup.querySelector(".popup__name");
let aboutInput = editPopup.querySelector(".popup__about");

//DOM Elements
const profile = document.querySelector(".profile");
// const profileName = document.querySelector(".profile__name");
// const profileTitle = document.querySelector(".profile__title");
// const placeContainer = document.querySelector(".places");

const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
  },
  {
    name: "Lake Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
  },
  {
    name: "Bald Mountains",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg"
  },
  {
    name: "Vanois National Park",
    link: "https://code.s3.yandex.net/web-code/vanois.jpg"
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg"
  }
];

const enableValidation = ({ formSelector, ...rest }) => {
  const forms = Array.from(document.querySelectorAll(formSelector));

  forms.forEach(form => {
    const formValidation = new FormValidator(form, rest)
    formValidation.enableValidation()
  })
}

enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  errorClass: "popup__error_visible",
  inputErrorClass: "popup__input_type_error",
});

const handleProfileClick = (e) => {
  if (e.target.classList.contains("button_edit")) {

    const userInfo = new UserInfo({name: ".profile__name",job: ".profile__title"})
    const {name, job}  = userInfo.getUserInfo()
    nameInput.value = name;
    aboutInput.value = job;
    const popup = new PopupWithForm(
      '.popup_type_edit',
      (data) => {
        console.log(data)
        userInfo.setUserInfo(data)
        popup.close()
    })
    popup.open()
  } else if (e.target.classList.contains("button_add")) {
    const popup = new PopupWithForm(
      '.popup_type_add-place',
      (data) => {
       const {title:name, link} = data
        addCard({name,link})
        popup.close()
    })
    popup.open()
  }
}

const addCard = (item) => {
  const card = new Card(item, "#place-template", (item) => {
    const imagePopup = new PopupWithImage('.popup_type_large-image', item)
    imagePopup.open()
  })
  const cardElement = card.generateCard()
  placesCard.addItem(cardElement)
}

const placesCard = new Section({
  items: initialCards,
  renderer: addCard
}, ".places")

placesCard.renderItems()


profile.addEventListener("click", handleProfileClick)

