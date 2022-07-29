
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/58f9197164f23d19a89ae54a/1g9401lco';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
const header = document.getElementById("header");
const headerLink = document.querySelectorAll(".headerLink");
const menuButton = document.getElementsByClassName("container")[0];
const memberPhoto = document.querySelectorAll(".memberPhoto");
const slideGallery = [
  "https://source.unsplash.com/random?student",
  "https://source.unsplash.com/random?students",
  "https://source.unsplash.com/random?school",
  "https://source.unsplash.com/random?homework",
  "https://source.unsplash.com/random?study",
  "https://source.unsplash.com/random?library",
  "https://source.unsplash.com/random?coding",
  "https://source.unsplash.com/random?programming",
  "https://source.unsplash.com/random?teacher",
  "https://source.unsplash.com/random?robotics",
];
const contactPhotos = [
 "images/meOne.jpg",
 "images/KayKayKhris2.jpg",
 "https://source.unsplash.com/random?portrait",
 "https://source.unsplash.com/random?man" 
];
function myFunction(x) {
  x.classList.toggle("change");
}

menuButton.addEventListener("click", () => {
  header.className === "openHeader"
    ? (header.className = "closeHeader")
    : (header.className = "openHeader");
});
function closeMobileMenu() {
  header.classList.remove("openHeader");
  menuButton.classList.remove("change");
}
window.addEventListener("resize", () => {
  console.log(`Current Window Size: ${window.innerWidth}px`);
  if (window.innerWidth >= 600) {
    closeMobileMenu();
  }
});

headerLink.forEach((element, index) => {
  element.addEventListener("click", () => {
    closeMobileMenu();
  });
});

("use strict");
// Select all slides
const slides = document.querySelectorAll(".slide");
// loop through slides and set each slides translateX
slides.forEach((slide, indx) => {
  slide.style.backgroundImage = `
   linear-gradient(
    to bottom,
    rgb(255 158 62 / 75%) 70%,
    rgb(255 158 62 / 75%)
  ),url(${slideGallery[indx]})`;
  slide.style.transform = `translateX(${indx * 100}%)`;
});

// select next slide button
const nextSlide = document.querySelector(".btn-next");

// current slide counter
let curSlide = 0;
// maximum number of slides
let maxSlide = slides.length - 1;

function autoSlide() {
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  //   move slide by -100%
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;

  });
}
setInterval(autoSlide, 10000);
// add event listener and navigation functionality
nextSlide.addEventListener("click", function () {
  // check if current slide is the last and reset current slide
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  //   move slide by -100%
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});

// select next slide button
const prevSlide = document.querySelector(".btn-prev");

// add event listener and navigation functionality
prevSlide.addEventListener("click", function () {
  // check if current slide is the first and reset current slide to last
  if (curSlide === 0) {
    curSlide = maxSlide;
  } else {
    curSlide--;
  }

  //   move slide by 100%
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});
memberPhoto.forEach((memberPhoto, index) => {
 memberPhoto.style.backgroundImage= `url("${contactPhotos[index]}")`; 
});
var map = L.map('map').setView([4.77, 7.02], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);
var greenIcon = L.icon({
    iconUrl: 'images/home.png',

    iconSize:     [40, 50], // size of the icon
    iconAnchor:   [25, 45], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-5, -45] // point from which the popup should open relative to the iconAnchor
});


L.marker([4.769239, 7.019775], {icon: greenIcon}).addTo(map).bindPopup("Basket House P.M.B 5043 Port Harcourt Nigeria 👋").openPopup();
map.scrollWheelZoom.disable();
window.addEventListener("scroll", checkScroll);

