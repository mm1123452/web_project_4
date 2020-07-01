import { Popup } from './Popup.js'

export class PopupWithForm extends Popup {
  constructor(popupSelector, handleSubmit) {
    super(popupSelector)
    this._handleSubmit = handleSubmit
    this._submitHandler = this._submitHandler.bind(this)
  }

  _getInputValues() {
    const inputFields = this._popupSelector.querySelectorAll('.popup__input')
    const data = {}

    inputFields.forEach(input => {
      data[input.name] = input.value
    })
    return data
  }

  _submitHandler(e) {
    e.preventDefault()
    this._handleSubmit(this._getInputValues())
    this.close()
  }

  setEventListeners() {
    this._popupSelector.addEventListener("submit", this._submitHandler)
    super.setEventListeners()
  }

  _removeEventListeners() {
    this._popupSelector.removeEventListener("submit", this._submitHandler)
  }

  close() {
    this._removeEventListeners()
    const form = this._popupSelector.querySelector('.popup__form')
    form.reset()
    super.close()
  }
}
