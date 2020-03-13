// Header navigation
const NAV = document.getElementById('nav');

NAV.addEventListener('click', (event) => {
    NAV.querySelectorAll('a').forEach(el => el.classList.remove ('nav-link_active'));
    event.target.classList.add('nav-link_active');
});

// Slider

let items = document.querySelectorAll('.slider__item');
let slider = document.getElementById('slider');
let currentItem = 0;
let isEnabled = true;

function changeCurrentItem(n) {
	currentItem = (n + items.length) % items.length;
}

function hideItem(direction) {
	isEnabled = false;
	items[currentItem].classList.add(direction);
	items[currentItem].addEventListener('animationend', function() {
		this.classList.remove('active', direction);
	});
}

function showItem(direction) {
	items[currentItem].classList.add('next', direction);
	items[currentItem].addEventListener('animationend', function() {
		this.classList.remove('next', direction);
		this.classList.add('active');
		isEnabled = true;
    });

    if(items[currentItem].classList.contains('slider__item-2')) {
        slider.classList.add('slider_colored');
    } else {
        slider.classList.remove('slider_colored');
    };

};

function nextItem(n) {
	hideItem('to-left');
	changeCurrentItem(n + 1);
	showItem('from-right');
};

function previousItem(n) {
	hideItem('to-right');
	changeCurrentItem(n - 1);
	showItem('from-left');
};

document.querySelector('.prev_link').addEventListener('click', function() {
	if (isEnabled) {
		previousItem(currentItem);
	}
});

document.querySelector('.next_link').addEventListener('click', function() {
	if (isEnabled) {
		nextItem(currentItem);
	}
});

//Phone 

let horizontalPhone = document.querySelectorAll('.slider__horizontal-image')[0];
let horizontalPhoneDark = horizontalPhone.children[1];

horizontalPhone.addEventListener('click', function () {

    if(horizontalPhoneDark.classList.contains('visible')) {
        horizontalPhoneDark.classList.remove('visible');
    } else {
        horizontalPhoneDark.classList.add('visible');
    };
});

let verticalPhone = document.querySelectorAll('.slider__vertical-image')[0];
let verticalPhoneDark = verticalPhone.children[1];


verticalPhone.addEventListener('click', function () {
    if(verticalPhoneDark.classList.contains('visible')) {
        verticalPhoneDark.classList.remove('visible');
    } else {
        verticalPhoneDark.classList.add('visible');
    };
});