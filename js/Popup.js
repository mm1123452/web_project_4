export class Popup {
  constructor(popupSelector) {
    this._popupSelector = document.querySelector(popupSelector)
  }

  open() {
    this.setEventListeners()
    this._popupSelector.classList.add("popup_opened");
  }

  close() {
    this._popupSelector.classList.remove("popup_opened");
  }

  _handleEscClose() {

  }

  setEventListeners() {
    const closeButton = this._popupSelector.querySelector('.popup__exit')

    closeButton.addEventListener("click", () => {
      this.close()
    })
  }
}
