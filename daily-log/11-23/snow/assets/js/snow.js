const snowContainer = document.querySelector(".snow-container");
const snowBtn = document.querySelector(".snow-btn");
let level = 0;

snowBtn.addEventListener("click", () => {
  level++;
  renderShow();
  if (level === 4) {
    window.open("https://www.youtube.com/watch?v=rdBF5seCfwg");
  }
});

function renderShow() {
  for (let i = 0; i < level * 50; i++) {
    createSnow();
  }
}

function createSnow() {
  let snow = document.createElement("div");
  const icon = document.createElement("i");
  icon.classList.add("fa-solid", "fa-snowflake");
  snow.appendChild(icon);
  snow.classList.add("snow");
  snow.style.left = Math.random() * 100 + "vw";
  snow.style.animationDuration = Math.random() * 3 + 2 + "s";
  snow.style.opacity = Math.random();
  snow.style.animationDelay = Math.random() * 2 + "s";
  snow.style.fontSize = Math.random() * 10 + 30 + "px";
  snowContainer.appendChild(snow);
}
