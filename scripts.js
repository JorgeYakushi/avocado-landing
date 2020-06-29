const recipeCard = document.getElementById("card-1");
const cardOptions = {};
var test = function (e) {
  const target = document.getElementsByClassName("card--body");
  let scrolled = window.pageYOffset;
  let rate = scrolled * -2;
  // target[0].style.transform = "translate3d(0px, " + rate + "px, 0px)";
  // //   target[0].style.top = scrolled + "%";
  // //   target[0].innerHTML = counter;
  // counter = counter + 1;
  console.log(scrolled);
  console.log(rate);
  console.log(window.pageYOffset + recipeCard.getBoundingClientRect().top);
};
const cardObserver = new IntersectionObserver(function (entries, cardObserver) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      window.addEventListener("scroll", test);
    } else {
      console.log("aaaaaaaaeae");
      window.removeEventListener("scroll", test);
    }
  });
}, cardOptions);

cardObserver.observe(recipeCard);

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
  let firstCard = document.getElementById("card-1");

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
