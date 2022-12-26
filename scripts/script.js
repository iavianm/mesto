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
  document.addEventListener('keydown', closePopupByEscape);
  document.addEventListener('mouseup', closePopupByOverlay);
}

function closePopupByEscape(evt) {
  if (evt.key === 'Escape') {
    const openPopup = document.querySelector('.popup_opened');
    const form = openPopup.querySelector('.popup__form')
    closePopup(openPopup, form);
  }
}

function closePopupByOverlay(evt) {
  if (evt.target.classList.contains('popup_opened')) {
    const openPopup = document.querySelector('.popup_opened');
    const form = openPopup.querySelector('.popup__form')
    closePopup(openPopup, form);
  }
}

function closePopup(anyPopup, form) {
  anyPopup.classList.remove('popup_opened');

  document.removeEventListener('keydown', closePopupByEscape);
  document.removeEventListener('mouseup', closePopupByOverlay);

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
