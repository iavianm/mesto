class Card {
  constructor(data, templateSelector, openPopup) {
    this._title = data.name;
    this._url = data.link;
    this._templateSelector = templateSelector;
    this._openPopup = openPopup;
  }

  _getTemplate() {
    return document.querySelector(this._templateSelector).content.querySelector('.element').cloneNode(true);
  }

  _changeLike() {
    this._elementLike.classList.toggle('element__like_active');
  }

  _deleteCard() {
    this._element.remove();
  }

  _openImagePopup() {
    this._openPopup(this._title, this._url)
  }

  _setEventListeners() {
    this._elementLike.addEventListener('click', () => this._changeLike());
    this._elementDelete.addEventListener('click', () => this._deleteCard());
    this._photoElement.addEventListener('click', () => this._openImagePopup());
  }

  generateCard() {
    this._element = this._getTemplate();
    this._photoElement = this._element.querySelector('.element__photo');
    this._elementLike = this._element.querySelector('.element__like');
    this._elementDelete = this._element.querySelector('.element__delete')

    this._photoElement.src = this._url;
    this._photoElement.alt = this._title;
    this._element.querySelector('.element__title').textContent = this._title;

    this._setEventListeners();

    return this._element;
  }
}

export {Card}
