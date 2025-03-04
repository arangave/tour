document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navList = document.querySelector(".nav-list");

  if (menuToggle && navList) {
    // Detectar si la pantalla es mayor a 768px
    if (window.innerWidth > 768) {
      menuToggle.addEventListener("mouseover", function () {
        navList.classList.add("active");
      });

      navList.addEventListener("mouseleave", function () {
        navList.classList.remove("active");
      });
    } else {
      // Para móviles, solo con clic
      menuToggle.addEventListener("click", function () {
        navList.classList.toggle("active");
      });
    }
  }
});

