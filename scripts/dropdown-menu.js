"use stict";
const menuButton = document.querySelector(".dropdown__button");
const menuDropdown = document.querySelector(".dropdown__menu");
menuButton.addEventListener("click", () => {
  menuDropdown.classList.toggle("hidden");
});
