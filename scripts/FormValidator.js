const config = ({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-popup-btn',
  inactiveButtonClass: 'popup__submit-popup-btn_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
});

export default class FormValidator {
  constructor(config, formElement) {
    this._config = config;
    this._formElement = formElement;
  }

  _isValid = (inputElement) => {
     if (!inputElement.validity.valid) {
      this._showInputError(inputElement.validationMessage);
    } else {
      this._hideInputError();
    }
  };
  
  _showInputError = (inputElement, errorMessage) => {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._config.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._config.errorClass);
  };

  _hideInputError = (inputElement) => {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._config.inputErrorClass);
    errorElement.classList.remove(this._config.errorClass);
    errorElement.textContent = '';
  };

  _hasInvalidInput = (inputList) => {
    this._inputList = Array.from(this._formElement.querySelectorAll(this._config.inputSelector));
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    })
  };

  _toggleButtonState = () => {
    if (this._hasInvalidInput(this._inputList)) {
      this._buttonElement = formElement.querySelector(this._config.submitButtonSelector);
      this._buttonElement.disabled = true;
      this._buttonElement.classList.add(this._config.inactiveButtonClass);
    } else {
      this._buttonElement.disabled = false;
      this._buttonElement.classList.remove(this._config.inactiveButtonClass);
    }
  };
 
  setEventListeners = () => {
    const inputList = Array.from(this._formElement.querySelectorAll(this._config.inputSelector));
    const buttonElement = formElement.querySelector(this._config.submitButtonSelector);
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this.isValid(inputElement,);
        this.toggleButtonState();
      });
    });
    formElement.addEventListener('reset', () => {
      setTimeout(() => {
        this.toggleButtonState();
      }, 0);
     });
  };

  enableValidation = () => {
    const formList = Array.from(document.querySelectorAll(this._config.formSelector));
    formList.forEach((formElement) => {
      formElement.addEventListener('submit', function (e) {
        e.preventDefault();
        formElement.reset();
      });
      // setEventListeners();

    });
  };


  
}
