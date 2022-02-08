var slidesIndex = 1;
showSlides(slidesIndex);

function plusSlides(n) {
    showSlides(slidesIndex += n);
}

function currentSlide(n) {
    showSlides(slidesIndex = n);
}

function showSlides(n) {
    var i;
    var slides =document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slidesIndex = 1}
    if (n < 1) {slidesIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slidesIndex - 1].style.display = "block";
    dots[slidesIndex - 1].className += "active";  

}