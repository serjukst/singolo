// Header navigation
const NAV = document.getElementById('nav');

NAV.addEventListener('click', (event) => {
    NAV.querySelectorAll('a').forEach(el => el.classList.remove ('nav-link_active'));
    event.target.classList.add('nav-link_active');
});

// Slider
const PREV_LINK = document.getElementById("prev_link");
const NEXT_LINK = document.getElementById("next_link");
let sliderItem2 = document.getElementsByClassName("slider__item-2")[0];
console.log(sliderItem2.style.display == 'flex');
let sliderSection = document.getElementById('slider');

let slideIndex = 1;

PREV_LINK.addEventListener('click', () => {
    showSlides(slideIndex -= 1);  
});
PREV_LINK.addEventListener('click', () => {
    sliderSection.classList.add('slider_colored');
});

NEXT_LINK.addEventListener('click', () => {
    showSlides(slideIndex += 1);
});

NEXT_LINK.addEventListener('click', () => {
    sliderSection.classList.remove('slider_colored');
});

function showSlides(n) {
    
    let i,
        slides = document.getElementsByClassName("slider__item");

    if (n > slides.length) { slideIndex = 1};

    if (n < 1) { slideIndex = slides.length; };

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    slides[slideIndex - 1].style.display = "flex";
}

