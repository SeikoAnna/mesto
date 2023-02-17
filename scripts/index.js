import FormValidator from './FormValidator.js';
// import Card from './Card.js';

const editButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const popupName = document.querySelector('.popup__input_type_name');
const popupProfession = document.querySelector('.popup__input_type_profession');
const popupSave = document.querySelector('.popup__submit-popup-btn');
const profName = document.querySelector('.profile__name');
const profProfession = document.querySelector('.profile__profession');
const popupForm = document.querySelector('.popup__form');
const addButton = document.querySelector('.profile__add-button');
const elemTitle = document.querySelector('.element__title');
const elemPicture = document.querySelector('.element__picture');
const popupTitle = document.querySelector('.popup__input_type_title');
const popupPicture = document.querySelector('.popup__input_type_picture');
const addPopup = document.querySelector('.popup_type_add');//попап добавления новой карточки
const editPopup = document.querySelector('.popup_type_edit');//попап редактирования профиля
const popupFormEdit = document.querySelector('.popup__form_edit');
const popupFormAdd = document.querySelector('.popup__form_add');
const popupImage = document.querySelector('.popup_photo'); //попап увеличенного фото
const cardList = document.querySelector('.elements');
const popupCloseButtons = document.querySelectorAll('.popup__close');

const config = ({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-popup-btn',
  inactiveButtonClass: 'popup__submit-popup-btn_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
});

// Функция открытия попапов
function openPopup(item) {
  item.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupByEscClick);
};

// Функция закрытия попапов
function closePopup(item) {
  item.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupByEscClick);
};

// Открытие попапа редактирования профиля
editButton.addEventListener('click', function () {
  popupName.value = profName.textContent;
  popupProfession.value = profProfession.textContent;
  openPopup(editPopup);
});

// Открытие попапа добавления карточки
addButton.addEventListener('click', function () {
  popupTitle.value = '';
  popupPicture.value = '';
  openPopup(addPopup);
});

// сохраниение данных из попапа редактирования профиля на страницу
popupFormEdit.addEventListener('submit', submitFormPopupEdit)
function submitFormPopupEdit(event) {
  event.preventDefault();
  profName.textContent = popupName.value;
  profProfession.textContent = popupProfession.value;
  popup.classList.remove('popup_opened');
}

// сохранение данных попапа добавления карточки на страницу
popupFormAdd.addEventListener('submit', submitFormPopupAdd)
function submitFormPopupAdd(event) {
  event.preventDefault();
  const newCard =
  {
    name: popupTitle.value,
    link: popupPicture.value
  };
  cardList.prepend(createCard(newCard));
  closePopup(addPopup);
};

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

// Добавление фотографий из готового массива
const elementCardTemplate = document.querySelector('#element__card').content;
// const photoElement = elementCardTemplate.querySelector('.element').cloneNode(true);
function createCard(item) {
  const photoElement = elementCardTemplate.querySelector('.element').cloneNode(true);
  photoElement.querySelector('.element__picture').src = item.link;
  photoElement.querySelector('.element__picture').alt = item.name;
  photoElement.querySelector('.element__title').textContent = item.name;

  //лайк
  const elemLike = photoElement.querySelector('.element__like')
  elemLike.addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like_active');
  });

  //удаление элементов
  const elemDelete = photoElement.querySelector('.element__delete');
  elemDelete.addEventListener('click', function () {
    const element = elemDelete.closest('.element');
    element.remove();
  });

  // Открытие попапа увеличения фото
  const imageElem = photoElement.querySelector('.element__picture');
  const titleElem = photoElement.querySelector('.element__title');
  const imgPopup = document.querySelector('.popup__image');
  const titlePopup = document.querySelector('.popup__photo-title');

  imageElem.addEventListener('click', function () {
    imgPopup.src = item.link;
    titlePopup.alt = item.name;
    titlePopup.textContent = item.name;
    openPopup(popupImage);
  });
  return photoElement;
}

initialCards.forEach((item) => {
  cardList.append(createCard(item));
});

//Закрытие попапа клавишей Esc
function closePopupByEscClick(evt) {
  if (evt.key === 'Escape') {
    const openPopup = document.querySelector('.popup_opened');
    closePopup(openPopup);
  }
}

// Закрытие попапа overlay
const closePopupByOverlayClick = function (event) {
  if (event.target.classList.contains('popup_opened')) {
    closePopup(document.querySelector('.popup_opened'))
  }
}

popupCloseButtons.forEach(button => {
  const popup = button.closest('.popup');
  popup.addEventListener('mousedown', closePopupByOverlayClick);
  button.addEventListener('click', () => closePopup(popup));
})

const ValidstorAddCard = new FormValidator (config, popupForm);
ValidstorAddCard.enableValidation();


