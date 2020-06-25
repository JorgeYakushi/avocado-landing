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
