const btn = document.getElementById("ham");
const background = document.getElementById("background");
background.style.display = "none";
btn.addEventListener("click", () => {
  logo = document.getElementById("logo");
  btnContainer = document.querySelector(".hamburger-container");
  logo.style.display = "none";
  btnContainer.style.display = "none";
  background.style.display = "block";
})

close = document.querySelector(".close");
close.addEventListener("click", () => {
  logo.style.display = "block";
  btnContainer.style.display = "block";
  background.style.display = "none";
})