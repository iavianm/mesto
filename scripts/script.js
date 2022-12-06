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

/* Попап инфо */
const infoPopup = page.querySelector(".info-popup");
const infoPopupForm = infoPopup.querySelector(".info-popup__form");
const infoPopupFormInputName = infoPopupForm.querySelector(
	".info-popup__input_form_name"
);
const infoPopupFormInputDescription = infoPopupForm.querySelector(
	".info-popup__input_form_decription"
);
const infoPopupFormButton = infoPopupForm.querySelector(
	".info-popup__form-button"
);
const infoPopupFormTitle = infoPopup.querySelector(".info-popup__form-title");
const infoPopupCloseButton = infoPopup.querySelector(
	".info-popup__close-button"
);

/* Карточки */
const elements = page.querySelector(".elements");

/* Попап добавления картинки */
const cardPopup = page.querySelector(".card-popup");
const cardPopupForm = cardPopup.querySelector(".card-popup__form");
const cardPopupFormInputName = cardPopupForm.querySelector(
	".card-popup__input_form_name"
);
const cardPopupFormInputDescription = cardPopupForm.querySelector(
	".card-popup__input_form_decription"
);
const cardPopupFormButton = cardPopupForm.querySelector(
	".card-popup__form-button"
);
const cardPopupFormTitle = cardPopup.querySelector(".card-popup__form-title");
const cardPopupCloseButton = cardPopup.querySelector(
	".card-popup__close-button"
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
	infoPopupFormTitle.textContent = "Редактировать профиль";
	infoPopupFormInputName.value = profileName.textContent;
	infoPopupFormInputDescription.value = profileDescription.textContent;
	infoPopupFormInputName.placeholder = "Ваше имя";
	infoPopupFormInputDescription.placeholder = "Род деятельности";
	infoPopupFormButton.textContent = "Сохранить";

	openPopup(anyPopup);
}

function addElementCard(anyPopup) {
	cardPopupFormTitle.textContent = "Новое место";
	cardPopupFormInputName.placeholder = "Название";
	cardPopupFormInputDescription.placeholder = "Ссылка на картинку";
	cardPopupFormButton.textContent = "Создать";

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
	createCard(newUserCard);

	cardPopupFormInputName.value = "";
	cardPopupFormInputDescription.value = "";

	closePopup(cardPopup);
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
	editProfileInfo(infoPopup);
});

profileAddButton.addEventListener("click", () => {
	addElementCard(cardPopup);
});

cardPopupCloseButton.addEventListener("click", () => {
	closePopup(cardPopup);
});

infoPopupCloseButton.addEventListener("click", () => {
	closePopup(infoPopup);
});

imagePopupCloseButton.addEventListener("click", () => {
	closePopup(imagePopup);
});

infoPopupForm.addEventListener("submit", profileInfoSubmitHandler);
cardPopupForm.addEventListener("submit", elementCardSubmitHandler);
