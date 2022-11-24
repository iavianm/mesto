const page = document.querySelector(".page");
const editButton = page.querySelector(".profile__edit-button");
const closeButton = page.querySelector(".popup__close-button");
const formName = page.querySelector(".popup_name");
const profileName = page.querySelector(".profile__name");
const formDescription = page.querySelector(".popup_description");
const profileDescription = page.querySelector(".profile__description");
const formSubbmit = page.querySelector(".popup__form");
const openPopup = page.querySelector(".popup");

function editForm() {
	openPopup.classList.add("popup_opened");
	formName.value = profileName.textContent;
	formDescription.value = profileDescription.textContent;
}

function closeForm() {
	openPopup.classList.remove("popup_opened");
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
