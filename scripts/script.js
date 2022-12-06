const page = document.querySelector(".page");
const profile = page.querySelector(".profile");
const editButton = profile.querySelector(".profile__edit-button");
const addButton = profile.querySelector(".profile__add-button");
const closeButton = page.querySelector(".popup__close-button");
const form = page.querySelector(".popup__form");
const formName = form.querySelector(".popup__input_form_name");
const formDescription = form.querySelector(".popup__input_form_decription");
const profileName = page.querySelector(".profile__name");
const profileDescription = page.querySelector(".profile__description");
const popupFormButton = form.querySelector(".popup__form-button");

const openPopup = page.querySelector(".popup");
const formTitle = openPopup.querySelector(".popup__form-title");
const elements = page.querySelectorAll(".element");
const elementsContainer = page.querySelector(".elements");

const imagePopup = page.querySelector(".image-popup");

const templateElement = page.querySelector("#element").content;

const imagePopupPhoto = imagePopup.querySelector(".image-popup__photo");
const imagePopupTitle = imagePopup.querySelector(".image-popup__figcaption");
const imagePopupCloseButton = imagePopup.querySelector(
	".image-popup__close-button"
);

function editForm(event) {
	const buttonValue = event.target.attributes[1].nodeValue;

	if (buttonValue === "Изменить") {
		formTitle.textContent = "Редактировать профиль";
		formName.value = profileName.textContent;
		formDescription.value = profileDescription.textContent;
		formName.placeholder = "Ваше имя";
		formDescription.placeholder = "Род деятельности";
		popupFormButton.textContent = "Сохранить";
	}

	if (buttonValue === "Добавить") {
		formTitle.textContent = "Новое место";
		formName.placeholder = "Название";
		formDescription.placeholder = "Ссылка на картинку";
		popupFormButton.textContent = "Создать";
	}

	openPopup.classList.add("popup_opened");
}

function closeForm() {
	formName.value = "";
	formDescription.value = "";
	openPopup.classList.remove("popup_opened");
}

function formSubmitHandler(event) {
	event.preventDefault();
	const buttonValue = formTitle.textContent;

	if (buttonValue === "Редактировать профиль") {
		profileName.textContent = formName.value;
		profileDescription.textContent = formDescription.value;
	}

	if (buttonValue === "Новое место") {
		const newUserCard = {
			name: formName.value,
			link: formDescription.value,
		};
		addCard(newUserCard);
	}
	closeForm();
}

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

initialCards.forEach((el) => {
	addCard(el);
});

function addCard(el) {
	const userCard = templateElement.cloneNode(true);
	userCard.querySelector(".element__photo").src = el.link;
	userCard.querySelector(".element__photo").alt = el.name;
	userCard.querySelector(".element__title").textContent = el.name;

	elementsContainer.prepend(userCard);
}

elementsContainer.addEventListener("click", (event) => {
	if (event.target.classList.contains("element__like")) {
		event.target.classList.toggle("element__like_active");
	}

	if (event.target.classList.contains("element__delete")) {
		event.target.closest(".element").remove();
	}

	if (event.target.classList.contains("element__photo")) {
		imagePopupPhoto.src = event.target.src;
		imagePopupPhoto.alt = event.target.alt;
		imagePopupTitle.textContent = event.target.alt;
		imagePopup.classList.add("image-popup_opened");
	}
});

function closeImagePopup() {
	imagePopup.classList.remove("image-popup_opened");
}

imagePopupCloseButton.addEventListener("click", closeImagePopup);
editButton.addEventListener("click", editForm);
addButton.addEventListener("click", editForm);
closeButton.addEventListener("click", closeForm);
form.addEventListener("submit", formSubmitHandler);
