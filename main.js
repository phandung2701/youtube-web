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
  main.classList.toggle("active");
});

// togle themme
window.onload = function () {
  const themeBtn = document.querySelector(".head__user-video");
  themeBtn.addEventListener("click", function () {
    // Lấy thuộc tính data-theme
    const root = document.querySelector(":root");
    const isLightMode =
      root.getAttribute("data-theme") === "dark" ? false : true;
    // toggle theme mode
    if (isLightMode) {
      root.setAttribute("data-theme", "dark");
    } else {
      root.setAttribute("data-theme", "light");
    }
    // thay đổi vị trí của button
    this.classList.toggle("active");
  });
};
