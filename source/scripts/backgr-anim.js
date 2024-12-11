'use stict';

const backImg = document.querySelector('.hero');

const windowHeight = window.innerHeight;
const elementVisible = 116;

	function scrollAnim() {
		let elementTop = backImg.getBoundingClientRect().top;
    console.log(elementTop);
		if (elementTop <= windowHeight - elementVisible && elementTop > 0) {
      backImg.classList.remove("scroll-up");
			backImg.classList.add("scroll-down");
    } else if (elementTop < 0) {
      backImg.classList.remove("scroll-down");
      backImg.classList.add("scroll-up");
    }
	}
	window.addEventListener('scroll', scrollAnim);