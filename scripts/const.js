/* Тело страницы */
const page = document.querySelector('.page');

/* Профайл */
const profile = page.querySelector('.profile');
const profileEditButton = profile.querySelector('.profile__edit-button');
const profileAddButton = profile.querySelector('.profile__add-button');
const profileName = profile.querySelector('.profile__name');
const profileDescription = profile.querySelector('.profile__description');

/* Попап инфо */
const infoPopup = page.querySelector('.info-popup');
const infoPopupCloseButton = infoPopup.querySelector('.info-popup__close-button');

/* Карточки */
const elements = page.querySelector('.elements');

/* Попап добавления картинки */
const cardPopup = page.querySelector('.card-popup');
const cardPopupCloseButton = cardPopup.querySelector('.card-popup__close-button');

/* Попап изображений */
const imagePopup = page.querySelector('.image-popup');
const imagePopupPhoto = imagePopup.querySelector('.popup__photo');
const imagePopupTitle = imagePopup.querySelector('.popup__figcaption');
const imagePopupCloseButton = imagePopup.querySelector('.image-popup__close-button');

/* Скелет карточки */
const templateElement = page.querySelector('#element').content;

const formInfo = document.forms.infoPopupForm;
const infoInputName = formInfo.elements.inputName
const infoInputDescription = formInfo.elements.inputDescription
const buttonFormInfo = formInfo.elements.submit

const formCard = document.forms.cardPopupForm;
const cardInputTitle = formCard.elements.inputTitle
const cardInputUrl = formCard.elements.inputUrl
const buttonFormCard = formCard.elements.submit
