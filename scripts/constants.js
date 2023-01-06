const initialCards = [
  {
    name: 'Привет',
    link: 'https://images.pexels.com/photos/15035870/pexels-photo-15035870.jpeg?cs=srgb&dl=pexels-mikhail-15035870.jpg&fm=jpg&_gl=1*24ip4t*_ga*ODE3MjM1NDgwLjE2NzMwNDA0ODI.*_ga_8JE65Q40S6*MTY3MzA0MDQ4Mi4xLjEuMTY3MzA0MDc3My4wLjAuMA..',
  },
  {
    name: 'Парк',
    link: 'https://images.pexels.com/photos/15035871/pexels-photo-15035871.jpeg?cs=srgb&dl=pexels-mikhail-15035871.jpg&fm=jpg&_gl=1*b40fv2*_ga*ODE3MjM1NDgwLjE2NzMwNDA0ODI.*_ga_8JE65Q40S6*MTY3MzA0MDQ4Mi4xLjEuMTY3MzA0MDc3My4wLjAuMA..',
  },
  {
    name: 'Игры',
    link: 'https://images.pexels.com/photos/15035873/pexels-photo-15035873.jpeg?cs=srgb&dl=pexels-mikhail-15035873.jpg&fm=jpg&_gl=1*35wytq*_ga*ODE3MjM1NDgwLjE2NzMwNDA0ODI.*_ga_8JE65Q40S6*MTY3MzA0MDQ4Mi4xLjEuMTY3MzA0MDY3NC4wLjAuMA..',
  },
  {
    name: 'Лошадка',
    link: 'https://images.pexels.com/photos/15035932/pexels-photo-15035932.jpeg?cs=srgb&dl=pexels-mikhail-15035932.jpg&fm=jpg&_gl=1*exgbb2*_ga*ODE3MjM1NDgwLjE2NzMwNDA0ODI.*_ga_8JE65Q40S6*MTY3MzA0MDQ4Mi4xLjEuMTY3MzA0MTEzOC4wLjAuMA..',
  },
  {
    name: 'Поиски мышей',
    link: 'https://images.pexels.com/photos/15035925/pexels-photo-15035925.jpeg?cs=srgb&dl=pexels-mikhail-15035925.jpg&fm=jpg&_gl=1*exgbb2*_ga*ODE3MjM1NDgwLjE2NzMwNDA0ODI.*_ga_8JE65Q40S6*MTY3MzA0MDQ4Mi4xLjEuMTY3MzA0MTEzOC4wLjAuMA..',
  },
  {
    name: 'Отдых',
    link: 'https://images.pexels.com/photos/15035872/pexels-photo-15035872.jpeg?cs=srgb&dl=pexels-mikhail-15035872.jpg&fm=jpg&_gl=1*rmmz53*_ga*ODE3MjM1NDgwLjE2NzMwNDA0ODI.*_ga_8JE65Q40S6*MTY3MzA0MDQ4Mi4xLjEuMTY3MzA0MDc3My4wLjAuMA..',
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
