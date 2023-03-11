import {Popup} from "./Popup.js";

export class PopupWithForm extends Popup {
constructor (popupSelector, handleFormSubmit) {
super(popupSelector)

this._handleFormSubmit = handleFormSubmit;
// this._formElement = 
// // достаём все элементы полей
// this._inputList = this._popupSelector.querySelectorAll('.popup__input');

}

_getInputValues() {

  // создаём пустой объект
  this._formValues = {};
  // добавляем в этот объект значения всех полей
  const inputList = this._popupSelector.querySelectorAll('.popup__input');
  inputList.forEach(input => {
    this._formValues[input.name] = input.value;
  });
  // возвращаем объект значений
  return this._formValues;
}

setEventListeners () {
  super.setEventListeners();
  this._popupSelector.querySelector('.popup__form').addEventListener('submit', (evt) => {
    this._handleFormSubmit(evt, this._getInputValues());
    this.close();
  })
}

close () {
  super.close();
//   this._formElement.reset();

}
}
