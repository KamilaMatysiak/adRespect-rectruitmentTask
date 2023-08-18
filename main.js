// MASONRY //

var masonry = new Macy({
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

    document.getElementById('popup-img').src = allImages[index-1].src;
}

function nextImg() {
    if(imgIndex+1 > allImages.length) imgIndex = 0;
    imgIndex++;  

    showGallery(imgIndex);
}

function prevImg() {
    if(imgIndex - 1 < 1) imgIndex = allImages.length+1;
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

    if(event.target == closeIcon) {
      menuIcon.style.display = "block";
      closeIcon.style.display = "none";
      menu.style.display = "none";
    } else {
      menuIcon.style.display = "none";
      closeIcon.style.display = "block";
      menu.style.display = "flex";
    }
}