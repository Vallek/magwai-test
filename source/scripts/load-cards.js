'use stict';

const loadButton = document.querySelector('.cards__load');
const allCards = document.querySelector('.cards__items');
const card = document.querySelector('.cards__item');
let count = 0;

// Get api data
async function fetchCards() {
	const options = {
		method: 'GET',
		headers: {
			'Content-Type':'application/json'
		}
	};
	const response = await fetch('https://jsonplaceholder.typicode.com/posts?_start=0&_end=20', options);
	if (response.ok) {
		const json = await response.json();
		// Save api data for performance
		sessionStorage.setItem('cardsPreloaded', JSON.stringify(json));
	} else {
		// console.log("HTTP-Error: " + response.status);
	}
}
fetchCards();

// Create new card contents
function cardContent(json, n) {
	// Clone existing card
	const newCard = card.cloneNode(true);
	const cardTitle = newCard.querySelector('.cards__title');
	const cardSubtitle = newCard.querySelector('.cards__subtitle');
	const cardText = newCard.querySelector('.cards__text');
	// Insert data from api into card
	if (json[n] !== undefined) {
		cardTitle.textContent = json[n].title;
		cardSubtitle.textContent = json[n].title;
		cardText.textContent = json[n].body;
		// Append card to page
		allCards.appendChild(newCard);
	} else {
		return;
	}
}

// Counter for max cards loading requests
function countCards() {
	count++;
	sessionStorage.setItem('cardsCount', count);
	let currCount = sessionStorage.getItem('cardsCount');
	// Max card loadings (x5 + initial 10 cards = required 30)
	if (currCount >= 4) {
		// Hide loading button
		loadButton.remove();
	}
}

// Create card nodes
function createCards(json) {
	let currCount = sessionStorage.getItem('cardsCount');
	// Load cardsAmount cards at a time
	let cardsAmount = 5;
	for (let i = 0; i < cardsAmount; i++) {
		if (json !== null) {
			// Formula to go beyond first cardsAmount in json data
			let a = i - cardsAmount + cardsAmount * currCount;
			cardContent(json, a);
		} else {
			return;
		}
	}
}

// Load new cards
function loadCards(evt) {
	evt.preventDefault();
	// Get saved api data, if not saved fetch again
	const json = JSON.parse(sessionStorage.getItem('cardsPreloaded'));
	if (json !== null) {
		countCards();
		createCards(json);
	} else if (json === null) {
		fetchCards();
		countCards();
		createCards(json);
	}
}
loadButton.addEventListener('click', loadCards);

function scrollToBottom() {
	window.scrollTo({
		top: document.body.scrollHeight,
		behavior: 'smooth'
	});
}
loadButton.addEventListener('click', scrollToBottom); 
