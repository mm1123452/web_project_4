const editButton = document.querySelector('.button_edit');
const popUp = document.querySelector('.popup');
const formElement =  document.querySelector('.popup__form');
const profileName =  document.querySelector('.profile__name');
const profileTitle =  document.querySelector('.profile__title');
const nameInput = document.querySelector('.popup__name');
const jobInput = document.querySelector('.popup__about');
const exitButton = document.querySelector('.popup__exit');

function handleEdit() {
  popUp.classList.toggle('popup_opened')
  nameInput.value = profileName.textContent;
  jobInput.value =  profileTitle.textContent;
}

function handleExit(evt) {
  evt.preventDefault();
  popUp.classList.toggle('popup_opened');
}

function formSubmitHandler (evt) {
  evt.preventDefault();

  profileName.textContent =  nameInput.value;
  profileTitle.textContent =  jobInput.value;
  popUp.classList.toggle('popup_opened');
}

editButton.addEventListener('click', handleEdit)
exitButton.addEventListener('click', handleExit)
formElement.addEventListener('submit', formSubmitHandler);
