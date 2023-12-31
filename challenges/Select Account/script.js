const profileControlIcon = document.querySelectorAll(".profile-control-icon");
const profileControl = document.querySelectorAll(".profile-control");

profileControlIcon.forEach((icon, i) => {
    icon.addEventListener("click", () => {
        icon.classList.toggle("active");
        profileControl[i].classList.toggle("active");
    });
});