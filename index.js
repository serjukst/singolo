// Header navigation
let nav = document.getElementById('nav');

nav.addEventListener('click', (event) => {
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

        if(items[currentItem].classList.contains('slider__item-2')) {
            slider.classList.add('slider_colored');
        } else {
            slider.classList.remove('slider_colored');
        };
    });

};

function nextItem(n) {
	hideItem('to-right');
	changeCurrentItem(n + 1);
	showItem('from-left');
};

function previousItem(n) {
	hideItem('to-left');
	changeCurrentItem(n - 1);
	showItem('from-right');
};

document.querySelector('.prev_link').addEventListener('click', () => {
	if (isEnabled) {
		previousItem(currentItem);
	}
});

document.querySelector('.next_link').addEventListener('click', () => {
	if (isEnabled) {
		nextItem(currentItem);
	}
});

//Phone 

let horizontalPhone = document.getElementById('slider__horizontal-image');
let horizontalPhoneDark = horizontalPhone.children[1];

let verticalPhone = document.getElementById('slider__vertical-image');
let verticalPhoneDark = verticalPhone.children[1];

horizontalPhone.addEventListener('click', () => {
    changeIphoneDisplay(horizontalPhoneDark);
});

verticalPhone.addEventListener('click', () => {
    changeIphoneDisplay(verticalPhoneDark);
});

const changeIphoneDisplay = (display) => {
    if(display.classList.contains('visible')) {
        display.classList.remove('visible');
    } else {
        display.classList.add('visible');
    };
}

// Portfolio

let tag = document.querySelectorAll('.portfolio__tag')[0];
let projects = document.querySelectorAll('.portfolio__project')[0];


tag.addEventListener('click', (event) => {
    
    if (event.target.classList.contains('tag')) {
        tag.querySelectorAll('a').forEach(el => el.classList.remove ('tag_active'));
        event.target.classList.add('tag_active');

        for (let i = 0; i < projects.children.length; i++) {
            projects.children[i].style.order = Math.floor(Math.random() * 10)
        }
    }
});

projects.addEventListener('click', (event) => {
    if (event.target.classList.contains('project__item-img')) {
        projects.querySelectorAll('img').forEach(el => el.classList.remove ('project_bordered'));
        event.target.classList.add('project_bordered');
    }
});

// form

let closeButton = document.getElementById('close-btn');
let submitButton = document.getElementById('submit-btn');

submitButton.addEventListener('click', (event) => {
    let subject = document.getElementById('subject').value.toString();
    let detail = document.getElementById('detail').value.toString();
    
    if (document.getElementById('name').checkValidity() && document.getElementById('email').checkValidity()) {
        showMessage(subject, 'subject-result');
        showMessage(detail,'describe-result');

        document.getElementById('message-block').classList.remove('hidden');
        event.preventDefault();
    }
    
});

const showMessage = (text, resultClass) => {
    if (text) {
        document.getElementById(resultClass).innerText = text;
    } else {
        document.getElementById(resultClass).innerText = 'Без темы';
    };
}

closeButton.addEventListener('click', () => {
    document.getElementById('subject-result').innerText = '';
    document.getElementById('describe-result').innerText = '';
    document.getElementById('message-block').classList.add('hidden');
});
