"use stict";var r=document.querySelector(".cards__load"),u=document.querySelector(".cards__items"),f=document.querySelector(".cards__item"),c=0;async function l(){let t=await fetch("https://jsonplaceholder.typicode.com/posts?_start=0&_end=20",{method:"GET",headers:{"Content-Type":"application/json"}});if(t.ok){let o=await t.json();sessionStorage.setItem("cardsPreloaded",JSON.stringify(o))}}l();function C(e,t){let o=f.cloneNode(!0),n=o.querySelector(".cards__title"),s=o.querySelector(".cards__subtitle"),i=o.querySelector(".cards__text");if(e[t]!==void 0)n.textContent=e[t].title,s.textContent=e[t].title,i.textContent=e[t].body,u.appendChild(o);else return}function a(){c++,sessionStorage.setItem("cardsCount",c),sessionStorage.getItem("cardsCount")>=4&&r.remove()}function d(e){let t=sessionStorage.getItem("cardsCount"),o=5;for(let n=0;n<o;n++)if(e!==null){let s=n-o+o*t;C(e,s)}else return}function m(e){e.preventDefault();let t=JSON.parse(sessionStorage.getItem("cardsPreloaded"));t!==null?(a(),d(t)):t===null&&(l(),a(),d(t))}r.addEventListener("click",m);function p(){window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"})}r.addEventListener("click",p);
