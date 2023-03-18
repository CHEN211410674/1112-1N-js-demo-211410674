'use strict';

const modal = document.querySelectorAll('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelectorAll('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log('modal', modal);
console.log('show-modal', btnsOpenModal);
console.log('close-modal', btnCloseModal);

for(let i =0; i< btnsOpenModal.length; i++ ) {
    btnsOpenModal[i].addEventListener('click',()=>{
        modal[i].classList.remove('hidden');
        overlay.classList.remove('hidden');
    });
}
for(let i=0;i<btnsOpenModal.length;i++){
    btnCloseModal[i].addEventListener('click',() => {
        close();
    })
}
overlay.addEventListener('click',() => {
    if(!overlay.classList.contains('hidden')){
        close();
    }
});
const close = () =>{
    modal.forEach((item)=>{
        if(!item.classList.contains('hidden')){
            item.classList.add('hidden');
        }
    });
    overlay.classList.add('hidden');
}
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        close();
    }
});



