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

// Portfolio

let tag = document.querySelectorAll('.portfolio__tag')[0];
let projects = document.querySelectorAll('.portfolio__project')[0];


tag.addEventListener('click', (event) => {
    tag.querySelectorAll('a').forEach(el => el.classList.remove ('tag_active'));
    event.target.classList.add('tag_active');
    
    for (let i = 0; i < projects.children.length; i++) {
        projects.children[i].style.order = Math.floor(Math.random() * 10)
    }
});

projects.addEventListener('click', (event) => {
    projects.querySelectorAll('img').forEach(el => el.classList.remove ('project_bordered'));
    event.target.classList.add('project_bordered');
});

// form

const CLOSE_BUTTON = document.getElementById('close-btn');
const SUBMIT_BUTTON = document.getElementById('submit-btn');

SUBMIT_BUTTON.addEventListener('click', (event) => {
    const subject = document.getElementById('subject').value.toString();
    const detail = document.getElementById('detail').value.toString();
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    
    if (name.checkValidity() && email.checkValidity()) {
        if (subject) {
            document.getElementById('subject-result').innerText = subject;
        } else {
            document.getElementById('subject-result').innerText = 'Без темы';
        };

        if (detail) {
            document.getElementById('describe-result').innerText = detail;
        } else {
            document.getElementById('describe-result').innerText = 'Без описания';
        } 

        document.getElementById('message-block').classList.remove('hidden');
        event.preventDefault();
    }
    
});

CLOSE_BUTTON.addEventListener('click', () => {
    document.getElementById('subject-result').innerText = '';
    document.getElementById('describe-result').innerText = '';
    document.getElementById('message-block').classList.add('hidden');
});
