const day = document.getElementById("day");
const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");
const challengeDays = document.getElementById("challenge-days");
const greet = document.querySelector(".greetings");

const countDownTimer = function () {
    const christmasDate = new Date("December 25, 2023 00:00:00").getTime();
    const countDownInterval = setInterval(function () {
        const currentDate = new Date().getTime();
        const timeRemaining = christmasDate - currentDate;

        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));;
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        const daysStr = days + '';
        const hoursStr = hours + '';
        const minutesStr = minutes + '';
        const secondsStr = seconds + '';

        challengeDays.textContent = daysStr;

        day.textContent = daysStr.length < 2 ? daysStr.padStart(2, '0') : daysStr;
        hour.textContent = hoursStr.length < 2 ? hoursStr.padStart(2, '0') : hoursStr;
        minute.textContent = minutesStr.length < 2 ? minutesStr.padStart(2, '0') : daysStr;
        second.textContent = secondsStr.length < 2 ? secondsStr.padStart(2, '0') : secondsStr;

        if (timeRemaining <= 0) {
            greet.style.display = "block";
            clearInterval(countDownInterval);
        }
    }, 1000);
}

countDownTimer();