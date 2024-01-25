const navToggleIcon = document.querySelectorAll(".nav-toggle-icon");
const headerEle = document.querySelector(".header");

function navToggle() {
    headerEle.classList.toggle("header__active");
}

navToggleIcon.forEach(icon => {
    icon.addEventListener("click", navToggle);
});