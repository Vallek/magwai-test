"use stict";(()=>{var e=document.querySelector(".hero"),l=window.innerHeight,o=116;function t(){let s=e.getBoundingClientRect().top;s<=l-o&&s>0?(e.classList.remove("scroll-up"),e.classList.add("scroll-down")):s<0&&(e.classList.remove("scroll-down"),e.classList.add("scroll-up"))}window.addEventListener("scroll",t);})();