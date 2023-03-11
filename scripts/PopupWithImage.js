import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor (popupSelector){
  super (popupSelector)
  }

 open (name, link) {
  const popupImageBigItem = this._popupSelector.querySelector('.popup__image')
  const popupImageBigName = this._popupSelector.querySelector('.popup__photo-title')
    popupImageBigItem.src = link
    popupImageBigItem.alt = name
    popupImageBigName.textContent = name

    super.open();
  }

}