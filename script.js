const navBtn = document.querySelector(".nav-btn");
const navList = document.querySelector("header nav ul");
navBtn.addEventListener("click", (e) => {
  navList.classList.toggle("nav-show");
  e.target.classList.toggle("nav-btn-active");
})



