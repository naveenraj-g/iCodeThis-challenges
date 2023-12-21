const icon = document.querySelector(".icon");
const dropdownDiv = document.querySelector(".hidden-div");
const btnText = document.querySelector(".btn-span");
const dropdownBtns = dropdownDiv.querySelectorAll(".dropdown-list");
const mainBtn = document.querySelector(".most-recent");

mainBtn.addEventListener("click", () => {
    icon.classList.toggle("rotate");
    dropdownDiv.classList.toggle("active");
});

dropdownBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        btnText.textContent = btn.textContent;
        icon.classList.remove("rotate");
        dropdownDiv.classList.remove("active");
    });
});