export class Popup {
  constructor(data, popupSelector) {
    this._text = data.text;
    this._imgLink = data.image
    this._popupSelector = popupSelector;
    this._name = data.name;
    this._title = data.title;

    this._handleWindowClick =  (e) => {
      if (e.target.classList.contains("popup__container") ||
          e.target.classList.contains("popup__exit")  ||
          e.target.classList.contains("popup__button") ) {
        this._togglePopupClass()
        this._closePopup()
      }
    }

    this._handleEscapeKey =  (e) => {
      if (e.key === 'Escape' && open) {
        this._togglePopupClass()
        this._closePopup()
      }
    }
    this.clickHandler = this._handleWindowClick.bind(this)
    this._escapeHandler = this._handleEscapeKey.bind(this)
  }

  _togglePopupClass() {
    this._element.classList.toggle("popup_opened");
  }

  _closePopup() {
    if (this._type === 'image') {
       this._closeLargeImagePopup()
    }
    this._removeWindowEventListeners()
  }

  _openLargeImagePopup() {
    this._element = document.querySelector(this._popupSelector)
    const image =  this._element.querySelector(".popup__image")
    const title = this._element.querySelector(".popup__image-title")

    image.src = this._imgLink;
    image.alt = this._text;
    title.textContent =  this._text

    this._togglePopupClass()
    this._setEventListeners()
  }

  _closeLargeImagePopup() {
    this._imgLink = ""
    this._text = ""
  }

  popupSelector(popupType) {
    this._type = popupType
    if (popupType === 'image') {
      this._openLargeImagePopup()
    } else if (popupType === 'edit')  {
      this._openeditPopup()
    } else if (popupType === 'add') {
      this._openAddPopup()
    }
  }

  _openeditPopup() {
    this._element = document.querySelector(this._popupSelector)
    const nameInput =  this._element.querySelector(".popup__name")
    const titleInput = this._element.querySelector(".popup__about")

    nameInput.value = this._name;
    titleInput.value = this._title;
    this._togglePopupClass()
    this._setEventListeners()
  }

  _openAddPopup() {
    this._element = document.querySelector(this._popupSelector)
    this._togglePopupClass()
    this._setEventListeners()
  }

  _handleWindowClick(e) {
    if (e.target.classList.contains("popup__container")) {
      this._togglePopupClass()
      this._closePopup()
    }
  }

  _setEventListeners() {
    if (this._element.classList.contains('popup_opened')) {
      window.addEventListener("click",this.clickHandler)
      window.addEventListener("keydown", this._escapeHandler)
    }
  }

  _removeWindowEventListeners() {
     window.removeEventListener("click", this.clickHandler)
     window.removeEventListener("keydown", this._escapeHandler)
  }

}
