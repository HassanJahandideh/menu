const modalBtn = document.querySelector('.modal-btn');
const modal = document.querySelector('.modal-overlay');
const closeBtn = document.querySelector('.close-btn');

modalBtn.addEventListener('click', () => {
    if (modal.classList.contains('open-modal')) {
        modal.classList.remove('open-modal');
    } else {
        modal.classList.add('open-modal');
    }
});

closeBtn.addEventListener('click', () => {
        modal.classList.remove('open-modal');
});