const page = document.querySelector(".page");
const editButton = page.querySelector(".profile__edit-button");
const closeButton = page.querySelector(".popup__close-button-img");
const formName = page.querySelector(".popup__input-name");
const profileName = page.querySelector(".profile__name");
const formDescription = page.querySelector(".popup__input-description");
const profileDescription = page.querySelector(".profile__description");
const formSubbmit = page.querySelector(".popup__form");

function editForm() {
	page.querySelector(".popup").classList.add("popup_opened");
}

function closeForm() {
	page.querySelector(".popup").classList.remove("popup_opened");
	formName.value = profileName.textContent;
	formDescription.value = profileDescription.textContent;
}

function formSubmitHandler(evt) {
	evt.preventDefault();
	profileName.textContent = formName.value;
	profileDescription.textContent = formDescription.value;
	closeForm();
}

editButton.addEventListener("click", editForm);
closeButton.addEventListener("click", closeForm);
formSubbmit.addEventListener("submit", formSubmitHandler);

formName.value = profileName.textContent;
formDescription.value = profileDescription.textContent;
