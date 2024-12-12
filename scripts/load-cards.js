"use stict";
let count = 0;
const loadButton = document.querySelector(".cards__load");
const allCards = document.querySelector(".cards__items");
const card = document.querySelector(".cards__item");
async function fetchCards() {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  };
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", options);
  if (response.ok) {
    const json = await response.json();
    let n = 20;
    const cardsRequired = json.slice(0, n);
    sessionStorage.setItem("cardsPreloaded", JSON.stringify(cardsRequired));
  }
}
fetchCards();
function cardContent(json, n) {
  const newCard = card.cloneNode(true);
  const cardTitle = newCard.querySelector(".cards__title");
  const cardSubtitle = newCard.querySelector(".cards__subtitle");
  const cardText = newCard.querySelector(".cards__text");
  if (json[n] !== void 0) {
    cardTitle.textContent = json[n].title;
    cardSubtitle.textContent = json[n].title;
    cardText.textContent = json[n].body;
    allCards.appendChild(newCard);
  } else {
    return;
  }
}
function countCards() {
  count++;
  sessionStorage.setItem("cardsCount", count);
  let currCount = sessionStorage.getItem("cardsCount");
  if (currCount >= 4) {
    loadButton.remove();
  }
}
function createCards(json) {
  let currCount = sessionStorage.getItem("cardsCount");
  let cardsAmount = 5;
  for (let i = 0; i < cardsAmount; i++) {
    if (json !== null) {
      let a = i - cardsAmount + cardsAmount * currCount;
      cardContent(json, a);
    } else {
      return;
    }
  }
}
function loadCards(evt) {
  evt.preventDefault();
  const json = JSON.parse(sessionStorage.getItem("cardsPreloaded"));
  if (json !== null) {
    countCards();
    createCards(json);
  } else if (json === null) {
    fetchCards();
    createCards(json);
  }
}
loadButton.addEventListener("click", loadCards);
function scrollToBottom() {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth"
  });
}
loadButton.addEventListener("click", scrollToBottom);
