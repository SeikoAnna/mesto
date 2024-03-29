import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(popupElement, handleFormSubmit) {
    super(popupElement);
    this._inputList = this._popupElement.querySelectorAll(".popup__input");
    this._formElement = this._popupElement.querySelector(".popup__form");
    this._handleFormSubmit = handleFormSubmit;
    this._submitBtn = this._formElement.querySelector(
      ".popup__submit-popup-btn"
    );
  }

  submitBtn(text) {
    this._submitBtn.value = text;
  }

  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupElement
      .querySelector(".popup__form")
      .addEventListener("submit", (evt) => {
        evt.preventDefault();
        this._handleFormSubmit(this._getInputValues());
      });
  }

  close() {
    this._formElement.reset();
    super.close();
  }
}
