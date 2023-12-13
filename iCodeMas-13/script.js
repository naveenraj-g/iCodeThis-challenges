const userInput = document.querySelector("#user-input");
const userChatUI = document.querySelector(".customer-chat-section");
const chatIcon = document.querySelector(".chat-icon");
const vaSection = document.querySelector(".va-section");
const vaopenCloseBtn = document.querySelector(".va-interaction-btn");

chatIcon.addEventListener("click", (e) => {
    e.preventDefault();
    if (!userInput.value.length <= 0) {
        userChatUI.insertAdjacentHTML("beforeend", `<p class="customer-chat">${userInput.value}</p>`);
        userInput.value = "";
    }
});

vaopenCloseBtn.addEventListener("click", () => {
    vaSection.classList.toggle("active");
    vaopenCloseBtn.classList.toggle("activeRotate");
});