let editButton = document.querySelector('.profile__edit');
let popUp = document.querySelector('.popup');
let formElement =  document.querySelector('.popup__form');
let profileName =  document.querySelector('.profile__name');
let profileTitle =  document.querySelector('.profile__title');
let nameInput = document.querySelector('.popup__name');
let jobInput = document.querySelector('.popup__about');
let exitButton = document.querySelector('.popup__exit');


function handleEdit() {
  popUp.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  jobInput.value =  profileTitle.textContent;
}

function handleExit() {
  popUp.classList.remove('popup_opened');
}

function formSubmitHandler (evt) {
  evt.preventDefault();

  profileName.textContent =  nameInput.value;
  profileTitle.textContent =  jobInput.value;

  popUp.classList.remove('popup_opened');

}


editButton.addEventListener('click', handleEdit)
exitButton.addEventListener('click', handleExit)
formElement.addEventListener('submit', formSubmitHandler);
