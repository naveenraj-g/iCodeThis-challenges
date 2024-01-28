const collectionAll = document.querySelectorAll(".collection");

collectionAll.forEach(cl => {
    cl.addEventListener("click", () => {
        collectionAll.forEach(c => c.classList.remove("active"));
        cl.classList.add("active");
    });
});