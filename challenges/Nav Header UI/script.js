const navRes = document.querySelector("#nav-res");
const navResBtn = document.querySelector("#nav-res-btn");

navResBtn.addEventListener("click", () => {
    navRes.classList.toggle("nav-res")
    if (navRes.classList.contains("nav-res")) {
        navResBtn.style.color = "black";
        navResBtn.setAttribute("name", "close-outline");
    } else {
        navResBtn.style.color = "rgb(241 245 249)";
        navResBtn.setAttribute("name", "reorder-three-outline");
    }

});
