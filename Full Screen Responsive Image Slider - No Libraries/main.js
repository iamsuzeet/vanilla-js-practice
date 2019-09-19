const slides = document.querySelectorAll(".slide");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
const auto = true;
const intervalTime = 5000;
let slideInterval;

//button events
next.addEventListener("click", e => {
  nextSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

prev.addEventListener("click", e => {
  prevSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

const nextSlide = () => {
  const current = document.querySelector(".current");
  //remove current class
  current.classList.remove("current");

  //check for next slide
  if (current.nextElementSibling) {
    //add current to next sibline
    current.nextElementSibling.classList.add("current");
  } else {
    //add current to the start
    slides[0].classList.add("current");
  }

  setTimeout(() => current.classList.remove("current"));
};

const prevSlide = () => {
  const current = document.querySelector(".current");
  //remove current class
  current.classList.remove("current");

  //check for previous slide
  if (current.previousElementSibling) {
    //add current to previous sibline
    current.previousElementSibling.classList.add("current");
  } else {
    //add current to the last
    slides[slides.length - 1].classList.add("current");
  }

  setTimeout(() => current.classList.remove("current"));
};

//auto slide
if (auto) {
  //run next slide at interval
  slideInterval = setInterval(nextSlide, intervalTime);
}
