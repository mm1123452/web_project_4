export class FormValidator {
  constructor(formElement, { inputSelector, inactiveButtonClass, errorClass, ...rest }) {
    this._formElement = formElement;
    this._inputSelector = inputSelector;
    this._inactiveButtonClass = inactiveButtonClass;
    this._errorClass = errorClass;
    this._setting = rest;
  }

  _checkValidity(e) {
    if (e.target.validity.valid) {
      this._hideErrorMessage(e.target);
    } else {
      this._showErrorMessage(e.target);
    }
  }

  _hideErrorMessage(input) {
    const errorEl = this._formElement.querySelector(`#popup__${input.name}-error`);
    errorEl.classList.remove(this._errorClass);
    input.classList.remove(this._errorClass);
    errorEl.textContent = "";
  }

  _showErrorMessage(input) {
    const errorEl = this._formElement.querySelector(`#popup__${input.name}-error`);

    errorEl.textContent = input.validationMessage;
    errorEl.classList.add(this._errorClass);
    input.classList.add(this._errorClass);
  }

  _submitButtonState() {
    const inputs = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    const validForm = inputs.every(input => input.validity.valid);
    const submitButton = this._formElement.querySelector('.popup__button')

    if (validForm) {
      submitButton.classList.remove(this._inactiveButtonClass);
      submitButton.disabled = false;
    } else {
      submitButton.classList.add(this._inactiveButtonClass);
      submitButton.disabled = true;
    }
  }

  _setEventListeners() {
    this._formElement.addEventListener("input", (e) => {
      this._checkValidity(e)
      this._submitButtonState()
    })
  }

  enableValidation() {
    this._setEventListeners()
  }
}
