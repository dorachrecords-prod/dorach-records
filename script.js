/* SCROLL ANIMATION */

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.classList.add("visible");

}

});

});

sections.forEach(section => {

section.classList.add("hidden");

observer.observe(section);

});


/* CURSOR GLOW */

const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", e => {

glow.style.left = e.clientX + "px";
glow.style.top = e.clientY + "px";

});

