const hamburgerBtn = document.querySelector(".hamburger")
const sideBar = document.querySelector(".sidebar")
const sideBarList = document.querySelector(".sidebar-list")

hamburgerBtn.addEventListener("click", function() {
  hamburgerBtn.classList.toggle("open-btn");
  sideBar.classList.toggle("open");
  sideBarList.classList.toggle("test");
});