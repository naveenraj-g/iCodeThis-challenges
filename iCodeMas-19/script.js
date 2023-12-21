const paymentType = document.querySelectorAll(".payment-type");
const ctaForm = document.querySelector(".cta-form");

ctaForm.addEventListener("submit", (e) => e.preventDefault());

paymentType.forEach((btn) => {
    btn.addEventListener("click", () => {
        paymentType.forEach((btn) => btn.classList.remove("active"))
        btn.classList.toggle("active");
    });
});