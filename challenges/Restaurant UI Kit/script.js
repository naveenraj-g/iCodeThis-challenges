const arrowIconDiv = document.querySelector(".people");
const arrowIcon = document.querySelector(".arrow-icon");
const peopleSelectDiv = document.querySelector(".active");

const selectedPeopleNo = document.querySelector(".selected-people-no");
const noOfPeople = document.querySelectorAll(".no-of-people-list");

const time = document.querySelectorAll(".time");

arrowIconDiv.addEventListener("click", () => {
    arrowIcon.classList.toggle("arrow-invert");
    peopleSelectDiv.classList.toggle("hidden");
});

noOfPeople.forEach(peopleNum => {
    peopleNum.addEventListener("click", () => {
        noOfPeople.forEach(p => p.classList.remove("selected-people-list"));
        const pNum = peopleNum.textContent;
        peopleNum.classList.add("selected-people-list");
        selectedPeopleNo.textContent = `${pNum} people`;
    });
});

time.forEach(t => {
    t.addEventListener("click", () => {
        time.forEach(ti => ti.classList.remove("choosen-timing"));
        t.classList.add("choosen-timing");
    });
});