const planDesc = document.querySelector(".plan-desc");
const planCost = document.querySelector(".plan-cost");
const downloadDetail = document.querySelectorAll(".download-detail");

downloadDetail.forEach(ele => {
    ele.addEventListener("click", () => {
        downloadDetail.forEach(el => el.classList.remove("active"));
        ele.classList.add("active");
        const [plan, price] = ele.dataset.plan.split(" ");
        planDesc.textContent = plan;
        planCost.textContent = price;
    });
});