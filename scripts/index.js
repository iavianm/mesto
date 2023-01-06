import { initialCards, validationConfig } from "./constants.js";
import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";
import {
  profileEditButton, profileAddButton, profileName, profileDescription, infoPopup, infoPopupCloseButton,
  elements, cardPopup, cardPopupCloseButton, imagePopup, imagePopupCloseButton, formInfo,
  infoInputName, infoInputDescription, formCard, cardInputTitle, cardInputUrl, imagePopupPhoto, imagePopupTitle
} from "./elements.js"

function openProfileInfo() {
  formInfoValidator.clearForm()
  infoInputName.value = profileName.textContent;
  infoInputDescription.value = profileDescription.textContent;
  formInfoValidator.toggleButtonState()
  openPopup(infoPopup);
}

function openAddUserCard() {
  formCardValidator.clearForm()
  formCardValidator.toggleButtonState()
  openPopup(cardPopup);
}

function openImagePopup(title, url) {
  imagePopupTitle.textContent = title;
  imagePopupPhoto.src = url;
  imagePopupPhoto.alt = title;
  openPopup(imagePopup);
}

function openPopup(anyPopup) {
  anyPopup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupByEscape);
  document.addEventListener('mouseup', closePopupByOverlay);
}

function closePopupByEscape(event) {
  if (event.key === 'Escape') {
    const openPopup = document.querySelector('.popup_opened');
    closePopup(openPopup);
  }
}

function closePopupByOverlay(event) {
  if (event.target.classList.contains('popup_opened')) {
    const openPopup = event.target;
    closePopup(openPopup);
  }
}

function closePopup(anyPopup) {
  anyPopup.classList.remove('popup_opened');

  document.removeEventListener('keydown', closePopupByEscape);
  document.removeEventListener('mouseup', closePopupByOverlay);
}

function profileInfoSubmitHandler(event) {
  event.preventDefault();

  profileName.textContent = infoInputName.value;
  profileDescription.textContent = infoInputDescription.value;

  formInfoValidator.clearForm()
  closePopup(infoPopup);
}

function elementCardSubmitHandler(event) {
  event.preventDefault();

  const newUserCard = {
    name: cardInputTitle.value,
    link: cardInputUrl.value,
  };

  createCard(newUserCard, '#element', openImagePopup, elements);

  formCardValidator.clearForm()
  closePopup(cardPopup);
}

initialCards.forEach((el) => {
  createCard(el, '#element', openImagePopup, elements);
});

function createCard(obj, selector, openImagePopup, container) {
  const card = new Card(obj, selector, openImagePopup);
  addCard(card.generateCard(), container)
}

function addCard(card, container) {
  container.prepend(card);
}

profileEditButton.addEventListener('click', () => openProfileInfo());

infoPopupCloseButton.addEventListener('click', () => {
  closePopup(infoPopup);
});

profileAddButton.addEventListener('click', () => openAddUserCard());

cardPopupCloseButton.addEventListener('click', () => {
  closePopup(cardPopup);
});

imagePopupCloseButton.addEventListener('click', () => {
  closePopup(imagePopup);
});

formInfo.addEventListener('submit', profileInfoSubmitHandler);
formCard.addEventListener('submit', elementCardSubmitHandler);

const formInfoValidator = new FormValidator(validationConfig, formInfo);
formInfoValidator.enableValidation();

const formCardValidator = new FormValidator(validationConfig, formCard);
formCardValidator.enableValidation();
