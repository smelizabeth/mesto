let buttonEdit = document.querySelector('.profile__edit-button');
let popup =  document.querySelector('.popup');
let nameInput = document.querySelector('.popup__input_name');
let jobInput = document.querySelector('.popup__input_job');
let name = document.querySelector('.profile__name');
let job = document.querySelector('.profile__job');
let save = document.querySelector('.popup__submit-button');
let form = document.querySelector('.popup__container');
let close = document.querySelector('.popup__close-button');

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
close.addEventListener('click', closePopup)