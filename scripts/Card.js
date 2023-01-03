import {openPopup} from "./index.js";

function addImagePopup(event) {
  imagePopupPhoto.src = event.target.src;
  imagePopupPhoto.alt = event.target.alt;
  imagePopupTitle.textContent = event.target.alt;

  openPopup(imagePopup);
}

function addChangeLike(event) {
  event.target.classList.toggle('element__like_active');
}

function addRemoveCard(event) {
  event.target.closest('.element').remove();
}

class Card {
  constructor(data, templateSelector) {
    this._title = data.name;
    this._url = data.link;
    this._templateSelector = templateSelector;
  }

  _getTemplate() {
    return this._templateSelector.cloneNode(true);
  }

  _setEventListeners() {
    this._element.querySelector('.element__like').addEventListener('click', addChangeLike);
    this._element.querySelector('.element__delete').addEventListener('click', addRemoveCard);
    this._photoElement.addEventListener('click', addImagePopup);
  }

  generateCard() {
    this._element = this._getTemplate();
    this._photoElement = this._element.querySelector('.element__photo');

    this._photoElement.src = this._url;
    this._photoElement.alt = this._title;
    this._element.querySelector('.element__title').textContent = this._title;

    this._setEventListeners();

    return this._element;
  }
}

export {Card}
