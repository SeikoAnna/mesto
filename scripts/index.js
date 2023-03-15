import FormValidator from './FormValidator.js';
import Card from './Card.js';
import Section from './Section.js';
import { UserInfo } from './UserInfo.js';
import { PopupWithForm } from './PopupWithForm.js';
import { PopupWithImage } from './PopupWithImage.js'
import { Popup } from './Popup.js';


const editButton = document.querySelector('.profile__edit-button');//кнопка открытия попапа редаактирования профиля
const popup = document.querySelector('.popup');
const popupName = document.querySelector('.popup__input_type_name');
const popupProfession = document.querySelector('.popup__input_type_profession');
const popupSave = document.querySelector('.popup__submit-popup-btn');//кнопка сохранить
const profName = document.querySelector('.profile__name');
const profProfession = document.querySelector('.profile__profession');
const popupForm = document.querySelector('.popup__form');
const addButton = document.querySelector('.profile__add-button');//кнопка открытия попапа добавления карточки
const elemTitle = document.querySelector('.element__title');
const elemPicture = document.querySelector('.element__picture');
const popupTitle = document.querySelector('.popup__input_type_title');
const popupPicture = document.querySelector('.popup__input_type_picture');
const editPopup = document.querySelector('.popup_type_edit');//попап редактирования профиля
const addPopup = document.querySelector('.popup_type_add');//попап добавления новой карточки

const popupFormEdit = document.querySelector('.popup__form_edit');
const popupFormAdd = document.querySelector('.popup__form_add');
const popupImage = document.querySelector('.popup_photo'); //попап увеличенного фото
const cardLists = document.querySelector  ('.elements');

const popupCloseButtons = document.querySelectorAll('.popup__close');//крестик закрытия попапа
const imageElem = document.querySelector('.element__picture');
const titleElem = document.querySelector('.element__title');
const imgPopup = document.querySelector('.popup__image'); //увеличенное фото
const titlePopup = document.querySelector('.popup__photo-title'); //подпись под увеличенным фото

//селекторы
const cardList = '.elements';
const popupImageSelector = '#popup_photo';
const cardTemplateSelector = '#element__card';

const config = ({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-popup-btn',
  inactiveButtonClass: 'popup__submit-popup-btn_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
});

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

//открытие попапа профиля
const userInfo = new UserInfo ({
    userNameSelector: '.profile__name',
    userInfoSelector: '.profile__profession'
});
const handleEditProfileFormSubmit = (evt, formValues) => {
  evt.preventDefault();
  userInfo.setUserInfo(formValues.name, formValues.info);
  popupEditProfileForm.close();
}

const popupEditProfileForm = new PopupWithForm ('#popup_type_edit', handleEditProfileFormSubmit)
popupEditProfileForm.setEventListeners();

editButton.addEventListener('click', () => {
const {name, info} = userInfo.getUserInfo();
popupName.value = name;
popupProfession.value = info;
popupEditProfileForm.open();
})

// Открытие попапа увеличения фото 
const popupWithBigImage = new PopupWithImage (popupImageSelector);
popupWithBigImage.setEventListeners();

const handleCardClick = (name, link) => {
  popupWithBigImage.open(name, link);
}

//валидация
const validationOfPopupEdit = new FormValidator(config, editPopup);
validationOfPopupEdit.enableValidation();

const validationOfPopupAdd = new FormValidator(config, addPopup);
validationOfPopupAdd.enableValidation();

const createNewCard = (item) => {
  const newCard = new Card(item, cardTemplateSelector, handleCardClick)
  const cardElement = newCard.createCard()

  return cardElement
}

// Открытие попапа добавления карточки 
const handleCardAddFormSubmit = (evt, item) => {
  evt.preventDefault();
  cardElementList.addItem(createNewCard(item))
}

const popupAddCardForm = new PopupWithForm('#popup_type_add', handleCardAddFormSubmit)
popupAddCardForm.setEventListeners();

addButton.addEventListener('click', function () { 
   popupSave.setAttribute('disabled', true)
  validationOfPopupAdd.toggleButtonState();  
popupAddCardForm.open();
}); 

 //добавление всех карточек
const cardElementList = new Section({
  items: initialCards, //вот мы закинули аргументом наш массив 
  renderer: (item) => { // а вот наша функция, которая отвечает за создание и отрисовку данных на странице
     cardElementList.addItem(createNewCard(item)); // тут мы создали и добавили нашу карточку
  },
}, cardList) // передали контейнер, куда хотим добавить карточки

cardElementList.renderItems(); //вызвали второй публичный метод,  который добавит нам карточки в контейнер
