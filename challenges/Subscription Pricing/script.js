const radioBtn = document.querySelectorAll(".radio-btn");
const plan = document.querySelectorAll(".plan");
const form = document.querySelector(".plans-form");

function formHandler(e) {
    e.preventDefault();
}

function radioBtnHandler(e) {
    plan.forEach(p => p.classList.remove("plan-border"));
    const checkedBtn = e.target;
    const nearByPlan = checkedBtn.closest(".plan");
    nearByPlan.classList.add("plan-border");
}

form.addEventListener("submit", formHandler);

radioBtn.forEach(btn => {
    btn.addEventListener("change", radioBtnHandler);
});