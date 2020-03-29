// Header navigation
const nav = document.getElementById("nav");
const links = nav.querySelectorAll("a");

nav.addEventListener("click", event => {
  if (event.target.classList.contains("nav-link")) {
    links.forEach(el => el.classList.remove("nav-link_active"));
    event.target.classList.add("nav-link_active");
    if (document.body.offsetWidth < 768) { hamburgerNav() };
  }
});

document.addEventListener("scroll", () => {
  const currentPos = window.scrollY;
  const sections = document.querySelectorAll("body>*");
  let headerHeight = document.getElementById('header').offsetHeight - 5;

  sections.forEach(el => {
    if (
      el.offsetTop - headerHeight <= currentPos &&
      el.offsetTop - headerHeight + el.offsetHeight > currentPos
    ) {
      links.forEach(a => {
        a.classList.remove("nav-link_active");
        if (el.getAttribute("id") === a.getAttribute("href").substring(1)) {
          a.classList.add("nav-link_active");
        };
      });
    }
  });
});

// Slider

let items = document.querySelectorAll(".slider__item");
let slider = document.getElementById("slider");
let currentItem = 0;
let isEnabled = true;

function changeCurrentItem(n) {
  currentItem = (n + items.length) % items.length;
}

function hideItem(direction) {
  isEnabled = false;
  items[currentItem].classList.add(direction);
  items[currentItem].addEventListener("animationend", function () {
    this.classList.remove("active", direction);
  });
}

function showItem(direction) {
  items[currentItem].classList.add("next", direction);
  items[currentItem].addEventListener("animationend", function () {
    this.classList.remove("next", direction);
    this.classList.add("active");
    isEnabled = true;

    if (items[currentItem].classList.contains("slider__item-2")) {
      slider.classList.add("slider_colored");
    } else {
      slider.classList.remove("slider_colored");
    }
  });
}

function nextItem(n) {
  hideItem("to-right");
  changeCurrentItem(n + 1);
  showItem("from-left");
}

function previousItem(n) {
  hideItem("to-left");
  changeCurrentItem(n - 1);
  showItem("from-right");
}

document.querySelector(".prev_link").addEventListener("click", () => {
  if (isEnabled) {
    previousItem(currentItem);
  }
});

document.querySelector(".next_link").addEventListener("click", () => {
  if (isEnabled) {
    nextItem(currentItem);
  }
});

//Phone

let horizontalPhone = document.getElementById("slider__horizontal-image");
let horizontalPhoneDark = horizontalPhone.children[1];

let verticalPhone = document.getElementById("slider__vertical-image");
let verticalPhoneDark = verticalPhone.children[1];

horizontalPhone.addEventListener("click", () => {
  changeIphoneDisplay(horizontalPhoneDark);
});

verticalPhone.addEventListener("click", () => {
  changeIphoneDisplay(verticalPhoneDark);
});

const changeIphoneDisplay = display => {
  if (display.classList.contains("visible")) {
    display.classList.remove("visible");
  } else {
    display.classList.add("visible");
  }
};

// Portfolio

let tag = document.querySelector(".portfolio__tag");
let projects = document.querySelector(".portfolio__project");

tag.addEventListener("click", event => {
  if (event.target.classList.contains("tag")) {
    tag.querySelectorAll("a").forEach(el => el.classList.remove("tag_active"));
    event.target.classList.add("tag_active");

    let projectImages = projects.children;
    let firstImage = projectImages[0];

    projectImages[0].remove();
    projects.appendChild(firstImage);

  }
});

projects.addEventListener("click", event => {
  if (event.target.classList.contains("project__item-img")) {
    projects
      .querySelectorAll("img")
      .forEach(el => el.classList.remove("project_bordered"));
    event.target.classList.add("project_bordered");
  }
});

// form

let closeButton = document.getElementById("close-btn");
let submitButton = document.getElementById("submit-btn");
let messageBlock = document.getElementById("message-block");

submitButton.addEventListener("click", event => {
  let subject = document.getElementById("subject").value.toString();
  let detail = document.getElementById("detail").value.toString();

  if (
    document.getElementById("name").checkValidity() &&
    document.getElementById("email").checkValidity()
  ) {
    showMessage(subject, "subject-result");
    showMessage(detail, "describe-result");

    messageBlock.classList.remove("hidden");
    messageBlock.style.height = document.body.offsetHeight + 'px';
    document.body.style.overflow = "hidden";
    event.preventDefault();
  }
});

const showMessage = (text, resultClass) => {
  if (text) {
    document.getElementById(resultClass).innerText = text;
  } else {
    document.getElementById(resultClass).innerText = "Без темы";
  }
};

closeButton.addEventListener("click", () => {
  document.getElementById("subject-result").innerText = "";
  document.getElementById("describe-result").innerText = "";
  messageBlock.classList.add("hidden");
  document.getElementById("form").reset();
  document.body.style.overflow = "";
});

//mobile

document.querySelector(".hamburger").addEventListener("click", hamburgerNav);

function hamburgerNav() {
  let hamburger = document.querySelector(".hamburger");
  let headerWrapper = document.querySelector(".header__wrapper");
  let mobileNav = document.querySelector(".header__navigation");

  if (hamburger.classList.contains("hamburger-reverse")) {
    hamburger.classList.remove("hamburger-reverse");
    headerWrapper.classList.remove("header__wrapper-hamburger");
    mobileNav.classList.remove("header__navigation-mobile");
    mobileNav.style.height = '';
    document.body.style.overflow = "";
    removeOverlay();
    
  } else {
    hamburger.classList.add("hamburger-reverse");
    headerWrapper.classList.add("header__wrapper-hamburger");
    mobileNav.classList.add("header__navigation-mobile");
    mobileNav.style.height = document.body.offsetHeight + 'px';
    document.body.style.overflow = "hidden";
    setOverlay()
  }
};

function setOverlay () {
  let div = document.createElement("div");
  let header = document.getElementById('header');
  div.classList.add('hamburger_overlay');
  document.body.insertBefore(div, header);
}

function removeOverlay () {
  document.querySelector('.hamburger_overlay').remove();
}
