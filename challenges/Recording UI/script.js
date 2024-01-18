const time = document.querySelector(".recording-time");
const pauseBtn = document.querySelector(".recording-pause");
const stopBtn = document.querySelector(".recording-stop");

const playIcon = `<ion-icon name="play" class="recording-icon"></ion-icon> Play`;
const pauseIcon = `<ion-icon name="pause" class="recording-icon"></ion-icon> Pause`;

let timer;
let seconds = 0;
let minutes = 0;
let hours = 0;
let icon;
let iconAttr;

function updateRecordingTime() {
    seconds++;

    if (seconds === 60) {
        seconds = 0;
        minutes++;

        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }

    const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    time.textContent = formattedTime;
}

pauseBtn.addEventListener("click", () => {
    icon = pauseBtn.querySelector(".recording-icon");
    iconAttr = icon.getAttribute("name");
    if (iconAttr === "play") {
        timer = setInterval(updateRecordingTime, 1000);
    }

    if (iconAttr === "pause") {
        clearInterval(timer);
    }

    iconAttr === "play" ? pauseBtn.innerHTML = pauseIcon : pauseBtn.innerHTML = playIcon;
});

stopBtn.addEventListener("click", () => {
    iconAttr === "play" ? pauseBtn.innerHTML = playIcon : "";
    clearInterval(timer);
    seconds = 0;
    minutes = 0;
    hours = 0;
    time.textContent = "00:00:00";
});