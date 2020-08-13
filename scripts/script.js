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


const imageModalTitle = imageModal.querySelector('.popup__image-title');
const imageModalImg = imageModal.querySelector('.popup__image');

const cardTemplate = document.querySelector('.template-card').content.querySelector('.card');
const list = document.querySelector('.cards');

//Open / close
function openModalWindow(modalWindow) {
    modalWindow.classList.add('popup_opened');
    document.addEventListener('keydown', closeModalEsc);
};

function closeModalWindow(modalWindow) {
    modalWindow.classList.remove('popup_opened');
    document.removeEventListener('keydown', closeModalEsc);
};

function closeModalEsc(evt) {
    const modalOpened = document.querySelector('.popup_opened');
    if (evt.key === 'Escape') {
        closeModalWindow(modalOpened);
    }
};

function closeModalOverlay(e) {
    if (!e.target.closest('.popup__container')) {
        closeModalWindow(e.target.closest('.popup'));
    }
};

editProfileModal.addEventListener("click", closeModalOverlay);
addCardModal.addEventListener("click", closeModalOverlay);
imageModal.addEventListener("click", closeModalOverlay);

// Save
function formEditSubmitHandler(evt) {
    evt.preventDefault();
    profileTitle.textContent = titleInputValue.value;
    profileDescription.textContent = descriptionInputValue.value;
    closeModalWindow(editProfileModal);
};


function addCardSubmitHandler(evt) {
    evt.preventDefault();

    renderCard({ name: placeInput.value, link: urlInput.value })

    closeModalWindow(addCardModal);
    
}


editForm.addEventListener('submit', formEditSubmitHandler);

addCardForm.addEventListener('submit', addCardSubmitHandler);

//click
openEditPopupButton.addEventListener('click', () => {
    if (!openEditPopupButton.classList.contains('popup_opened')) {
        titleInputValue.value = profileTitle.textContent;
        descriptionInputValue.value = profileDescription.textContent;
    }
    openModalWindow(editProfileModal);
});

editProfileModalCloseButton.addEventListener('click', () => {
    closeModalWindow(editProfileModal);

});



openAddCardModalButton.addEventListener('click', () => {
    addCardForm.reset(); 
    resetButton();
    openModalWindow(addCardModal);
});

addCardModalCloseButton.addEventListener('click', () => {
    closeModalWindow(addCardModal)


});

imageModalCloseButton.addEventListener('click', () => {
    closeModalWindow(imageModal)
});

// Create card
function createCard(data) {
    const cardElement = cardTemplate.cloneNode(true);
    const cardImage = cardElement.querySelector('.card__image');
    const cardTitle = cardElement.querySelector('.card__info-text');
    const cardDeleteButton = cardElement.querySelector('.card__delete-button');
    const cardLikeButton = cardElement.querySelector('.card__like-button');

    cardTitle.textContent = data.name;
    cardImage.src = data.link;
    cardImage.alt = data.name;

    function handleImageClick(src, textcontent) {
        openModalWindow(imageModal);
        imageModalImg.src = src;
        imageModalTitle.textContent = textcontent;
        imageModalImg.alt = textcontent;
    }


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
        handleImageClick(cardImage.src, cardTitle.textContent, cardImage.alt);
    });



    return cardElement;
}

function renderCard(data) {
    list.prepend(createCard(data));
};

initialCards.forEach((data) => {
    renderCard(data);
});
