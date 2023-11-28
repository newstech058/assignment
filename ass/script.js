// search-box open close js code
let navbar = document.querySelector(".navbar");
let searchBox = document.querySelector(".search-box .bx-search");
// let searchBoxCancel = document.querySelector(".search-box .bx-x");

searchBox.addEventListener("click", ()=>{
  navbar.classList.toggle("showInput");
  if(navbar.classList.contains("showInput")){
    searchBox.classList.replace("bx-search" ,"bx-x");
  }else {
    searchBox.classList.replace("bx-x" ,"bx-search");
  }
});

// sidebar open close js code
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function() {
navLinks.style.left = "0";
}
menuCloseBtn.onclick = function() {
navLinks.style.left = "-100%";
}


// sidebar submenu open close js code
let htmlcssArrow = document.querySelector(".htmlcss-arrow");
htmlcssArrow.onclick = function() {
 navLinks.classList.toggle("show1");
}
let moreArrow = document.querySelector(".more-arrow");
moreArrow.onclick = function() {
 navLinks.classList.toggle("show2");
}
let jsArrow = document.querySelector(".js-arrow");
jsArrow.onclick = function() {
 navLinks.classList.toggle("show3");
}



//Examsection
function toggleOptions() {
    var optionsDiv = document.getElementById("options");
    var toggleButton = document.querySelector(".toggle-button");

    if (optionsDiv.style.display === "none") {
        optionsDiv.style.display = "block";
        toggleButton.innerHTML = "-";
    } else {
        optionsDiv.style.display = "none";
        toggleButton.innerHTML = "+";
    }
}

function toggleOptions2() {
    var optionsDiv = document.getElementById("options2");
    var toggleButton = document.querySelector(".toggle-button");

    if (optionsDiv.style.display === "none") {
        optionsDiv.style.display = "block";
        toggleButton.innerHTML = "-";
    } else {
        optionsDiv.style.display = "none";
        toggleButton.innerHTML = "+";
    }
}
function toggleOptions3() {
    var optionsDiv = document.getElementById("options3");
    var toggleButton = document.querySelector(".toggle-button");

    if (optionsDiv.style.display === "none") {
        optionsDiv.style.display = "block";
        toggleButton.innerHTML = "-";
    } else {
        optionsDiv.style.display = "none";
        toggleButton.innerHTML = "+";
    }
}
function toggleOptions4() {
    var optionsDiv = document.getElementById("options4");
    var toggleButton = document.querySelector(".toggle-button");

    if (optionsDiv.style.display === "none") {
        optionsDiv.style.display = "block";
        toggleButton.innerHTML = "-";
    } else {
        optionsDiv.style.display = "none";
        toggleButton.innerHTML = "+";
    }
}
function toggleOptions5() {
    var optionsDiv = document.getElementById("options5");
    var toggleButton = document.querySelector(".toggle-button");

    if (optionsDiv.style.display === "none") {
        optionsDiv.style.display = "block";
        toggleButton.innerHTML = "-";
    } else {
        optionsDiv.style.display = "none";
        toggleButton.innerHTML = "+";
    }
}



function setupProductCardSlider() {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.product-card');

    function showSlide(index) {
      if (index < 0) {
        index = slides.length - 1;
      } else if (index >= slides.length) {
        index = 0;
      }

      document.getElementById('product-slider').style.transform = `translateX(${-100 * index}%)`;
      currentSlide = index;
    }

    // Auto transition every 4 seconds
    setInterval(() => {
      showSlide(currentSlide + 1);
    }, 4000);
}
