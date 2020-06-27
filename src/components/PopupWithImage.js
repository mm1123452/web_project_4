import {Popup} from './Popup.js'

export class PopupWithImage extends Popup {
  constructor(popupSelector, data) {
    super(popupSelector)
    this._image = data.image
    this._text = data.text
  }

  open() {
    const image =  this._popupSelector.querySelector(".popup__image")
    const title = this._popupSelector.querySelector(".popup__image-title")

    image.src = this._image;
    image.alt = this._text;
    title.textContent =  this._text
    super.open()
  }
}
