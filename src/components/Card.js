export default class Card {
  constructor({ name, link }, cardTemplateSelector, handleCardClick) {
    this._handleCardClick = handleCardClick;
    this._name = name;
    this._link = link;
    this._cardTemplateSelector = cardTemplateSelector;
  }

  _getTemplate() {
    const newCard = document
      .querySelector(this._cardTemplateSelector)
      .content.querySelector(".element")
      .cloneNode(true);

    return newCard;
  }

  // лайк
  _handleLikeCard = () => {
    this._likeCardBtn.classList.toggle("element__like_active");
  };
  //удаление элементов
  _handleDeleteCard = () => {
    this._newCard.remove();
  };

  _addEventListeners = () => {
    const deleteCardBtn = this._newCard.querySelector(".element__delete");
    this._likeCardBtn = this._newCard.querySelector(".element__like");

    deleteCardBtn.addEventListener("click", this._handleDeleteCard);
    this._likeCardBtn.addEventListener("click", this._handleLikeCard);
    this._cardLink.addEventListener("click", () =>
      this._handleCardClick(this._name, this._link)
    );
  };

  createCard() {
    this._newCard = this._getTemplate();
    this._cardName = this._newCard.querySelector(".element__title");
    this._cardName.textContent = this._name;

    this._cardLink = this._newCard.querySelector(".element__picture");
    this._cardLink.src = this._link;
    this._cardLink.alt = this._name;

    this._addEventListeners();

    return this._newCard;
  }
}
