export class Popup {
  constructor(popupElement) {
    this._popupElement = document.querySelector(popupElement);
  }

  open() {
    this._popupElement.classList.add("popup_opened");
    document.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    this._popupElement.classList.remove("popup_opened");
    document.removeEventListener("keydown", this._handleEscClose);
  }

  _handleEscClose = (evt) => {
    if (evt.key === "Escape") {
      this.close();
    }
  };

  _closePopupByClickOnOverlay = (e) => {
    if (e.target.classList.contains("popup_opened")) {
      this.close();
    }
  };

  setEventListeners() {
    this._popupElement.addEventListener("click", () => {
      this._closePopupByClickOnOverlay(window.event);
    });
    this._popupElement
      .querySelector(".popup__close")
      .addEventListener("click", () => {
        this.close();
      });
  }
}
