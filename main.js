// MASONRY //

var masonry = Macy({
  container: "#macy-container",
  mobileFirst: true,
  trueOrder: false,
  waitForImages: false,
  columns: 1,
  margin: 43,
  breakAt: {
    1600: 4,
    1023: 3,
    767: 2,
  },
});

function showImages(number) {
  const images = document.querySelectorAll(".tile--hidden");

  for (let i = 0; i < number; i++) {
    images[i].classList.remove("tile--hidden");
    images[i].classList.add("tile--show");
  }
}

function viewMore() {
  showImages(9);
  document.getElementById("view-more").style.display = "none";
  masonry.reInit();
}

// POP-UP GALLERY //

var imgIndex = 1;
const allImages = document.querySelectorAll(".gallery-img");

function openImg(id) {
  showGallery(id);
}

function showGallery(index) {
  const gallery = document.querySelector("#popup");
  gallery.style.display = "flex";

  document.getElementById("popup-img").src = allImages[index - 1].src;
}

function nextImg() {
  if (imgIndex + 1 > allImages.length) imgIndex = 0;
  imgIndex++;

  showGallery(imgIndex);
}

function prevImg() {
  if (imgIndex - 1 < 1) imgIndex = allImages.length + 1;
  imgIndex--;

  showGallery(imgIndex);
}

function closeGallery() {
  const gallery = document.querySelector("#popup");
  gallery.style.display = "none";
}

// NAVIGATION //

function toggleMenu() {
  const menuIcon = document.querySelector(".hamburger__icon");
  const closeIcon = document.querySelector(".hamburger__icon--close");
  const menu = document.querySelector(".nav__menu");

  if (event.target == closeIcon) {
    menuIcon.style.display = "block";
    closeIcon.style.display = "none";
    menu.style.display = "none";
  } else {
    menuIcon.style.display = "none";
    closeIcon.style.display = "block";
    menu.style.display = "flex";
  }
}

// SLIDER //
const slides = document.querySelectorAll(".slide");
var sliderIndex = 0;
var slideInterval = setInterval(nextSlide, 5000);

function prevSlide() {
  if (sliderIndex - 1 < 0) sliderIndex = slides.length - 1;
  else sliderIndex--;
  showSlides(sliderIndex);
}

function nextSlide() {
  if (sliderIndex < slides.length - 1) sliderIndex++;
  else sliderIndex = 0;
  showSlides(sliderIndex);
}

function showSlides(index) {
  clearInterval(slideInterval);

  for (let i = 0; i < slides.length; i++) {
    if (i > index) slides[i].style.left = "100%";
    if (i < index) slides[i].style.left = "-100%";
    slides[i].style.zIndex = "-1";
  }

  slides[index].style.left = "0";
  slides[index].style.zIndex = "10";

  slideInterval = setInterval(nextSlide, 20000);
}

showSlides(0);

// LIGHT CURSOR //

const allCards = document.querySelectorAll(".card");

window.addEventListener("mousemove", (ev) => {
  allCards.forEach((e) => {
    const light = e.querySelector(".card__light");
    const fakelight = e.querySelector(".card__fakelight");

    const rec = fakelight.getBoundingClientRect();

    light.animate(
      [
        {
          transform: `translate(${ev.clientX - rec.left - rec.width / 2}px,${
            ev.clientY - rec.top - rec.height / 2
          }px)`,
        },
      ],
      {
        duration: 300,
        fill: "forwards",
      }
    );
  });
});
