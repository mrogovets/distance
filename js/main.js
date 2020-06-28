const menuBtn = document.querySelector(".m-menu"),
  menu = document.querySelector(".menu-sidebar"),
  dropdown = document.getElementById("dropdown-3"),
  ddbtnFooter = document.getElementById("ddBtn-3");

menuBtn.addEventListener("click", function () {
  menu.classList.toggle("active");
});

let dropMenuFotter = dropdown.addEventListener("click", function () {
  dropdown.classList.toggle("active");
});

ddbtnFooter.addEventListener("click", function () {
  dropMenuFotter;
});
