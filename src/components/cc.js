export class FormValidator {
  constructor(config, form) {
    this._form = form
    this._config = config
    this._inputList = Array.from(
      this._form.querySelectorAll(this._config.inputSelector),
    )
    this._button = this._form.querySelector(this._config.submitButtonSelector)
  }

  _showInputError = (input, errorMessage) => {
    const errorElement = this._form.querySelector(`#${input.id}-error`)

    input.classList.add(this._config.inputErrorClass)
    errorElement.textContent = errorMessage
    errorElement.classList.add(this._config.errorClass)
  }

  _hasInvalidInput = () => {
    return this._inputList.some((input) => {
      return !input.validity.valid
    })
  }

  resetValidation = () => {
    this._toggleBtnState()
    this._inputList.forEach((input) => {
      this._hideInputError(input)
    })
  }

  _hideInputError = (input) => {
    const errorElement = this._form.querySelector(`#${input.id}-error`)
    input.classList.remove(this._config.inputErrorClass)
    errorElement.classList.remove(this._config.errorClass)
    errorElement.textContent = ''
  }

  _checkInputValidity = (input) => {
    if (!input.validity.valid) {
      this._showInputError(input, input.validationMessage)
    } else {
      this._hideInputError(input)
    }
  }

  disableBtn () {
    this._button.classList.add(this._config.inactiveButtonClass)
      this._button.disabled = true
  }

  _toggleBtnState = () => {
    if (this._hasInvalidInput(this._inputList)) {
      this.disableBtn()
    } else {
      this._button.classList.remove(this._config.inactiveButtonClass)
      this._button.disabled = false
    }
  }

  _setEventListeners() {
    this._inputList.forEach((input) => {
      input.addEventListener('input', () => {
        this._checkInputValidity(input)
        this._toggleBtnState()
      })
    })
  }

  enableValidation() {
    this._toggleBtnState();
    this._setEventListeners()
    }
}