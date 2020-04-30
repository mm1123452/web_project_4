//Buttons
const editButton = document.querySelector('.button_edit');
const addPlaceButton = document.querySelector('.button_add');

//Edit popup
const editPopup = document.querySelector('.popup_type_edit');
const editPopupExitButton = editPopup.querySelector('.popup__exit');
const editForm = editPopup.querySelector('.popup__form');

//Form data
const nameInput = editForm.querySelector('.popup__name');
const aboutInput = editForm.querySelector('.popup__about');

//Add place popup
const addPlacePopup = document.querySelector('.popup_type_add-place');
const addPlacePopupExitButton = addPlacePopup.querySelector('.popup__exit');
const addPlaceForm = addPlacePopup.querySelector('.popup__form');
const addPlaceCaption = addPlacePopup.querySelector('.popup__name');
const addPlaceImageLink = addPlacePopup.querySelector('.popup__about');

//DOM Elements
const profileName =  document.querySelector('.profile__name');
const profileTitle =  document.querySelector('.profile__title');
const placeContainer = document.querySelector('.places');
const cardTemplate = document.querySelector("#place-template").content

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

function addCard(card) {
  const {name,link} = card
  const placeElement =  cardTemplate.cloneNode(true)
  const likeIcon = placeElement.querySelector(".place__icon")
  const deleteIcon = placeElement.querySelector(".place__delete")

  placeElement.querySelector(".place__name").textContent = name;
  placeElement.querySelector(".place__image").src = link;
  placeElement.querySelector(".place__image").alt = name

 likeIcon.addEventListener('click', () => {
    console.log('heart clicked')
    //TODO implement icon button handler
  })

  deleteIcon.addEventListener('click', () => {
    console.log('delete clicked')
    //TODO implement icon button handler
 })

   //TODO implement enlarge image

  placeContainer.append(placeElement)
}

function togglePopUp(element) {
  if (!element.classList.contains('popup_opened')) {
    nameInput.value = profileName.textContent
    aboutInput.value = profileTitle.textContent
  }

  element.classList.toggle('popup_opened')
}


function editFormSubmitHandler (evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value
  profileTitle.textContent = aboutInput.value
  togglePopUp(editPopup)
}

function addPlaceFormSubmitHandler (evt) {
  evt.preventDefault();

  const name = addPlaceCaption.value
  const link = addPlaceImageLink.value

  addCard({name,link})
  togglePopUp(addPlacePopup)
  addPlaceCaption.value = ''
  addPlaceImageLink.value = ''
}


//EVENT LISTENERS
window.addEventListener('load', () => {
  initialCards.forEach((card) => addCard(card))
});

editButton.addEventListener('click', (e) => {
  e.preventDefault()
  togglePopUp(editPopup)
})

editPopupExitButton.addEventListener('click', (e) => {
  e.preventDefault()
  togglePopUp(editPopup)
})

addPlacePopupExitButton.addEventListener('click', (e) => {
  e.preventDefault()
  togglePopUp(addPlacePopup)
})

addPlaceButton.addEventListener('click', (e) => {
  e.preventDefault()
  togglePopUp(addPlacePopup)
})

editForm.addEventListener('submit', editFormSubmitHandler)
addPlaceForm.addEventListener('submit', addPlaceFormSubmitHandler)
