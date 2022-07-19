const btn = document.getElementById("ham");
const background = document.getElementById("background");
headline = document.querySelector(".headline");
background.style.display = "none";
body = document.querySelector("body")
btn.addEventListener("click", () => {
  headline.classList.add("blur-headline");
  logo = document.getElementById("logo");
  btnContainer = document.querySelector(".hamburger-container");
  logo.style.display = "none";
  btnContainer.style.display = "none";
  background.style.display = "block";
  body.classList.add("overflow")
})

close = document.querySelector(".close");
close.addEventListener("click", () => {
  logo.style.display = "block";
  btnContainer.style.display = "block";
  background.style.display = "none";
  headline.classList.remove("blur-headline");
  body.classList.remove("overflow")
})

document.querySelectorAll(".overlay-nav-item").forEach(item => {
  item.addEventListener("click", () => {
    background.style.display = "none";
    body.classList.remove("overflow");
    headline.classList.remove("blur-headline");
    logo.style.display = "block";
    btnContainer.style.display = "block";  
  })
});