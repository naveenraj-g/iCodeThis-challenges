const radioBtns = document.querySelectorAll(".radio");
const outerCircle = document.querySelector(".outer-circle");
const percent = document.querySelector(".percent");
const chContainer = document.querySelectorAll(".cha-1-con");

radioBtns.forEach((btn, i) => {
    btn.addEventListener("change", () => {
        const container = document.querySelector('.curr-container');
        const index = btn.classList[1].split('-')[1];
        const chaCon = container.querySelector(`.cha-${index}-con-${index}`);

        if (btn.checked) {
            chContainer.forEach(ele => {
                ele.style.border = '1px solid #ccc';
            });
            chaCon.style.border = '1px solid #07070c';
            outerCircle.style.background = `conic-gradient(var(--color) 0% ${index * 25}%, var(--body-color) ${index * 25}% 100%)`
            percent.textContent = `${index * 25}%`;
        }
    })
});