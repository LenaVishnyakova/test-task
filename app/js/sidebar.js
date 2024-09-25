document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.querySelector(".header__menu button");
    const sidebar = document.querySelector(".sidebar");

    menuButton.addEventListener("click", function () {
      sidebar.classList.toggle("sidebar_active");
    });
  });