const questionDiv = document.querySelectorAll(".question");
const openCloseIcon = document.querySelectorAll(".interactive-icon");
const answerDiv = document.querySelectorAll(".answer");
const ans = document.querySelectorAll("ans");

openCloseIcon.forEach((iconCloseOpen) => {
    iconCloseOpen.addEventListener("click", (e) => {
        const clickedIcon = e.target;
        const parentEle = clickedIcon.parentElement.parentElement;
        const ansDiv = parentEle.querySelector(".answer");
        const answer = ansDiv.querySelector(".ans");

        clickedIcon.classList.toggle("close-icon");
        ansDiv.classList.toggle("active-height");
        answer.classList.toggle("active");
    });
});