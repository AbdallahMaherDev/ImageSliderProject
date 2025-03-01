var sliderImges = Array.from(
  document.querySelectorAll(".slider-container  img")
);
var sliderCount = sliderImges.length;

var currentSlide = 1;

var slideNumperElement = document.getElementById("slide-number");

var nextButton = document.querySelector(".next");
var prevButton = document.querySelector(".prev");

nextButton.onclick = nextslide;
prevButton.onclick = prevslide;

var paginationEliment = document.createElement("ul");
paginationEliment.setAttribute("id", "pagination-ul");
for (var i = 1; i <= sliderCount; i++) {
  var paginationItem = document.createElement("li");
  paginationItem.setAttribute("data-index", i);
  paginationItem.appendChild(document.createTextNode(i));
  paginationEliment.appendChild(paginationItem);
}

document.getElementById("indicators").appendChild(paginationEliment);

var pagCreatUl = document.getElementById("pagination-ul");

var pagCreatUlLi = Array.from(document.querySelectorAll("#pagination-ul li"));
pagCreatUlLi.forEach(function (item) {
  item.addEventListener("click", function () {
    currentSlide = parseInt(this.getAttribute("data-index"));
    theChecker();
  });
});
theChecker();
function nextslide() {
  if (currentSlide < sliderCount) {
    currentSlide++;
    theChecker();
  }
}

function prevslide() {
  if (currentSlide > 1) {
    currentSlide--;
    theChecker();
  }
}

function theChecker() {
  slideNumperElement.textContent =
    `slide # ` + currentSlide + ` of ` + sliderCount;
  removeActive();

  sliderImges[currentSlide - 1].classList.add("active");
  pagCreatUl.children[currentSlide - 1].classList.add("active");

  if (currentSlide == 1) {
    prevButton.classList.add("disabled");
  } else {
    prevButton.classList.remove("disabled");
  }
  if (currentSlide == sliderCount) {
    nextButton.classList.add("disabled");
  } else {
    nextButton.classList.remove("disabled");
  }
}
function removeActive() {
  sliderImges.forEach(function (img) {
    img.classList.remove("active");
  });
  pagCreatUlLi.forEach(function (bullet) {
    bullet.classList.remove("active");
  });
}
