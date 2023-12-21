const cost = document.querySelectorAll(".cost");
const toggleContainer = document.querySelector(".toggle-container");
const toggleBall = document.querySelector(".toggle-ball");

const month = [19, 99];
const year = [199, 999];

const planChanger = function (cost, value, timePeriod) {
    cost.forEach((ele, i) => {
        const span = document.createElement("span");
        span.classList.add("month-year");
        span.innerText = ` / ${timePeriod}`;
        ele.innerText = `$${value[i]}`;
        ele.append(span);
    });
}

planChanger(cost, month, "month");

toggleContainer.addEventListener("click", () => {
    if (toggleBall.classList.contains("toggle-ball-left")) {
        toggleBall.classList.remove("toggle-ball-left");
        toggleBall.classList.add("toggle-ball-right");
        planChanger(cost, year, "year");
    } else {
        toggleBall.classList.remove("toggle-ball-right");
        toggleBall.classList.add("toggle-ball-left");
        planChanger(cost, month, "month");
    }
});