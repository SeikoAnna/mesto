export default class Card {
  constructor(data, elementCardTemplate, handleCardClick) {
    this._handleCardClick = handleCardClick;
    this._data = data;
    this._elementCardTemplate = elementCardTemplate;
  }

  _getTemplate() {
    const newCard = document
    .querySelector(this._elementCardTemplate)
    .content
    .querySelector('.element')
    .cloneNode(true);

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
    this._cardLink.addEventListener('click', () => this._handleCardClick(this._data));
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
