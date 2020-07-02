const remInPx = parseFloat(getComputedStyle(document.documentElement).fontSize);

const header = document.getElementsByClassName("nav__title__group")[0];
const sections = document.querySelectorAll("section");
const navBarList = document.getElementsByClassName("nav__button__group")[0];
const navObsMarginTop = "-" + remInPx * 3 + "px 0px 0px 0px";
const navObsGoToTop = "-" + remInPx * 2 + "px";

const navHamburgerBars = document.getElementsByClassName(
  "nav__button--bars"
)[0];
const navObsOptions = {
  rootMargin: navObsMarginTop,
};

const navObserver = new IntersectionObserver(function (entries, navObserver) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      header.classList.add("nav--scrolled");
      navHamburgerBars.classList.add("nav__button--bars--scrolled");
    } else {
      header.classList.remove("nav--scrolled");
      navHamburgerBars.classList.remove("nav__button--bars--scrolled");
    }
  });
}, navObsOptions);

navObserver.observe(sections[0]);

function toggleNavBar() {
  if (navBarList.classList.contains("nav__button__group--toggled")) {
    navBarList.classList.remove("nav__button__group--toggled");
  } else {
    navBarList.classList.add("nav__button__group--toggled");
  }
}
var counter = 0;
let cards = document.getElementsByClassName("card");

// nav__top
const sectionOptions = { rootMargin: navObsGoToTop };
const navGoToTopArrow = document.getElementsByClassName("fa-angle-up")[0];
const navGoToTopCont = document.getElementsByClassName("nav__top")[0];
const sectionObserver = new IntersectionObserver(function (
  entries,
  sectionObserver
) {
  entries.forEach((entry) => {
    let sectionIntersected = entry.target.className;

    if (sectionIntersected == "footer") {
      if (entry.isIntersecting) {
        navGoToTopArrow.classList.remove("nav__top--alt");
      } else {
        navGoToTopArrow.classList.add("nav__top--alt");
      }
    } else if (sectionIntersected == "cta") {
      if (entry.isIntersecting) {
        navGoToTopArrow.classList.add("nav__top--alt");
      } else {
        navGoToTopArrow.classList.remove("nav__top--alt");
      }
    }
    console.log(entry);
    if (sectionIntersected == "hero") {
      if (entry.isIntersecting) {
        heroVisible = true;
      } else {
        heroVisible = false;
      }
    } else if (sectionIntersected == "recipes") {
      if (!entry.isIntersecting) {
        recipesVisible = false;
        if (heroVisible === true) {
          navGoToTopCont.classList.remove("nav__top--active");
        }
      } else {
        recipesVisible = true;
        if (!navGoToTopCont.classList.contains("nav__top--active")) {
          navGoToTopCont.classList.add("nav__top--active");
        }
      }
    }
  });
},
sectionOptions);
sectionObserver.observe(sections[0]);
sectionObserver.observe(sections[1]);
sectionObserver.observe(sections[4]);
sectionObserver.observe(sections[3]);

function topFunction() {
  document.body.scrollTop = 0; // Safari
  document.documentElement.scrollTop = 0; // Chrome, Firefox, IE and Opera
}

// recipes
function restartAccordion() {
  for (let i = 0; i < cards.length; i++) {
    if (i == 0) {
      cards[i].style.top = "0rem";
    } else {
      cards[i].style.top = "3rem";
    }
  }
}

function recipeAccordion(index) {
  restartAccordion();
  let idActualCard = "card-" + index;
  let idNextCard = "card-" + (index + 1);
  let cardID = document.getElementById(idActualCard);
  let nextCardID = document.getElementById(idNextCard);

  if (index > 1 && index < 4) {
    console.log(index);
    cardID.style.top = "3rem";
    nextCardID.style.top = "16rem";
  } else if (index == 1) {
    nextCardID.style.top = "16rem";
  }
}

// carousel
let carouselNavPosition = 1;
let carouselNavNewPosition;
let carouselNavNext = 2;
let carouselNavPrev = 5;
function carouselMove(direction) {
  if (direction === "next") {
    carouselNavNewPosition = carouselNavPosition + 1;
    carouselNavNext = carouselNavNewPosition + 1;
    carouselNavPrev = carouselNavPosition;
  } else {
    carouselNavNewPosition = carouselNavPosition - 1;
    carouselNavNext = carouselNavPosition;
    carouselNavPrev = carouselNavNewPosition - 1;
  }

  carouselNavNewPosition = fixCarouselPosition(carouselNavNewPosition);
  carouselNavNext = fixCarouselPosition(carouselNavNext);
  carouselNavPrev = fixCarouselPosition(carouselNavPrev);

  let actualCarouselButton = document.getElementById(
    "carousel--button-" + carouselNavPosition
  );
  let newCarouselButton = document.getElementById(
    "carousel--button-" + carouselNavNewPosition
  );
  let actualSlide = document.getElementById("slide-" + carouselNavPosition);
  let newSlide = document.getElementById("slide-" + carouselNavNewPosition);
  let nextSlide = document.getElementById("slide-" + carouselNavNext);
  let prevSlide = document.getElementById("slide-" + carouselNavPrev);
  actualCarouselButton.classList.remove("carousel__navigation__button--active");
  let slides = document.getElementsByClassName("carousel__slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("slide--active");
    slides[i].classList.remove("slide--prev");
    slides[i].classList.remove("slide--next");
  }
  actualSlide.classList.remove("slide--active");
  prevSlide.classList.add("slide--prev");
  nextSlide.classList.add("slide--next");
  newCarouselButton.classList.add("carousel__navigation__button--active");
  newSlide.classList.add("slide--active");
  carouselNavPosition = carouselNavNewPosition;
}

function fixCarouselPosition(pos) {
  if (pos == 0) {
    pos = 5;
  } else if (pos == 6) {
    pos = 1;
  } else if (pos == 7) {
    pos = 2;
  } else if (pos == -1) {
    pos = 4;
  }
  return pos;
}

function carouselNav(target) {
  let actualCarouselButton = document.getElementById(
    "carousel--button-" + carouselNavPosition
  );
  let newCarouselButton = document.getElementById("carousel--button-" + target);

  actualCarouselButton.classList.remove("carousel__navigation__button--active");
  newCarouselButton.classList.add("carousel__navigation__button--active");

  if (carouselNavPosition < target) {
    let leftValue = carouselNavPosition - (target - 5);
    let rightValue = target - carouselNavPosition;

    if (leftValue < rightValue) {
      for (let i = 1; i <= leftValue; i++) {
        carouselMove("prev");
      }
    } else {
      for (let i = 1; i <= rightValue; i++) {
        carouselMove("next");
      }
    }
  } else {
    let leftValue = carouselNavPosition - target;
    let rightValue = target - (carouselNavPosition - 5);

    if (leftValue < rightValue) {
      for (let i = 1; i <= leftValue; i++) {
        carouselMove("prev");
      }
    } else {
      for (let i = 1; i <= rightValue; i++) {
        carouselMove("next");
      }
    }
  }
  carouselNavPosition = target;
}
