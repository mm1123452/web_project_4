let element = null;
let type = null;
let image = null;
let title = null;


const popupSelector = (popupType,elementSelector,data) => {
  type = popupType;

  if (popupType === 'image') {
    openLargeImagePopup(data,elementSelector)
  } else if (popupType === 'edit')  {
    openeditPopup(data,elementSelector)
  } else if (popupType === 'add') {
    openAddPopup(elementSelector)
  }
}

const openLargeImagePopup = (data,elementSelector) => {
  element = document.querySelector(elementSelector)
  image =  element.querySelector(".popup__image")
  title = element.querySelector(".popup__image-title")

  image.src = data.image;
  image.alt = data.text;
  title.textContent =  data.text

   togglePopupClass(element)
   setEventListeners(element)
}

const openeditPopup = (data,elementSelector) => {
  element = document.querySelector(elementSelector)
  const nameInput =  element.querySelector(".popup__name")
  const titleInput = element.querySelector(".popup__about")

  nameInput.value = data.name;
  titleInput.value = data.title;
  togglePopupClass(element)
  setEventListeners(element)
}

const openAddPopup = (elementSelector) => {
  element = document.querySelector(elementSelector)
  togglePopupClass(element)
  setEventListeners(element)
}


const togglePopupClass = (element)  => {
  element.classList.toggle("popup_opened");
}

const setEventListeners = (element) => {
  if (element.classList.contains('popup_opened')) {
    window.addEventListener("click",clickHandler )
    window.addEventListener("keydown", escapeHandler )
  }
}

const handleWindowClick =  (e) => {
  if (e.target.classList.contains("popup__container") ||
      e.target.classList.contains("popup__exit")  ||
      e.target.classList.contains("popup__button") ) {
    togglePopupClass(element)
    closePopup()
  }
}

const handleEscapeKey =  (e) => {
  if (e.key === 'Escape' && open) {
    togglePopupClass(element)
    closePopup()
  }
}

const closePopup = () => {
  if (type === 'image') {
    closeLargeImagePopup()
  }
  removeWindowEventListeners()
}

const closeLargeImagePopup = () => {
  image = ""
  title = ""
}

const removeWindowEventListeners =  () => {
  window.removeEventListener("click", clickHandler )
  window.removeEventListener("keydown", escapeHandler )
}

const clickHandler = handleWindowClick.bind(this)
const escapeHandler = handleEscapeKey.bind(this)












export {popupSelector};
