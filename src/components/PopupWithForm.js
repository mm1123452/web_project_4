import { Popup } from './Popup.js'

export class PopupWithForm extends Popup {
  constructor(popupSelector, handleSubmit) {
    super(popupSelector)
    this._handleSubmit = handleSubmit
    this._submitHandler = this._submitHandler.bind(this)
    this._closeButton =  this._popupSelector.querySelector('.popup__button')
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
    e.stopPropagation()
    this._closeButton.textContent = "Saving..."
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
   if (this._popupSelector.classList.contains('popup_type_add-place') ) {

    this._closeButton.textContent = "Create"
    } else if (this._popupSelector.classList.contains('popup_type_edit')) {

      this._closeButton.textContent = "Save"
    } else if (this._popupSelector.classList.contains('popup_type_confirm')) {

      this._closeButton.textContent = "Yes"
    }

    this._removeEventListeners()
    const form = this._popupSelector.querySelector('.popup__form')
    form.reset()
    super.close()
  }
}
