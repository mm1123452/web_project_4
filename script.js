//Buttons
const editButton = document.querySelector('.button_edit');
const addPlaceButton = document.querySelector('.button_add');

//Edit popup
const editPopup = document.querySelector('.popup_type_edit');
const editPopupExitButton = editPopup.querySelector('.popup__exit');
const editForm = editPopup.querySelector('.popup__form');

//Add place popup
const addPlacePopup = document.querySelector('.popup_type_add-place');
const addPlacePopupExitButton = addPlacePopup.querySelector('.popup__exit');
const addPlaceForm = addPlacePopup.querySelector('.popup__form');
const addPlaceCaption = addPlacePopup.querySelector('.popup__name');
const addPlaceImageLink = addPlacePopup.querySelector('.popup__about');

// Large Image popup
const largeImagePopup = document.querySelector('.popup_type_large-image');
const largeImagePopupExitButton = largeImagePopup.querySelector('.popup__exit');
const largeImage = largeImagePopup.querySelector('.popup__image');
const largeImageTitle = largeImagePopup.querySelector('.popup__image-title');

//Form data
const nameInput = editForm.querySelector('.popup__name');
const aboutInput = editForm.querySelector('.popup__about');

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

const addCard = (card) => {
  const {name,link} = card
  const placeElement =  cardTemplate.cloneNode(true)
  const likeIcon = placeElement.querySelector(".place__icon")
  const deleteIcon = placeElement.querySelector(".place__delete")
  const image =  placeElement.querySelector(".place__image")
  const placeName =   placeElement.querySelector(".place__name")

  placeName.textContent = name;
  image.src = link;
  image.alt = name

 likeIcon.addEventListener('click', () => {
    likeIcon.classList.toggle('place__icon_liked')
  })

  deleteIcon.addEventListener('click', (evt) => {
    const parentElenment = evt.target.parentElement
    parentElenment.remove()
 })

   image.addEventListener('click', () => {
    largeImageTitle.textContent = placeName.textContent
    largeImage.src= image.src

     togglePopUp(largeImagePopup )

   })
  placeContainer.append(placeElement)
}

const togglePopUp = (element) => {
  event.preventDefault()
  if (!element.classList.contains('popup_opened')) {
    nameInput.value = profileName.textContent
    aboutInput.value = profileTitle.textContent
  }

  if (element.classList.contains('popup_type_large-image') &&
     element.classList.contains('popup_opened') ) {
    largeImageTitle.textContent=''
    largeImage.src= ''
  }

  element.classList.toggle('popup_opened')
}

const editFormSubmitHandler = (evt) => {
  evt.preventDefault();

  profileName.textContent = nameInput.value
  profileTitle.textContent = aboutInput.value
  togglePopUp(editPopup)
}

const addPlaceFormSubmitHandler = (evt)  =>{
  evt.preventDefault();

  const name = addPlaceCaption.value
  const link = addPlaceImageLink.value

  addCard({name,link})
  togglePopUp(addPlacePopup)
  addPlaceCaption.value = ''
  addPlaceImageLink.value = ''
}

const renderCards = (cardArray) => {
  cardArray.forEach(card => addCard(card))
}

//EVENT LISTENERS
const addEventListenerCreator = (element, type, callback) => {
  element.addEventListener(type, callback)
}
addEventListenerCreator(window, 'load', renderCards.bind(null,initialCards) )
addEventListenerCreator(editButton, 'click', togglePopUp.bind(null,editPopup) )
addEventListenerCreator(editPopupExitButton, 'click', togglePopUp.bind(null,editPopup) )
addEventListenerCreator(addPlacePopupExitButton, 'click', togglePopUp.bind(null,addPlacePopup) )
addEventListenerCreator(addPlaceButton, 'click', togglePopUp.bind(null,addPlacePopup) )
addEventListenerCreator(largeImagePopupExitButton, 'click', togglePopUp.bind(null,largeImagePopup) )
addEventListenerCreator(editForm, 'submit', editFormSubmitHandler)
addEventListenerCreator(addPlaceForm, 'submit', addPlaceFormSubmitHandler)

