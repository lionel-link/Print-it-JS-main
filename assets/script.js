const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

const dots = document.querySelectorAll(".dot");

const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
let index = 0;
let link = "./assets/images/slideshow/";

arrowLeft.addEventListener("click", (e) => {
  e.preventDefault();
  if (index == 0) {
    index = slides.length;
    dots[0].classList.remove("active");
    dots[3].classList.add("active");
  } else {
    dots[index].classList.remove("active");
    dots[index - 1].classList.add("active");
  }
  loadImage(link + slides[index - 1].image, slides[index - 1].tagLine);
  index--;
});

arrowRight.addEventListener("click", (e) => {
  e.preventDefault();
  if (index == slides.length - 1) {
    index = -1;
    dots[3].classList.remove("active");
  }
  loadImage(link + slides[index + 1].image, slides[index + 1].tagLine);
  if (index == -1) {
    dots[index + 1].classList.remove("active");
  } else {
    dots[index].classList.remove("active");
  }

  dots[index + 1].classList.add("active");
  index++;
});

function loadImage(url, tag) {
  const container = document.querySelector("#banner");
  let containerImg = document.querySelector(".banner-img");
  let containerTag = document.querySelector(".tagline");
  const image = new Image();
  containerImg.setAttribute("src", url);
  containerTag.innerHTML = tag;
}
