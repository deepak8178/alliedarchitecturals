function initializeSlider(slides, btnLeft, btnRight) {
  const maxSlide = slides.length;
  let curSlide = 0;

  slides.forEach((s, i) => (s.style.transform = `translateX(${100 * i}%)`));

  btnRight.addEventListener("click", function () {
    curSlide = (curSlide + 1) % maxSlide;
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - curSlide)}%)`),
    );
  });

  btnLeft.addEventListener("click", function () {
    curSlide = (curSlide - 1 + maxSlide) % maxSlide;
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - curSlide)}%)`),
    );
  });
}

const slides1 = document.querySelectorAll(".slide-1");
const slides2 = document.querySelectorAll(".slide-2");
const slides3 = document.querySelectorAll(".slide-3");
const slides4 = document.querySelectorAll(".slide-4");
const slides5 = document.querySelectorAll(".slide-5");
const btnLeft1 = document.querySelector(".slider-1__btn-left");
const btnRight1 = document.querySelector(".slider-1__btn-right");
const btnLeft2 = document.querySelector(".slider-2__btn-left");
const btnRight2 = document.querySelector(".slider-2__btn-right");
const btnLeft3 = document.querySelector(".slider-3__btn-left");
const btnRight3 = document.querySelector(".slider-3__btn-right");
const btnLeft4 = document.querySelector(".slider-4__btn-left");
const btnRight4 = document.querySelector(".slider-4__btn-right");
const btnLeft5 = document.querySelector(".slider-5__btn-left");
const btnRight5 = document.querySelector(".slider-5__btn-right");

initializeSlider(slides1, btnLeft1, btnRight1);
initializeSlider(slides2, btnLeft2, btnRight2);
initializeSlider(slides3, btnLeft3, btnRight3);
initializeSlider(slides4, btnLeft4, btnRight4);
initializeSlider(slides5, btnLeft5, btnRight5);
