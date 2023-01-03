import { initialCards, validationConfig } from "./variables.js";
import {Card} from "./Card.js";
import {FormValidator} from "./FormValidator.js";

function editProfileInfo(anyPopup, button) {
  infoInputName.value = profileName.textContent;
  infoInputDescription.value = profileDescription.textContent;

  if(infoInputName.value !== '' || infoInputDescription.value !== '') {
    button.classList.remove('popup__form-button_disabled')
    button.removeAttribute("disabled");
  }

  openPopup(anyPopup);
}

function addUserCard(anyPopup, button) {
  if(cardInputTitle.value === '' || cardInputUrl.value === '') {
    button.classList.add('popup__form-button_disabled')
    button.setAttribute("disabled", true);
  }

  openPopup(anyPopup);
}

export function openPopup(anyPopup) {
  anyPopup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupByEscape);
  document.addEventListener('mouseup', closePopupByOverlay);
}

function closePopupByEscape(evt) {
  if (evt.key === 'Escape') {
    const openPopup = document.querySelector('.popup_opened');
    closePopup(openPopup);
  }
}

function closePopupByOverlay(evt) {
  if (evt.target.classList.contains('popup_opened')) {
    const openPopup = document.querySelector('.popup_opened');
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

  clearForm(formInfo)
  closePopup(infoPopup);
}

function elementCardSubmitHandler(event) {
  event.preventDefault();

  const newUserCard = {
    name: cardInputTitle.value,
    link: cardInputUrl.value,
  };

  const card = new Card(newUserCard, templateElement);
  addCard(card.generateCard(), elements);

  clearForm(formCard);
  closePopup(cardPopup);
}

initialCards.forEach((el) => {
  const card = new Card(el, templateElement);
  addCard(card.generateCard(), elements);
});

function addCard(card, container) {
  container.prepend(card);
}

function clearForm(form) {
  form.reset();

  const formInputsList = Array.from(form.querySelectorAll('.popup__input'));
  formInputsList.forEach((input) => {
    input.classList.remove('popup__input_type_error');
  })

  const formSpansList = Array.from(form.querySelectorAll('.popup__input-error'));
  formSpansList.forEach((span) => {
    span.textContent = ''
  })
}

profileEditButton.addEventListener('click', () => {
  editProfileInfo(infoPopup, buttonFormInfo);
});

infoPopupCloseButton.addEventListener('click', () => {
  closePopup(infoPopup);
  clearForm(formInfo);
});

profileAddButton.addEventListener('click', () => {
  addUserCard(cardPopup, buttonFormCard);
});

cardPopupCloseButton.addEventListener('click', () => {
  closePopup(cardPopup);
  clearForm(formCard)
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
