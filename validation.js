const showError = (form,input,errorClass) => {
  errorEl = form.querySelector(`#popup__${input.name}-error`)

  errorEl.textContent = input.validationMessage
  errorEl.classList.add(errorClass)
  input.classList.add(errorClass)
}

const hideError = (form,input,errorClass) => {
  errorEl = form.querySelector(`#popup__${input.name}-error`)
  errorEl.classList.remove(errorClass)
  input.classList.remove(errorClass)
  errorEl.textContent = ""
}

const checkInputValidation = (form,input,errorClass) => {
   if (input.validity.valid ) {
     hideError(form,input,errorClass)
   } else {
    showError(form,input,errorClass)
   }
}

const toggleButtonState = (form,submitButton,  inactiveButtonClass) => {
  const inputs = Array.from(form.querySelectorAll('.popup__about,.popup__name'))
  const validInput = inputs.every(input => input.validity.valid)

  if(validInput) {
    submitButton.classList.remove(inactiveButtonClass)
  } else {
    submitButton.classList.add(inactiveButtonClass)
  }
}

const enableValidation = ({formSelector, submitButtonSelector, errorClass, inactiveButtonClass,...rest}) => {
  const forms = Array.from(document.querySelectorAll(formSelector))

  forms.forEach(form => {
    const submitButton = form.querySelector(submitButtonSelector)

    form.addEventListener('submit', (e) => {
       e.preventDefault()
     })

    form.addEventListener('input', (e) => {
      checkInputValidation(form, e.target, errorClass)
      toggleButtonState(form, submitButton,  inactiveButtonClass)
    })
  })
}

enableValidation({
  formSelector: ".popup__form",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible"
});

