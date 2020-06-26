import {Popup} from './Popup.js'

export class PopupWithForm extends Popup {
  constructor(popupSelector, handleSubmit) {
    super(popupSelector)
    this._handleSubmit = handleSubmit
  }

  _getInputValues() {
    const inputFields = this._popupSelector.querySelectorAll('.popup__input')
    const data = {}

    inputFields.forEach(input => {
      const name = input.name === 'about'? 'job' : input.name
      data[name] = input.value
    })

    console.log(data)
    return data
    //It stores a private method named _getInputValues(), which collects data from all the input fields.
  }

  setEventListeners() {

    this._popupSelector.addEventListener("submit", (e) => {
      e.preventDefault()
      const values = this._getInputValues()
      this._handleSubmit(values)
    })
  //It modifies the setEventListeners() parent method. The setEventListeners() method of the PopupWithForm class has to add the click event listener to the close icon while also adding the submit event handler.
    super.setEventListeners()
 }

  close() {
    const form = this._popupSelector.querySelector('.popup__form')
    form.reset()
    super.close()
  }
}
