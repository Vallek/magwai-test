"use stict";
(() => {
  // source/scripts/backgr-anim.js
  var backImg = document.querySelector(".hero");
  var header = document.querySelector(".header");
  var windowHeight = window.innerHeight;
  var elementVisible = header.getBoundingClientRect().bottom;
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
})();
