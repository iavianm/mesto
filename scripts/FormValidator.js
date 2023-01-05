class FormValidator {
  constructor(validationConfig, form) {
    this._config = validationConfig;
    this._formElement = form;
    this._inputList = Array.from(this._formElement.querySelectorAll(this._config.inputSelector));
    this._inputListError = Array.from(this._formElement.querySelectorAll(this._config.inputErrors));
    this._buttonElement = this._formElement.querySelector(this._config.submitButtonSelector);
  }

  changeFormButton() {
    const check = this._inputList.some(input => {
      return input.value
    })

    if(check) {
      this._buttonElement.classList.remove('popup__form-button_disabled')
      this._buttonElement.removeAttribute("disabled");
    }

    if(!check) {
      this._buttonElement.classList.add('popup__form-button_disabled')
      this._buttonElement.setAttribute("disabled", true);
    }
  }

  clearForm() {
    this._formElement.reset();

    this._inputList.forEach((input) => {
      input.classList.remove(this._config.inputErrorClass);
    })

    this._inputListError.forEach((span) => {
      span.textContent = ''
    })
  }

  _showInputError(inputElement) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);

    errorElement.classList.add(this._config.errorClass);
    errorElement.textContent = inputElement.validationMessage;
    inputElement.classList.add(this._config.inputErrorClass);
  }

  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);

    errorElement.classList.remove(this._config.errorClass);
    errorElement.textContent = '';
    inputElement.classList.remove(this._config.inputErrorClass);
  }

  _checkInputValidity(inputElement) {
    if (inputElement.validity.valid) {
      this._hideInputError(inputElement);
    } else {
      this._showInputError(inputElement);
    }
  }

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => !inputElement.validity.valid);
  }

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._buttonElement.classList.add(this._config.inactiveButtonClass);
      this._buttonElement.disabled = true;
    } else {
      this._buttonElement.classList.remove(this._config.inactiveButtonClass);
      this._buttonElement.disabled = false;
    }
  }

  _setEventListeners() {
    this._toggleButtonState()

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  }

  enableValidation() {
    this._setEventListeners();
  };
}

export { FormValidator }
