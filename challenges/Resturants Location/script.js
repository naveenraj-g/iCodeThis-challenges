const restaurant = document.querySelectorAll(".restaurant");

restaurant.forEach(res => {
    res.addEventListener("click", () => {
        if (!res.classList.contains("restaurant-active")) {
            restaurant.forEach(res => res.classList.remove("restaurant-active"));
        }

        res.classList.toggle("restaurant-active");
    });
});