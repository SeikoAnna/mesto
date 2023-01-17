//объявляем переменные

const editButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');

const popupName = document.querySelector('.popup__input_type_name');
const popupProfession = document.querySelector('.popup__input_type_profession');
const popupSave = document.querySelector('.popup__save');
const profName = document.querySelector('.profile__name');
const profProfession = document.querySelector('.profile__profession');
const popupForm = document.querySelector('.popup__form');

const addButton = document.querySelector('.profile__add-button');
const elemTitle = document.querySelector('.element__title');
const elemPicture = document.querySelector('.element__picture');
const popupTitle = document.querySelector('.popup__input_type_title');
const popupPicture = document.querySelector('.popup__input_type_picture');
const addPopup = document.querySelector('.popup_type_add');
const editPopup = document.querySelector('.popup_type_edit');
const popupFormEdit = document.querySelector('.popup__form_edit');
const popupFormAdd = document.querySelector('.popup__form_add');
const popupCloseEdit = editPopup.querySelector('.popup__close');
const popupCloseAdd = addPopup.querySelector('.popup__close');
const elemLike = document.querySelector('.element__like');
const elemDelete = document.querySelector('.element__delete');
const popupClose = addPopup.querySelector('.popup__close');

//лайк
elemLike.addEventListener('click',function(evt){
  evt.target.classList.toggle('element__like_active');
  console.log('Like clicked')
});

//удаление элементов

elemDelete.addEventListener('click', function () {
  const element = elemDelete.closest('.element');
  element.remove();
}); 


//открытие попапа редактирования профиля
addButton.addEventListener('click', openPopup)
function openPopup() {
  popup.classList.add('popup_opened');
  popupTitle.value = elemTitle.textContent;
  popupPicture.value = elemPicture.textContent;
}

// закрытие попапа редактирования профиля
popupCloseAdd.addEventListener('click', closePopup)
function closePopup() {
  popup.classList.remove('popup_opened');
}

// сохраниение данных из попапа редактирования профиля на страницу
popupFormAdd.addEventListener('submit', formPopup)
function formPopup(event) {
  event.preventDefault();
  popupTitle.value = elemTitle.textContent;
  popupPicture.value = elemPicture.textContent;
  popup.classList.remove('popup_opened');
}



//открытие попапа редактирования профиля
editButton.addEventListener('click', openPopup)
function openPopup() {
  popup.classList.add('popup_opened');
  popupName.value = profName.textContent;
  popupProfession.value = profProfession.textContent;
}

// закрытие попапа редактирования профиля
popupCloseEdit.addEventListener('click', closePopup)
function closePopup() {
  popup.classList.remove('popup_opened');
}

// сохраниение данных из попапа редактирования профиля на страницу
popupFormEdit.addEventListener('submit', formPopup)
function formPopup(event) {
  event.preventDefault();
  profName.textContent = popupName.value;
  profProfession.textContent = popupProfession.value;
  popup.classList.remove('popup_opened');
}








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


//Функция добавления первых 6 элементов
initialCards.forEach((card) => {
  prependCard(createCard(card.name, card.link));
});

