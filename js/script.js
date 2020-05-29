const popupContainer = Array.from(document.querySelectorAll(".popup"));
//Edit popup
const editPopup = document.querySelector(".popup_type_edit");
const editForm = editPopup.querySelector(".popup__form");
const editExit = editPopup.querySelector(".popup__exit");
const editError = editForm.querySelectorAll(".popup__input_type_error")
const editFormSubmit = editForm.querySelector(".popup__button");

//Add place popup
const addPlacePopup = document.querySelector(".popup_type_add-place");
const addPlaceForm = addPlacePopup.querySelector(".popup__form");
const addPlaceCaption = addPlacePopup.querySelector(".popup__name");
const addPlaceImageLink = addPlacePopup.querySelector(".popup__about");
const addPlacePopupExit = addPlacePopup.querySelector(".popup__exit");
const addPlacePopupsubmit = addPlacePopup.querySelector(".popup__button");
const addPlaceError = addPlaceForm.querySelectorAll(".popup__input_type_error")
addPlacePopupsubmit.disabled = true;

// Large Image popup
const largeImagePopup = document.querySelector(".popup_type_large-image");
const largeImage = largeImagePopup.querySelector(".popup__image");
const largeImageTitle = largeImagePopup.querySelector(".popup__image-title");
const largeImageExit = largeImagePopup.querySelector(".popup__exit");

//Form data
const nameInput = editForm.querySelector(".popup__name");
const aboutInput = editForm.querySelector(".popup__about");

//DOM Elements
const profile = document.querySelector(".profile");
const profileName = document.querySelector(".profile__name");
const profileTitle = document.querySelector(".profile__title");
const placeContainer = document.querySelector(".places");
const cardTemplate = document.querySelector("#place-template").content;

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

const addCard = (card) => {
  const { name, link } = card;
  const placeElement = cardTemplate.cloneNode(true);
  const likeIcon = placeElement.querySelector(".place__icon");
  const deleteIcon = placeElement.querySelector(".place__delete");
  const image = placeElement.querySelector(".place__image");
  const placeName = placeElement.querySelector(".place__name");

  placeName.textContent = name;
  image.src = link;
  image.alt = name;

  likeIcon.addEventListener("click", () => {
    likeIcon.classList.toggle("place__icon_liked");
  })

  deleteIcon.addEventListener("click", (evt) => {
    const parentElenment = evt.target.parentElement;
    parentElenment.remove();
  })

  image.addEventListener("click", () => {
    largeImageTitle.textContent = '';
    largeImage.src = '';
    largeImageTitle.textContent = placeName.textContent;
    largeImage.src = image.src;

    togglePopUp(largeImagePopup);
    addEventListenerCreator(window, 'click', handleClick);
    addEventListenerCreator(window, 'keydown', handlePress);
  })
  placeContainer.append(placeElement);
}

const togglePopUp = (element) => {
  element.classList.toggle("popup_opened");

  if (!element.classList.contains("popup_opened")) {
    window.removeEventListener("click", handleClick);
    window.removeEventListener("keydown", handlePress);
  }
}

const editFormSubmitHandler = (evt) => {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileTitle.textContent = aboutInput.value;
  togglePopUp(editPopup);
}

const formReset = (form) => {
  form.reset();
}

const addPlaceFormSubmitHandler = (evt) => {
  evt.preventDefault();
  const name = addPlaceCaption.value;
  const link = addPlaceImageLink.value;

  addCard({ name, link });
  togglePopUp(addPlacePopup);
  formReset(evt.target);
}

const renderCards = (cardArray) => {
  cardArray.forEach(card => addCard(card));
}

const clearErrorField = (element) => {
  element.classList.remove('popup__error_visible')
}

const enableButton = (element) => {
  if (element.classList.contains('popup__button_disabled')) {
    element.classList.remove('popup__button_disabled')
    element.disabled = false;
  }
}

const handleOpen = (e) => {
  if (e.target.classList.contains("button_edit")) {
    //Clear previous errors
    editError.forEach(errorField => clearErrorField(errorField))
    enableButton(editFormSubmit)

    nameInput.value = profileName.textContent;
    aboutInput.value = profileTitle.textContent;

    togglePopUp(editPopup);
  } else if (e.target.classList.contains('button_add')) {

    addPlaceError.forEach(errorField => clearErrorField(errorField))
    togglePopUp(addPlacePopup);
  }
  addEventListenerCreator(window, 'click', handleClick);
  addEventListenerCreator(window, 'keydown', handlePress);
}

const handleClose = (e, popup, form) => {
  e.preventDefault();
  e.stopPropagation();

  if (e.target.classList.contains("popup__container") ||
    e.target.classList.contains("popup__exit")) {
    togglePopUp(popup);
    if (form) {
      formReset(form);
    }
  }
}

const handlePress = (e) => {
  const open = document.querySelector(".popup_opened");
  if (e.key === 'Escape' && open) {
    togglePopUp(open);
  }
}

const handleClick = (e) => {
  if (e.target.classList.contains("popup__container")) {
    togglePopUp(e.target.parentElement);
  }
}

//EVENT LISTENERS
const addEventListenerCreator = (element, type, callback) => {
  element.addEventListener(type, callback);
}

addEventListenerCreator(window, "load", renderCards.bind(null, initialCards));
addEventListenerCreator(addPlaceForm, "submit", addPlaceFormSubmitHandler);
addEventListenerCreator(editForm, "submit", editFormSubmitHandler);
addEventListenerCreator(profile, "click", handleOpen);
addEventListenerCreator(largeImageExit, "click", togglePopUp.bind(null, largeImagePopup));
addEventListenerCreator(editExit, "click", (e) => handleClose(e, editPopup, editForm));
addEventListenerCreator(addPlacePopupExit, "click", (e) => handleClose(e, addPlacePopup, addPlaceForm));
