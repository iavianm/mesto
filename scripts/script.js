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

function editProfileInfo(anyPopup, button) {
  infoInputName.value = profileName.textContent;
  infoInputDescription.value = profileDescription.textContent;

  if(infoInputName.value === '' || infoInputDescription.value === '') {
    button.classList.add('popup__form-button_disabled')
    button.setAttribute("disabled", "disabled");
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

function openPopup(anyPopup) {
  anyPopup.classList.add('popup_opened');
}

function closePopup(anyPopup, form) {
  anyPopup.classList.remove('popup_opened');

  if (form) {
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
}

function profileInfoSubmitHandler(event) {
  event.preventDefault();

  profileName.textContent = infoInputName.value;
  profileDescription.textContent = infoInputDescription.value;

  closePopup(infoPopup, formInfo);
}

function elementCardSubmitHandler(event) {
  event.preventDefault();

  const newUserCard = {
    name: cardInputTitle.value,
    link: cardInputUrl.value,
  };

  const card = createCard(newUserCard);
  addCard(card, elements);

  closePopup(cardPopup, formCard);
}

initialCards.forEach((el) => {
  const card = createCard(el);
  addCard(card, elements);
});

function addChangeLike(event) {
  event.target.classList.toggle('element__like_active');
}

function addRemoveCard(event) {
  event.target.closest('.element').remove();
}

function addImagePopup(event) {
  imagePopupPhoto.src = event.target.src;
  imagePopupPhoto.alt = event.target.alt;
  imagePopupTitle.textContent = event.target.alt;

  openPopup(imagePopup);
}

function createCard(el) {
  const userCard = templateElement.cloneNode(true);

  const photoElement = userCard.querySelector('.element__photo');
  photoElement.src = el.link;
  photoElement.alt = el.name;
  userCard.querySelector('.element__title').textContent = el.name;
  userCard.querySelector('.element__like').addEventListener('click', addChangeLike);

  userCard.querySelector('.element__delete').addEventListener('click', addRemoveCard);

  photoElement.addEventListener('click', addImagePopup);

  return userCard;
}

function addCard(card, container) {
  container.prepend(card);
}

profileEditButton.addEventListener('click', () => {
  editProfileInfo(infoPopup, buttonFormInfo);
});

infoPopupCloseButton.addEventListener('click', () => {
  closePopup(infoPopup, formInfo);
});

profileAddButton.addEventListener('click', () => {
  addUserCard(cardPopup, buttonFormCard);
});

cardPopupCloseButton.addEventListener('click', () => {
  closePopup(cardPopup, formCard);
});

imagePopupCloseButton.addEventListener('click', () => {
  closePopup(imagePopup);
});

formInfo.addEventListener('submit', profileInfoSubmitHandler);
formCard.addEventListener('submit', elementCardSubmitHandler);
