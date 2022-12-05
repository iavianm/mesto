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

const openPopup = page.querySelector(".popup");
const formTitle = openPopup.querySelector(".popup__form-title");
const elements = page.querySelectorAll(".element");
const elementsContainer = page.querySelector(".elements");

const templateElement = page.querySelector("#element").content;

function editForm(evt) {
	const buttonValue = evt.target.attributes[1].nodeValue;

	if (buttonValue === "Изменить") {
		formName.value = profileName.textContent;
		formDescription.value = profileDescription.textContent;
	} else {
		formTitle.textContent = "Новое место";
		formName.placeholder = "Название";
		formDescription.placeholder = "Ссылка на картинку";
	}

	openPopup.classList.add("popup_opened");
}

function closeForm() {
	formName.value = "";
	formDescription.value = "";
	openPopup.classList.remove("popup_opened");
}

function formSubmitHandler(evt) {
	evt.preventDefault();
	const buttonValue = formTitle.textContent;

	if (buttonValue === "Редактировать профиль") {
		profileName.textContent = formName.value;
		profileDescription.textContent = formDescription.value;
	} else {
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

editButton.addEventListener("click", editForm);
addButton.addEventListener("click", editForm);
closeButton.addEventListener("click", closeForm);
form.addEventListener("submit", formSubmitHandler);

const elementsLike = elementsContainer.getElementsByClassName("element__like");

for (let elementLike of elementsLike) {
	elementLike.addEventListener("click", function (evt) {
		evt.target.classList.toggle("element__like_active");
	});
}

const elementsTrash = elementsContainer.getElementsByClassName("element__delete");

for (let elementTrash of elementsTrash) {
	elementTrash.addEventListener("click", function (evt) {
		evt.target.closest(".element").remove();
	});
}

