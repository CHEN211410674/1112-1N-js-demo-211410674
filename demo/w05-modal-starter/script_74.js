'use strict';

const modal = document.querySelectorAll('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelectorAll('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log('modal', modal);
console.log('show-modal', btnsOpenModal);

const openModal = (index) => {
    modal[index].classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const closeModal = (index) => {
    modal[index].classList.add('hidden');
    overlay.classList.remove('hidden');
}

for(let i=0; i<btnsOpenModal.length; i++){
    btnsOpenModal[i].addEventListener('click', (e) => openModal(i))
    btnsCloseModal[i].addEventListener('click', (e) => closeModal(i))

    document.addEventListener('keydon', (e) =>{
        if (e.key === 'Escape' && !modal[i].classList.contains('hidden')){
            closeModal(i);
        }
    });
};



