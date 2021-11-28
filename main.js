// click hint
const hint = document.querySelectorAll(".product__hint-list-item");
hint.forEach((x) => {
  x.addEventListener("click", () => {
    hint.forEach((x) => x.classList.remove("active"));
    x.classList.add("active");
  });
});
// click handle sidebar
const main = document.querySelector("main");
const sidebar = document.querySelector(".head__logo-bar");
sidebar.addEventListener("click", () => {
  console.log("ok");
  main.classList.toggle("active");
});
