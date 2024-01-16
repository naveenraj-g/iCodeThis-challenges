const navMenu = document.getElementById("header__menu");;
const navOpenBtn = document.getElementById("nav-open-btn");
const navCloseBtn = document.getElementById("nav-close-btn");

navOpenBtn.addEventListener("click", dynamicNav);
navCloseBtn.addEventListener("click", dynamicNav);

function dynamicNav() {
    navMenu.classList.toggle("nav-open");
}