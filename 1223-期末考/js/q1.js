const n1 = document.querySelector("#n1");
const img = document.querySelector("#n1 img");
n1.addEventListener("mouseenter", (e) => {
  img.src = "./static/ntub2.jpg";
});
n1.addEventListener("mouseleave", (e) => {
  img.src = "./static/ntub3.jpg";
});
