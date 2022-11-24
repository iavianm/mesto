const page = document.querySelector(".page");
const editButton = page.querySelector(".profile__edit-button");
const closeButton = page.querySelector(".popup__close-button");
const formName = page.querySelector(".popup__input_name");
const profileName = page.querySelector(".profile__name");
const formDescription = page.querySelector(".popup__input_description");
const profileDescription = page.querySelector(".profile__description");
const formSubbmit = page.querySelector(".popup__form");
const openPopup = page.querySelector(".popup");

const elements = page.querySelectorAll(".element");
const elementsContainer = page.querySelector(".elements");

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

const arr = Array.from(Array(elements.length).keys());

arr.sort(() => Math.random() - 0.5);
elementsContainer.innerHTML = "";

for (let i = 0; i < elements.length; i += 1) {
	elementsContainer.insertAdjacentHTML("beforeend", elements[arr[i]].outerHTML);
}
