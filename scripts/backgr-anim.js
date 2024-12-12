"use stict";
const backImg = document.querySelector(".hero");
const header = document.querySelector(".header");
const windowHeight = window.innerHeight;
const elementVisible = header.getBoundingClientRect().bottom;
function scrollAnim() {
  let elementTop = backImg.getBoundingClientRect().top;
  if (elementTop <= windowHeight - elementVisible && elementTop > 0) {
    backImg.classList.remove("scroll-up");
    backImg.classList.add("scroll-down");
  } else if (elementTop < 0) {
    backImg.classList.remove("scroll-down");
    backImg.classList.add("scroll-up");
  }
}
window.addEventListener("scroll", scrollAnim);
