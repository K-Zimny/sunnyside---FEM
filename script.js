// Nav Menu Toggle

const menuToggle = document.querySelector(".hamburger-toggle");
const mainNav = document.querySelector(".main-nav");

menuToggle.addEventListener("click", function () {
  mainNav.classList.toggle("is-hidden");
});
