const remInPx = parseFloat(getComputedStyle(document.documentElement).fontSize);

const header = document.getElementsByClassName("nav__container")[0];
const sections = document.querySelectorAll("section");
const navObsMarginTop = "-" + remInPx * 3 + "px 0px 0px 0px";

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
  if (header.classList.contains("nav__container--open")) {
    header.classList.remove("nav__container--open");
  } else {
    header.classList.add("nav__container--open");
  }
}
var counter = 0;
let cards = document.getElementsByClassName("card");

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
