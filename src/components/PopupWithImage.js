import {Popup} from './Popup.js'

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector)
  }

  open(data) {
    const image =  this._popupSelector.querySelector(".popup__image")
    const title = this._popupSelector.querySelector(".popup__image-title")

    image.src = data.image;
    image.alt = data.text;
    title.textContent =  data.text
    super.open()
  }
}
