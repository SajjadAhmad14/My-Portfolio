const btn = document.getElementById("ham");
const closeBtn = document.getElementById("close")
btn.addEventListener(
  "click",
  (toggleBtn = () => {
    btn.style.display = "none";
    closeBtn.style.display = "block";
  })
);

closeBtn.addEventListener(
    "click",
    (toggleBtn = () => {
      closeBtn.style.display = "none";
      btn.style.display = "block";
    })
  );
