const initialCards = [
	{
		name: "Архыз",
		link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
	},
	{
		name: "Челябинская область",
		link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
	},
	{
		name: "Иваново",
		link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
	},
	{
		name: "Камчатка",
		link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
	},
	{
		name: "Холмогорский район",
		link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
	},
	{
		name: "Байкал",
		link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
	},
];

/* Тело страницы */
const page = document.querySelector(".page");

/* Профайл */
const profile = page.querySelector(".profile");
const profileEditButton = profile.querySelector(".profile__edit-button");
const profileAddButton = profile.querySelector(".profile__add-button");
const profileName = profile.querySelector(".profile__name");
const profileDescription = profile.querySelector(".profile__description");

/* Попап */
const popupEditInfo = page.querySelector(".popup-editInfo");
const popupEditInfoForm = popupEditInfo.querySelector(".popup-editInfo__form");
const popupEditInfoFormInputName = popupEditInfoForm.querySelector(
	".popup-editInfo__form_input_name"
);
const popupEditInfoFormInputDescription = popupEditInfoForm.querySelector(
	".popup-editInfo__form_input_decription"
);
const popupEditInfoFormButton = popupEditInfoForm.querySelector(
	".popup-editInfo__form-button"
);
const popupEditInfoFormTitle = popupEditInfo.querySelector(
	".popup-editInfo__form-title"
);
const popupEditInfoCloseButton = popupEditInfo.querySelector(
	".popup-editInfo__close-button"
);

/* Карточки */
const elements = page.querySelector(".elements");

/* Попап добавления картинки */
const popupAddCard = page.querySelector(".popup-addCard");
const popupAddCardForm = popupAddCard.querySelector(".popup-addCard__form");
const popupAddCardFormInputName = popupAddCardForm.querySelector(
	".popup-addCard__form_input_name"
);
const popupAddCardFormInputDescription = popupAddCardForm.querySelector(
	".popup-addCard__form_input_decription"
);
const popupAddCardFormButton = popupAddCardForm.querySelector(
	".popup-addCard__form-button"
);
const popupAddCardFormTitle = popupAddCard.querySelector(
	".popup-addCard__form-title"
);
const popupAddCardCloseButton = popupAddCard.querySelector(
	".popup-addCard__close-button"
);

/* Попап изображений */
const imagePopup = page.querySelector(".image-popup");
const imagePopupPhoto = imagePopup.querySelector(".image-popup__photo");
const imagePopupTitle = imagePopup.querySelector(".image-popup__figcaption");
const imagePopupCloseButton = imagePopup.querySelector(
	".image-popup__close-button"
);

/* Скелет карточки */
const templateElement = page.querySelector("#element").content;

function editProfileInfo(anyPopup) {
	popupEditInfoFormTitle.textContent = "Редактировать профиль";
	popupEditInfoFormInputName.value = profileName.textContent;
	popupEditInfoFormInputDescription.value = profileDescription.textContent;
	popupEditInfoFormInputName.placeholder = "Ваше имя";
	popupEditInfoFormInputDescription.placeholder = "Род деятельности";
	popupEditInfoFormButton.textContent = "Сохранить";

	openPopup(anyPopup);
}

function addElementCard(anyPopup) {
	popupAddCardFormTitle.textContent = "Новое место";
	popupAddCardFormInputName.placeholder = "Название";
	popupAddCardFormInputDescription.placeholder = "Ссылка на картинку";
	popupAddCardFormButton.textContent = "Создать";
	popupAddCardFormInputName.value = "";
	popupAddCardFormInputDescription.value = "";

	openPopup(anyPopup);
}

elements.addEventListener("click", (event) => {
	if (event.target.classList.contains("element__photo")) {
		imagePopupPhoto.src = event.target.src;
		imagePopupPhoto.alt = event.target.alt;
		imagePopupTitle.textContent = event.target.alt;

		openPopup(imagePopup);
	}
});

elements.addEventListener("click", (event) => {
	if (event.target.classList.contains("element__like")) {
		event.target.classList.toggle("element__like_active");
	}
});

elements.addEventListener("click", (event) => {
	if (event.target.classList.contains("element__delete")) {
		event.target.closest(".element").remove();
	}
});

function openPopup(anyPopup) {
	anyPopup.classList.add("popup_opened");
}

function closePopup(anyPopup) {
	anyPopup.classList.remove("popup_opened");
}

function profileInfoSubmitHandler(event) {
	event.preventDefault();

	profileName.textContent = popupEditInfoFormInputName.value;
	profileDescription.textContent = popupEditInfoFormInputDescription.value;

	closePopup(popupEditInfo);
}

function elementCardSubmitHandler(event) {
	event.preventDefault();

	const newUserCard = {
		name: popupAddCardFormInputName.value,
		link: popupAddCardFormInputDescription.value,
	};
	createCard(newUserCard);

	closePopup(popupAddCard);
}

initialCards.forEach((el) => {
	createCard(el);
});

function createCard(el) {
	const userCard = templateElement.cloneNode(true);
	userCard.querySelector(".element__photo").src = el.link;
	userCard.querySelector(".element__photo").alt = el.name;
	userCard.querySelector(".element__title").textContent = el.name;

	addCard(userCard, elements);
}

function addCard(card, container) {
	container.prepend(card);
}

profileEditButton.addEventListener("click", () => {
	editProfileInfo(popupEditInfo);
});

profileAddButton.addEventListener("click", () => {
	addElementCard(popupAddCard);
});

popupAddCardCloseButton.addEventListener("click", () => {
	closePopup(popupAddCard);
});

popupEditInfoCloseButton.addEventListener("click", () => {
	closePopup(popupEditInfo);
});

imagePopupCloseButton.addEventListener("click", () => {
	closePopup(imagePopup);
});

popupEditInfoForm.addEventListener("submit", profileInfoSubmitHandler);
popupAddCardForm.addEventListener("submit", elementCardSubmitHandler);
