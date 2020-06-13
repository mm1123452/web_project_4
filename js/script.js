import { Card } from './Card.js'
import { FormValidator } from './FormValidator.js'
import {popupSelector} from './utils.js'

//Edit popup
const editPopup = document.querySelector(".popup_type_edit");
const editForm = editPopup.querySelector(".popup__form");

//Add place popup
const addPlacePopup = document.querySelector(".popup_type_add-place");
const addPlaceForm = addPlacePopup.querySelector(".popup__form");
const addPlaceCaption = addPlacePopup.querySelector(".popup__name");
const addPlaceImageLink = addPlacePopup.querySelector(".popup__about");

//Form data
const nameInput = editForm.querySelector(".popup__name");
const aboutInput = editForm.querySelector(".popup__about");

//DOM Elements
const profile = document.querySelector(".profile");
const profileName = document.querySelector(".profile__name");
const profileTitle = document.querySelector(".profile__title");
const placeContainer = document.querySelector(".places");

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

const addCard = (data) => {
  const card = new Card(data, "#place-template")
  const cardElement = card.generateCard()
  placeContainer.append(cardElement);
}

const editFormSubmitHandler = (evt) => {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileTitle.textContent = aboutInput.value;
}

const formReset = (form) => {
  const button = form.querySelector('.popup__button')

  form.reset();
  button.disabled = true;
  button.classList.add('popup__button_disabled')
}

const addPlaceFormSubmitHandler = (evt) => {
  evt.preventDefault();
  const name = addPlaceCaption.value;
  const link = addPlaceImageLink.value;

  addCard({ name, link });
  formReset(evt.target);
}

const renderCards = (cardArray) => {
  cardArray.forEach(card => addCard(card));
}

const enableValidation = ({ formSelector, ...rest }) => {
  const forms = Array.from(document.querySelectorAll(formSelector));

  forms.forEach(form => {
    const formValidation = new FormValidator(form, rest)
    formValidation.enableValidation()
  })
}

const handleOpen = (e) => {
  if (e.target.classList.contains("button_edit")) {
    const data = { name: profileName.textContent, title: profileTitle.textContent }
    popupSelector('edit', '.popup_type_edit',data)
  } else if (e.target.classList.contains('button_add')) {
    popupSelector('add','.popup_type_add-place')
  }
}

enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  errorClass: "popup__error_visible",
  inputErrorClass: "popup__input_type_error",
});


//EVENT LISTENERS
const addEventListenerCreator = (element, type, callback) => {
  element.addEventListener(type, callback);
}

addEventListenerCreator(window, "load", renderCards.bind(null, initialCards));
addEventListenerCreator(addPlaceForm, "submit", addPlaceFormSubmitHandler);
addEventListenerCreator(editForm, "submit", editFormSubmitHandler);
addEventListenerCreator(profile, "click", handleOpen);

