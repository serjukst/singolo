const NAV = document.getElementById('nav');

NAV.addEventListener('click', (event) => {
    NAV.querySelectorAll('a').forEach(el => el.classList.remove ('nav-link_active'));
    event.target.classList.add('nav-link_active');
});


const prevLink = document.getElementById("prev_link");
const nextLink = document.getElementById("next_link");

prevLink.addEventListener('click', function minusSlide() {
    showSlides(slideIndex -= 1);  
});

nextLink.addEventListener('click', function plusSlide() {
    showSlides(slideIndex += 1);
});

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slider__item");

    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    slides[slideIndex - 1].style.display = "block";
}

var slideIndex = 1;
showSlides(slideIndex);