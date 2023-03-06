/*==================== SHOW MENU ====================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu');
    });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu');
    });
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
    const navMenu = document.getElementById('nav-menu');
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

var slideIndex = 0;
showSlides();
var slidesTimeout;

function showSlides() {
  console.log(slideIndex);
  let i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  if (slideIndex > slides.length-1) {slideIndex = 0;}
  if (slideIndex < 0) {slideIndex = slides.length-1;}
  slideIndex++;
  slides[slideIndex-1].style.display = "block";
  slidesTimeout = setTimeout(showSlides, 10000); // Change image every 10 seconds
}

function plusSlides(n) {
  clearTimeout(slidesTimeout);
  if (n < 0) {slideIndex -= 2;}
  showSlides();
  //slideIndex += n;
  //console.log(slideIndex);
}
