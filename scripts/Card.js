export default class Card {
  constructor(data, elementCardTemplate, handleCardClick) {
    this._handleCardClick = handleCardClick;
    this._data = data;
    this._element = document.querySelector('.element');
    this._elementCardTemplate = document.querySelector('#element__card').content;
    this._photoElement = elementCardTemplate.querySelector('.element');
  }

  _getTemplate() {
    const newCard = document.querySelector(this._elementCardTemplate).content.querySelector('.element').cloneNode(true);
    return newCard;
  }

  // лайк
  _handleLikeCard = (event) => {
    event.target.closest('.element__like').classList.toggle('element__like_active');
  }
  //удаление элементов
  _handleDeleteCard = (event) => {
    event.target.closest('.element').remove();
  }

  _addEventListeners = () => {
    const deleteCardBtn = this._newCard.querySelector('.element__delete');
    const likeCardBtn = this._newCard.querySelector('.element__like');

    deleteCardBtn.addEventListener('click', this._handleDeleteCard);
    likeCardBtn.addEventListener('click', this._handleLikeCard);
    this._cardLink.addEventListener('click', () => this._handleCardClick(this._data.name, this._data.link));
  }

  createCard() {
    this._newCard = this._getTemplate();
    this._cardName = this._newCard.querySelector('.element__title');
    this._cardName.textContent = this._data.name;

    this._cardLink = this._newCard.querySelector('.element__picture');
    this._cardLink.src = this._data.link;
    this._cardLink.alt = this._data.name;

    this._addEventListeners();

    return this._newCard;
  }
}


// export class Card {
//   constructor(data, cardTemplateSelector, handleClickImage) {
//     this._data = data;
//     this._cardTemplate = document.querySelector(cardTemplateSelector).content.querySelector('.card');
//     this._handleClickImage = handleClickImage;
//     this._cardElement = this._cardTemplate.cloneNode(true);
//     this._cardDeleteButton = this._cardElement.querySelector('.card__delete');
//     this._cardLikeButton = this._cardElement.querySelector('.card__like');
//     this._cardImageButton = this._cardElement.querySelector('.card__image-button');
//   }

//   _handleDelete = () => {
//     this._cardElement.remove();
//   }

//   _handleLike = () => {
//     this._cardLikeButton.classList.toggle('card__like_button_active');
//   }

//   _setListenersForItem() {
//     this._cardDeleteButton.addEventListener('click', this._handleDelete);
//     this._cardLikeButton.addEventListener('click', this._handleLike);
//     this._cardImageButton.addEventListener('click', () => this._handleClickImage(this._data));
//   };

//   createCard() {
//     const cardImage = this._cardElement.querySelector('.card__image');
//     const cardTitle = this._cardElement.querySelector('.card__title');
//     cardTitle.textContent = this._data.name;
//     cardImage.src = this._data.link;
//     cardImage.alt = this._data.name;

//     this._setListenersForItem();

//     return this._cardElement;
//   }
// }