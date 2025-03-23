// Toggle Class Active
const navbarNav = document.querySelector(".navbar-nav");

// When Menu Clicked
document.querySelector("#menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Outside Sidebar Close Click Effect
const menu = document.querySelector("#menu");
document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
