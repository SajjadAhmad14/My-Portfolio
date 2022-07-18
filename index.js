const btn = document.getElementById("ham");
const background = document.getElementById("background");
headline = document.querySelector(".headline");
background.style.display = "none";
btn.addEventListener("click", () => {
  headline.classList.add("blur-headline");
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
  headline.classList.remove("blur-headline");
})