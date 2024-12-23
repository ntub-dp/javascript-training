let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  let i;
  let slides = document.getElementsByClassName("mySlideshows");
  let dots = document.getElementsByClassName("dot");

  if (slideIndex === 1) {
    prevBtn.style.display = "none";
  } else {
    prevBtn.style.display = "block";
  }

  if (slideIndex === slides.length) {
    nextBtn.style.display = "none";
  } else {
    nextBtn.style.display = "block";
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
