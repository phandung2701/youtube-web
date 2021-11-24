// xu ly phan sidebar
const sidebar = document.querySelector(".body_sidebar");
const bodyProduct = document.querySelector(".body__product");
const categoryHomepage = document.querySelector(".category__homePage");
const categoryVideo = document.querySelectorAll(".category__video");
const sidebarCategoryList = categoryHomepage.querySelector(".category__list");
const categoryItem = sidebarCategoryList.querySelectorAll(
  ".category__list-item"
);
const buttonBar = document.querySelector(".head__logo-bar");
buttonBar.addEventListener("click", () => {
  sidebarCategoryList.classList.toggle("small");
  sidebar.classList.toggle("active");
  bodyProduct.classList.toggle("active");
  categoryItem.forEach((x) => x.classList.toggle("small"));
  categoryVideo.forEach((x) => x.classList.toggle("active"));
});

// click hint
const hint = document.querySelectorAll(".product__hint-list-item");
hint.forEach((x) => {
  x.addEventListener("click", () => {
    hint.forEach((x) => x.classList.remove("active"));
    x.classList.add("active");
  });
});
console.log(hint);
