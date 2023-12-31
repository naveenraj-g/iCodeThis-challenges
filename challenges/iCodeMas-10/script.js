const icons = document.querySelectorAll(".icon");
const form = document.querySelector(".feedback-form");
const formBtn = document.querySelector(".btn");
const greet = document.querySelector(".greeting");
const textArea = document.querySelector("#feedback-form");

icons.forEach(icon => {
    icon.addEventListener("click", () => {
        icons.forEach(ic => {
            if (ic != icon) ic.classList.remove("active");
        });
        icon.classList.toggle("active");
    });
});

form.addEventListener("submit", (e) => e.preventDefault());

formBtn.addEventListener("click", () => {
    if (textArea.value.length > 0) {
        form.style.display = "none";
        greet.classList.add("show");
    }
});