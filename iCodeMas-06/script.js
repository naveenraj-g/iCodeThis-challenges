const discountContainer = document.querySelector(".discount-container");
const closeBtn = document.getElementById("close-btn");
const craftBtn = document.querySelectorAll(".craft-btn");

closeBtn.addEventListener("click", () => {
    discountContainer.style.display = "none";
});

craftBtn.forEach(e => {
    e.addEventListener("click", () => {
        e.textContent = "";
        e.insertAdjacentHTML("beforeend", (`Added to cart <ion-icon name="bag-check-outline"></ion-icon>`));
        e.classList.add("added-craft");
    });
});