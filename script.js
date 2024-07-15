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
