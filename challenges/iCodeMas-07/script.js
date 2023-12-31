const craftBtn = document.querySelectorAll(".craft-btn");

craftBtn.forEach(e => {
    e.addEventListener("click", () => {
        e.textContent = "";
        e.insertAdjacentHTML("beforeend", (`Added to cart <ion-icon name="bag-check-outline"></ion-icon>`));
        e.classList.add("added-craft");
    });
});