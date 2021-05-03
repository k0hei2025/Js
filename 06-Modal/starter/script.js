'use strict';

const modal = document.querySelector('.modal');
const openWindow = document.querySelectorAll('.show-modal');
const closeWindow = document.querySelector('.close-modal');

console.log(openWindow);

for (var i = 0; i < openWindow.length; i++) {
  openWindow[i].addEventListener('click', () => {
    console.log('click');
    modal.classList.remove('hidden');
  });

  closeWindow.addEventListener('click', () => {
    modal.classList.add('hidden');
  });
}