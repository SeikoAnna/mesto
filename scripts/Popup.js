export class Popup {
    constructor(popupSelector) {
      this._popupSelector = document.querySelector(popupSelector);
    }
  
  open() {
    this._popupSelector.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
  }
  
  close()  {
    this._popupSelector.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
  }
  
  _handleEscClose = (evt) => {
    if (evt.key === 'Escape') {
      this.close();
    }
  }
  
  _closePopupByClickOnOverlay = (e) => {
    if (!e.target.closest('.popup__container')) {
      this.close();
    }
  }
  
  setEventListeners() {
    this._popupSelector.addEventListener('click', this._closePopupByClickOnOverlay)
  }

    }
