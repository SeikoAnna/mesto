//объявляем переменные

const editButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup__close');
const popupName = document.querySelector('.popup__input_type_name');
const popupProfession = document.querySelector('.popup__input_type_profession');
const popupSave = document.querySelector('.popup__save');
const profName = document.querySelector('.profile__name');
const profProfession = document.querySelector('.profile__profession');
const popupForm = document.querySelector('.popup__form');


editButton.addEventListener ('click', openPopup)
    function openPopup() {
    popup.classList.add('popup_opened');
    popupName.value=profName.textContent;
    popupProfession.value=profProfession.textContent;
}

popupClose.addEventListener ('click', closePopup)
    function closePopup() {
    popup.classList.remove('popup_opened');
}

popupForm.addEventListener ('submit', formPopup)
    function formPopup (event){
    event.preventDefault();
    profName.textContent=popupName.value;
    profProfession.textContent=popupProfession.value;
    popup.classList.remove('popup_opened');
}


