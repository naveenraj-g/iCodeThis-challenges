const alarmToggle = document.querySelectorAll(".alarm-button");
const alarm = document.querySelectorAll(".alarm");
const time = document.querySelector(".cur-time");
const dayEl = document.querySelector(".day");

alarmToggle.forEach(toggle => {
    toggle.addEventListener("click", () => {
        alarmToggle.forEach(el => el.classList.remove("alarm-toggle-active"));
        toggle.classList.add("alarm-toggle-active");
        const al = toggle.closest(".alarm");
        alarm.forEach(a => {
            a.classList.add("alarm-disable");
            a.classList.remove("alarm-active");
        });
        al.classList.add("alarm-active");
    });
});

const date = new Date();
const hour = date.getHours();
const minute = date.getMinutes();
const month = date.getDay();
const dat = date.getDate();

const months = {
    0: "JANUARY",
    1: "FEBRUARY",
    2: "MARCH",
    3: "APRIL",
    4: "MAY",
    5: "JUNE",
    6: "JULY",
    7: "AUGUST",
    8: "SEPTEMBER",
    9: "OCTOBER",
    10: "NOVEMBER",
    11: "DECEMBER",
}

let hr;
if (hour > 12) {
    hr = hour - 12
}

time.textContent = `${hr}:${minute} ${hour < 12 ? "AM" : "PM"}`;
dayEl.textContent = `${dat} - ${months[month]}`;