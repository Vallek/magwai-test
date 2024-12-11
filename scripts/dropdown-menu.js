"use stict";
(() => {
  // source/scripts/dropdown-menu.js
  var menuButton = document.querySelector(".dropdown__button");
  var menuDropdown = document.querySelector(".dropdown__menu");
  menuButton.addEventListener("click", () => {
    menuDropdown.classList.toggle("hidden");
  });
})();
