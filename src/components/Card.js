export default class Card {
  constructor(
    data,
    userId,
    cardTemplateSelector,
    { handleCardClick, handleLikeClick, handleDeleteBtnClick }
  ) {
    this._name = data.name;
    this._link = data.link;
    this._data = data;
    this._cardId = data._id;
    this._userId = userId;
    this._cardTemplateSelector = cardTemplateSelector;
    this._handleCardClick = handleCardClick;
    this._handleLikeClick = handleLikeClick;
    this._handleDeleteBtnClick = handleDeleteBtnClick;
    this._newCard = this._getTemplate();
    this._deleteCardBtn = this._newCard.querySelector(".element__delete");
    this._likeCardBtn = this._newCard.querySelector(".element__like");
    this._cardName = this._newCard.querySelector(".element__title");
    this._cardLink = this._newCard.querySelector(".element__picture");
    this._counterLikes = this._newCard.querySelector(".element__like_amount");
    this._ownerId = data.owner._id;
    this._likes = data.likes;
  }

  createCard() {
    this._cardName.textContent = this._name;
    this._cardLink.src = this._link;
    this._cardLink.alt = this._name;
    this._counterLikes.textContent = this._likes.length;
    if (this._ownerId !== this._userId) {
      this._deleteCardBtn.style.display = "none";
    }
    this.setLikes(this._likes);
    this._addEventListeners();
    return this._newCard;
  }

  checkAvailabilityLike() {
    return this._likes.find((like) => {
      return like._id === this._userId;
    });
  }

  // Тоггл окрашивания лайка
  toggleLikeColor() {
    if (this.checkAvailabilityLike()) {
      this._addLike();
    } else {
      this._deleteLike();
    }
  }

  // Установить лайк
  setLikes(likesList) {
    this._likes = likesList;
    this._counterLikes.textContent = this._likes.length;
    this.toggleLikeColor();
  }

  //закрасить сердечко
  _addLike() {
    this._likeCardBtn.classList.add("element__like_active");
  }

  //удалить закрашивание сердечка
  _deleteLike() {
    this._likeCardBtn.classList.remove("element__like_active");
  }

  // ID карточки
  getIdCard() {
    return this._cardId;
  }
  _getTemplate() {
    const newCard = document
      .querySelector(this._cardTemplateSelector)
      .content.querySelector(".element")
      .cloneNode(true);
    return newCard;
  }

  _addEventListeners = () => {
    this._deleteCardBtn.addEventListener("click", this._handleDeleteCard);
    this._likeCardBtn.addEventListener("click", () => {
      this._handleLikeClick(this._cardId);

      this.toggleLikeColor();
    });
    this._cardLink.addEventListener("click", () =>
      this._handleCardClick(this._name, this._link)
    );

    //слушатель открыть попап для удаления карточки
    this._deleteCardBtn.addEventListener("click", () => {
      this._handleDeleteBtnClick(this._cardId, this._newCard);
    });
  };
}
