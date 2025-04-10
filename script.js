///////////////////////////////////////////////////
// Set current year in footer
document.getElementById("currentYear").textContent = new Date().getFullYear();

// Back to top button
const backToTopButton = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopButton.classList.add("active");
  } else {
    backToTopButton.classList.remove("active");
  }
});

// Header scroll effect
const header = document.getElementById("header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Mobile menu functionality
const menuButton = document.getElementById("menuButton");
menuButton.addEventListener("click", () => {
  alert("Mobile menu would open here");
});

/////////////////////////////////////////////////////////////////////
const closeMenu = document.querySelector(".close-menu");
const openMenu = document.querySelector(".open-menu");
const headerNav = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav a");

// open menu

openMenu.addEventListener("click", () => {
  headerNav.classList.add("active");
});

// close menu
const closeMenuBar = () => {
  headerNav.classList.remove("active");
};

closeMenu.addEventListener("click", closeMenuBar);
navLinks.forEach((navLink) => {
  navLink.addEventListener("click", closeMenuBar);
});
