let slideIndex2 = 1;
showSlides2(slideIndex2);

function plusSlides2(n) {
  showSlides2((slideIndex2 += n));
}

function currentSlide2(n) {
  showSlides2((slideIndex2 = n));
}

function showSlides2() {
  const prevBtn = document.querySelector(".prev2");
  const nextBtn = document.querySelector(".next2");
  const mySlideshows2Container = document.querySelector(
    ".slideshow-container2"
  );
  const mySlideshows2 = document.querySelector(".mySlideshows2");
  let slides = document.querySelectorAll(".mySlideshows2 > img");

  let dots = document.getElementsByClassName("dot2");

  if (slideIndex2 === 1) {
    prevBtn.style.display = "none";
  } else {
    prevBtn.style.display = "block";
  }

  const containerWidth = mySlideshows2Container.offsetWidth;
  const cnt = containerWidth / 100 / 2;
  
  if (slideIndex2 * cnt >= slides.length) {
    nextBtn.style.display = "none";
  } else {
    nextBtn.style.display = "block";
  }
  mySlideshows2.style.transform = `translateX(${
    -containerWidth * (slideIndex2 - 1)
  }px)`;

  [...dots].forEach((dot) => {
    dot.className = dot.className.replace(" active", "");
  });
  dots[slideIndex2 - 1].className += " active";
}
