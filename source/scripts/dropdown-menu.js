'use stict';

const menuButton = document.querySelector('.dropdown-menu__button');
const menuDropdown = document.querySelector('.dropdown-menu__list');
menuButton.addEventListener('click', () => {
	menuDropdown.classList.toggle('hidden');
});