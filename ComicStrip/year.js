AOS.init(); //reference: https://michalsnik.github.io/aos/
// Handle arrow clicks (for sophomore.html, junior.html, senior.html)
const leftArrow = document.querySelector(".left-arrow");
if (leftArrow) {
  leftArrow.addEventListener("click", () => {
    window.location.href = "previous-year.html";
  });
}

const rightArrow = document.querySelector(".right-arrow");
if (rightArrow) {
  rightArrow.addEventListener("click", () => {
    window.location.href = "next-year.html";
  });
}
