let modal = document.querySelector('.modal');
let showModal = document.querySelectorAll('.show-modal');
let closeModal = document.querySelector('.close-modal');
let overlay = document.querySelector('.overlay');

for (let index = 0; index < showModal.length; index++) {
  showModal[index].addEventListener('click', function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
}

closeModal.addEventListener('click', function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});
overlay.addEventListener('click', function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});
