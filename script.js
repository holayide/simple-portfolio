// Set current year in footer
document.getElementById("currentYear").textContent = new Date().getFullYear();

// Mobile menu functionality
const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");
const closeMenu = document.getElementById("closeMenu");
const menuOverlay = document.getElementById("menuOverlay");
const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");

function openMenu() {
  mobileMenu.classList.add("active");
  menuOverlay.classList.add("active");
  document.body.classList.add("menu-open");
}

function closeMenuFunc() {
  mobileMenu.classList.remove("active");
  menuOverlay.classList.remove("active");
  document.body.classList.remove("menu-open");
}

menuButton.addEventListener("click", openMenu);
closeMenu.addEventListener("click", closeMenuFunc);
menuOverlay.addEventListener("click", closeMenuFunc);

mobileNavLinks.forEach((link) => {
  link.addEventListener("click", closeMenuFunc);
});

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
