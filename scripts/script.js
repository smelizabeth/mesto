const buttonEdit = document.querySelector('.profile__edit-button');
const popup =  document.querySelector('.popup');
let nameInput = document.querySelector('.popup__input_name');
let jobInput = document.querySelector('.popup__input_job');
let name = document.querySelector('.profile__name');
let job = document.querySelector('.profile__job');
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
close.addEventListener('click', closePopup);

function formSubmitHandler (evt) {
    evt.preventDefault();
    name.textContent = nameInput.value;
    job.textContent = jobInput.value;
}

save.addEventListener('click', closePopup);
form.addEventListener('submit', formSubmitHandler);
