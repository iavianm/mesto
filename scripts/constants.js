const initialCards = [
  {
    name: 'Привет',
    link: '../images/hello.jpg',
  },
  {
    name: 'Парк',
    link: '../images/park.jpg',
  },
  {
    name: 'Игры',
    link: '../images/game.jpg',
  },
  {
    name: 'Лошадка',
    link: '../images/horse.jpg',
  },
  {
    name: 'Поиски мышей',
    link: '../images/mouse.jpg',
  },
  {
    name: 'Отдых',
    link: '../images/morning.jpg',
  },
];

const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__form-button',
  inactiveButtonClass: 'popup__form-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input_error_active',
  inputErrors: '.popup__input-error',
};

export { initialCards, validationConfig }
