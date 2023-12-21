const inputCost = document.querySelector(".cost-input");
const minCost = document.querySelector(".min");
const addCost = document.querySelector(".add");
const costBtns = document.querySelectorAll(".amount-btn");

document.querySelector(".cost-form").addEventListener("submit", (e) => {
    e.preventDefault();
});

costBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
        costBtns.forEach(bt => {
            if (bt !== btn) bt.classList.remove("active")
        });
        btn.classList.toggle("active");
        const cost = `${e.target.textContent}`;
        inputCost.value = cost;
        btn.classList.contains("active") ? inputCost.classList.add("active") : inputCost.classList.remove("active");
    });
});

addCost.addEventListener("click", () => {
    const inpval = +inputCost.value.slice(1);
    inputCost.value = `$${inpval + 5}`;
});

minCost.addEventListener("click", () => {
    const inpval = +inputCost.value.slice(1);
    if (inpval > 0) {
        inputCost.value = `$${inpval - 5}`;
    }
});