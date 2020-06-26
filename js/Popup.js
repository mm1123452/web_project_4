export class Popup {
  constructor(popupSelector) {
    this._popupSelector = document.querySelector(popupSelector)
    this._handleEscClose = this._handleEscClose.bind(this)
    this._handleWindowClick = this._handleWindowClick.bind(this)
  }

  open() {
    this.setEventListeners()
    this._popupSelector.classList.add("popup_opened");
  }

  close() {
    this._popupSelector.classList.remove("popup_opened");
    window.removeEventListener("keydown", this._handleEscClose)
  }

  _handleEscClose(e) {
    if (e.key === 'Escape') {
      this.close()
    }
  }

  _handleWindowClick(e) {
    if (e.target.classList.contains("popup__container")) {
      this.close()
    }
  }

  setEventListeners() {
    const closeButton = this._popupSelector.querySelector('.popup__exit')

    closeButton.addEventListener("click", () => {
      this.close()
    })

    window.addEventListener("keydown", this._handleEscClose)
    window.addEventListener("click", this._handleWindowClick)
  }
}
