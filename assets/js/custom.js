//Navigation Bar
const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".nav__list");

hamburger.addEventListener("click", ()=> {
    navbar.classList.toggle("open");
});

//Hamburger
const hamburgerBtn = document.querySelector('.hamburger');
let hamburgerOpen = false;

hamburgerBtn.addEventListener('click', () => {
	if (!hamburgerOpen) {
		hamburgerBtn.classList.add('open');
		hamburgerOpen = true;
	} else {
		hamburgerBtn.classList.remove('open');
		hamburgerOpen = false;
	}
});
