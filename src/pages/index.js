import "./index.css"
import { Card } from '../components/Card.js'
import {Section} from '../components/Section.js'
import {PopupWithImage} from '../components/PopupWithImage.js'
import {PopupWithForm} from '../components/PopupWithForm.js'
import { FormValidator } from '../components/FormValidator.js'
import { UserInfo } from '../components/UserInfo.js';
import {initialCards, nameInput, aboutInput, profile } from '../utils/constants.js'

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

