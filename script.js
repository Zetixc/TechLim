document.addEventListener("DOMContentLoaded", function () {
  var navbar = document.querySelector(".navbar");
  var logoImg = document.querySelector(".logo img");
  var homeSection = document.getElementById("home");
  var topicSection = document.getElementById("topic");

  var homeOffset = homeSection.offsetTop;
  var topicOffset = topicSection.offsetTop;

  window.addEventListener("scroll", function () {
    var scrollPosition = window.scrollY;
    var navbarHeight = 28;

    if (scrollPosition > navbarHeight) {
      navbar.classList.add("navbar-scrolled");
      logoImg.src = "assets/svg/ornament/logo text hijau.svg";
    } else {
      navbar.classList.remove("navbar-scrolled");
      logoImg.src = "assets/svg/ornament/logo text hijau.svg";
    }

    var activeSection;

    if (scrollPosition < topicOffset) {
      activeSection = homeSection;
    } else {
      activeSection = topicSection;
    }
    document.querySelectorAll(".menu a").forEach(function (item) {
      item.classList.remove("active");
    });

    var activeMenuItem = document.querySelector(`.menu a[href="#${activeSection.id}"]`);

    if (activeMenuItem) {
      activeMenuItem.classList.add("active");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var navbarNav = document.querySelector(".menu");
  var hamburgerMenu = document.getElementById("hamburger-menu");

  hamburgerMenu.addEventListener("click", function () {
    navbarNav.classList.toggle("active");
  });

  document.addEventListener("click", function (e) {
    if (!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
      navbarNav.classList.remove("active");
    }
  });
});
