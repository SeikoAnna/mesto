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

const popupImage = document.querySelector('.popup_photo');
const cardList = document.querySelector('.elements');

// Функция открытия попапов
function openPopup(item) {
  item.classList.add('popup_opened');
};

// Функция закрытия попапов
function closePopup(item) {
  item.classList.remove('popup_opened');
};

const popupClose = document.querySelectorAll('.popup__close');

popupClose.forEach((element) => {
  const popup = element.closest('.popup');
  element.addEventListener('click', () => closePopup(popup));
});


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
popupFormEdit.addEventListener('submit', formPopupEdit)
function formPopupEdit(event) {
  event.preventDefault();
  profName.textContent = popupName.value;
  profProfession.textContent = popupProfession.value;
  popup.classList.remove('popup_opened');

}
// сохранение данных попапа добавления карточки на страницу
popupFormAdd.addEventListener('submit', formPopupAdd)
function formPopupAdd(event) {
  event.preventDefault();
  const newCard = [
    {
      name: `${popupTitle.value}`,
      link: `${popupPicture.value}`
    }];

  cardList.prepend(createCard(newCard[0]));
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

function createCard(item) {

  const photoElement = elementCardTemplate.querySelector('.element').cloneNode(true);

  photoElement.querySelector('.element__picture').src = item.link;
  photoElement.querySelector('.element__picture').alt = item.name;
  photoElement.querySelector('.element__title').textContent = item.name;

  // photoElement.append(photoElement);

  // //лайк
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
    imgPopup.src = imageElem.getAttribute('src');
    titlePopup.alt = titleElem.textContent;
    titlePopup.textContent = titleElem.textContent;
    openPopup(popupImage);
  });
 


  return photoElement;
}


initialCards.forEach((item) => {
  cardList.append(createCard(item));
});




