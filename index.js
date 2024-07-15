document.addEventListener("DOMContentLoaded", function () {
  var menuIcon = document.getElementById("menuIcon");

  if (menuIcon) {
    menuIcon.addEventListener("click", toggleMenu);
  } else {
    console.error("Menu icon element not found");
  }

  function toggleMenu() {
    console.log("Toggle menu function called");
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
});
