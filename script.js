const buttonEdit = document.querySelector('.profile__edit-button');
const popup =  document.querySelector('.popup');
const nameInput = document.querySelector('.popup__input_name');
const jobInput = document.querySelector('.popup__input_job');
const name = document.querySelector('.profile__name');
const job = document.querySelector('.profile__job');
const save = document.querySelector('.popup__submit-button');
const form = document.querySelector('.popup__container');
const close = document.querySelector('.popup__close-button');

function openPopup () {
    popup.classList.add('popup_opened');
    nameInput.value = name.textContent;
    jobInput.value = job.textContent;
}

buttonEdit.addEventListener('click', openPopup);


function closePopup () {
    popup.classList.remove('popup_opened');
}

function formSubmitHandler (evt) {
    evt.preventDefault();
    name.textContent = nameInput.value;
    job.textContent = jobInput.value;
}

save.addEventListener('click', closePopup);
form.addEventListener('submit', formSubmitHandler);
