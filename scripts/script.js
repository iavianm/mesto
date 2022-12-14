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
const infoPopupForm = infoPopup.querySelector('.info-popup__form');
const infoPopupFormInputName = infoPopupForm.querySelector('.info-popup__input_form_name');
const infoPopupFormInputDescription = infoPopupForm.querySelector('.info-popup__input_form_decription');
const infoPopupFormButton = infoPopupForm.querySelector('.info-popup__form-button');
const infoPopupFormTitle = infoPopup.querySelector('.info-popup__form-title');
const infoPopupCloseButton = infoPopup.querySelector('.info-popup__close-button');

/* Карточки */
const elements = page.querySelector('.elements');

/* Попап добавления картинки */
const cardPopup = page.querySelector('.card-popup');
const cardPopupForm = cardPopup.querySelector('.card-popup__form');
const cardPopupFormInputName = cardPopupForm.querySelector('.card-popup__input_form_name');
const cardPopupFormInputDescription = cardPopupForm.querySelector('.card-popup__input_form_decription');
const cardPopupFormButton = cardPopupForm.querySelector('.card-popup__form-button');
const cardPopupFormTitle = cardPopup.querySelector('.card-popup__form-title');
const cardPopupCloseButton = cardPopup.querySelector('.card-popup__close-button');

/* Попап изображений */
const imagePopup = page.querySelector('.image-popup');
const imagePopupPhoto = imagePopup.querySelector('.popup__photo');
const imagePopupTitle = imagePopup.querySelector('.popup__figcaption');
const imagePopupCloseButton = imagePopup.querySelector('.image-popup__close-button');

/* Скелет карточки */
const templateElement = page.querySelector('#element').content;

function editProfileInfo(anyPopup) {
  infoPopupFormInputName.value = profileName.textContent;
  infoPopupFormInputDescription.value = profileDescription.textContent;

  openPopup(anyPopup);
}

function openPopup(anyPopup) {
  anyPopup.classList.add('popup_opened');
}

function closePopup(anyPopup) {
  anyPopup.classList.remove('popup_opened');
}

function profileInfoSubmitHandler(event) {
  event.preventDefault();

  profileName.textContent = infoPopupFormInputName.value;
  profileDescription.textContent = infoPopupFormInputDescription.value;

  closePopup(infoPopup);
}

function elementCardSubmitHandler(event) {
  event.preventDefault();

  const newUserCard = {
    name: cardPopupFormInputName.value,
    link: cardPopupFormInputDescription.value,
  };

  const card = createCard(newUserCard);
  addCard(card, elements);

  cardPopupFormInputName.value = '';
  cardPopupFormInputDescription.value = '';

  closePopup(cardPopup);
}

initialCards.forEach((el) => {
  const card = createCard(el);
  addCard(card, elements);
});

function createCard(el) {
  const userCard = templateElement.cloneNode(true);

  const photoElement = userCard.querySelector('.element__photo');
  photoElement.src = el.link;
  photoElement.alt = el.name;
  userCard.querySelector('.element__title').textContent = el.name;

  userCard.querySelector('.element__like').addEventListener('click', (event) => {
    event.target.classList.toggle('element__like_active');
  });

  userCard.querySelector('.element__delete').addEventListener('click', (event) => {
    event.target.closest('.element').remove();
  });

  photoElement.addEventListener('click', (event) => {
    imagePopupPhoto.src = event.target.src;
    imagePopupPhoto.alt = event.target.alt;
    imagePopupTitle.textContent = event.target.alt;

    openPopup(imagePopup);
  });

  return userCard;
}

function addCard(card, container) {
  container.prepend(card);
}

profileEditButton.addEventListener('click', () => {
  editProfileInfo(infoPopup);
});

profileAddButton.addEventListener('click', () => {
  openPopup(cardPopup);
});

cardPopupCloseButton.addEventListener('click', () => {
  closePopup(cardPopup);
});

infoPopupCloseButton.addEventListener('click', () => {
  closePopup(infoPopup);
});

imagePopupCloseButton.addEventListener('click', () => {
  closePopup(imagePopup);
});

infoPopupForm.addEventListener('submit', profileInfoSubmitHandler);
cardPopupForm.addEventListener('submit', elementCardSubmitHandler);
