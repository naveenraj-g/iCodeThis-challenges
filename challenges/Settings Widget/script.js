const menuIcon = document.querySelector(".menu-icon");
const container = document.querySelector(".container");
const menuItems = document.querySelector(".menu-items");

menuIcon.addEventListener("click", (e) => {
    menuItems.classList.toggle("show");
});