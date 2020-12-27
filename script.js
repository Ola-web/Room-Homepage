let harmburger = document.getElementsByClassName('hamburger');
let close = document.querySelector('.close');
let topnav = document.querySelector('.topnav')
let roomLogo = document.querySelectorAll('.room__logo')



// harmburger expand function
function expand() {
    topnav.style.display = "flex";
    for (let i = 0; i < harmburger.length; i++) {
        harmburger[i].style.display = 'none';
        roomLogo[i].style.display = "none"
    }
    document.body.style.opacity = ".4"
}


// close function X button
function closeTop() {
    topnav.style.display = "none";
    for (let i = 0; i < harmburger.length; i++) {
        harmburger[i].style.display = ""
        roomLogo[i].style.display = "flex"
    }

    document.body.style.opacity = "1"
}



// slide show
var slideIndex = 1;
showSlide(slideIndex);

function plusSlides(n) {
    showSlide(slideIndex += n)
}


function showSlide(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "grid";
}


