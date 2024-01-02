const slider = function () {
    const slides = document.querySelectorAll(".slide");
    const btnLeft = document.querySelector(".slider-btn--left");
    const btnRight = document.querySelector(".slider-btn--right");

    let currentSlide = 0;
    const maxSlide = slides.length;

    const slideControl = function (slide) {
        slides.forEach((s, i) => {
            s.style.transform = `translateX(${100 * (i - slide)}%)`
        });
    }

    const nextSlide = function () {
        if (currentSlide === maxSlide - 1) {
            currentSlide = 0;
        } else {
            currentSlide++;
        }
        slideControl(currentSlide);
    }

    const previousSlide = function () {
        if (currentSlide === 0) {
            currentSlide = maxSlide - 1;
        } else {
            currentSlide--;
        }
        slideControl(currentSlide);
    }

    const init = function () {
        slideControl(0);
    }
    init();

    btnRight.addEventListener("click", nextSlide);
    btnLeft.addEventListener("click", previousSlide);
}

slider();