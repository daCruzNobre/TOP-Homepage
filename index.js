// slides logic

// get DOM elements
const slidesECommerce = document.querySelectorAll(".slides");
const slidesCustom = document.querySelectorAll(".slides-2");
const slidesUrl = document.querySelectorAll(".slides-3");
const prevEcommerce = document.querySelector(".prevECommerce");
const nextEcommerce = document.querySelector(".nextECommerce");
const prevCustom = document.querySelector(".prevCustom");
const nextCustom = document.querySelector(".nextCustom");
const prevUrl = document.querySelector(".prevUrl");
const nextUrl = document.querySelector(".nextUrl");


let slideIndex = 1;
// console.log(slidesCustom);
showSlides(slideIndex, slidesECommerce);
showSlides(slideIndex, slidesCustom);
showSlides(slideIndex, slidesUrl);

 
//Next/previous controls
function plusSlides(n, slidesName) {
  // console.log(slidesName);
  showSlides(slideIndex += n, slidesName);
}

// add event listners
prevEcommerce.addEventListener("click", (e) => {plusSlides(-1, slidesECommerce)});
nextEcommerce.addEventListener("click", (e) => {plusSlides(1, slidesECommerce)});
prevCustom.addEventListener("click", (e) => {plusSlides(-1, slidesCustom)});
nextCustom.addEventListener("click", (e) => {plusSlides(1, slidesCustom)});
prevUrl.addEventListener("click", (e) => {plusSlides(-1, slidesUrl)});
nextUrl.addEventListener("click", (e) => {plusSlides(1, slidesUrl)});

function showSlides(n, slidesName) {
  let i;
  let slides = slidesName;
  // console.log(slidesCustom);
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
  console.log(slides)
}