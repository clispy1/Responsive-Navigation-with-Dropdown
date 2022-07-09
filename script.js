const navToggle = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const dropMenu = document.querySelectorAll("a.menu-link");

let isOpen = false;

navToggle.addEventListener("click", () => {
	navMenu.classList.toggle("open");
	navToggle.classList.toggle("open");
});

dropMenu.forEach((dMenu) => {
	dMenu.addEventListener("click", () => {
		dMenu.parentElement.classList.toggle("open");
	});
});
