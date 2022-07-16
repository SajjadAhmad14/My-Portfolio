const btn = document.getElementById("ham");
btn.addEventListener(
  "click",
  (myFunction = () => {
    background.classList.toggle(("no-back"))
    btn.classList.toggle("fa-xmark");
  })
);

