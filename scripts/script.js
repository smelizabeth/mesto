// Wrappers
const editProfileModal = document.querySelector('.popup_type_edit-profile');
const addCardModal = document.querySelector('.popup_type_add-card');
const imageModal = document.querySelector('.popup_type_image');

// Forms
const editForm = editProfileModal.querySelector('.popup__form');
const addCardForm = addCardModal.querySelector('.popup__form');

// Inputs
const titleInputValue = editForm.querySelector('.popup__input_type_name');
const descriptionInputValue = editForm.querySelector('.popup__input_type_job');
const placeInput = addCardForm.querySelector('.popup__input_type_place');
const urlInput = addCardForm.querySelector('.popup__input_type_url');

// Buttons & other DOM elements
const openEditPopupButton = document.querySelector('.profile__edit-button');
const openAddCardModalButton = document.querySelector('.profile__add-button');
const editProfileModalCloseButton = editProfileModal.querySelector('.popup__close-button');
const addCardModalCloseButton = addCardModal.querySelector('.popup__close-button');
const imageModalCloseButton = imageModal.querySelector('.popup__close-button');

const profileTitle = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__job');
const cardTemplate = document.querySelector('.template-card').content.querySelector('.card');
const list = document.querySelector('.cards');
const imageModalTitle = imageModal.querySelector('.popup__image-title');
const imageModalImg = imageModal.querySelector('.popup__image');

// Карточки
const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

// Create card
function createCard(data) {
    const cardElement = cardTemplate.cloneNode(true);
    const cardImage = cardElement.querySelector('.card__image');
    const cardTitle = cardElement.querySelector('.card__info-text');
    const cardDeleteButton = cardElement.querySelector('.card__delete-button');
    const cardLikeButton = cardElement.querySelector('.card__like-button');

    // Like
    cardLikeButton.addEventListener('click', (evt) => {
        evt.target.classList.toggle('card__like-button_active');
    });

    // Delete
    cardDeleteButton.addEventListener('click', () => {
        const deleteCard = cardDeleteButton.closest('.card');
        deleteCard.remove();
    });

    // Open Img
    cardImage.addEventListener('click', () => {
        toggleModalWindow(imageModal);

        imageModalImg.src = cardImage.src;
        imageModalTitle.textContent = cardTitle.textContent;
    });

    cardTitle.textContent = data.name;
    cardImage.src = data.link;
    cardImage.alt = data.name;
    return cardElement;
}

function renderCard(data) {
    list.prepend(createCard(data));
};

initialCards.forEach((data) => {
    renderCard(data);
});

// Save form
function formEditSubmitHandler(evt) {
    evt.preventDefault();
    profileTitle.textContent = titleInputValue.value;
    profileDescription.textContent = descriptionInputValue.value;

    toggleModalWindow(editProfileModal);
};

function formAddCardSubmitHandler(evt) {
    evt.preventDefault();
    renderCard({ name: placeInput.value, link: urlInput.value });
    toggleModalWindow(addCardModal);
};

editForm.addEventListener('submit', formEditSubmitHandler);
addCardForm.addEventListener('submit', formAddCardSubmitHandler);

function toggleModalWindow(modalWindow) {
    modalWindow.classList.toggle('popup_opened');
}

function toggleEditPopup() {
    toggleModalWindow(editProfileModal);
    titleInputValue.value = profileTitle.textContent;
    descriptionInputValue.value = profileDescription.textContent;

};


// Open Close popup
openEditPopupButton.addEventListener('click', toggleEditPopup);
editProfileModalCloseButton.addEventListener('click', toggleEditPopup);

openAddCardModalButton.addEventListener('click', () => {
    toggleModalWindow(addCardModal);
});

addCardModalCloseButton.addEventListener('click', () => {
    toggleModalWindow(addCardModal);
});

imageModalCloseButton.addEventListener('click', () => {
    toggleModalWindow(imageModal);
});
