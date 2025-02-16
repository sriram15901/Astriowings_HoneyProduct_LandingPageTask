document.addEventListener("DOMContentLoaded", () => {
  const buyButtons = document.querySelectorAll(".btn-warning");

  buyButtons.forEach(button => {
      button.addEventListener("click", () => {
          alert("Product added to cart!");
      });
  });
});

// Highlight the active section in the navbar
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
      let current = "";

      sections.forEach((section) => {
          const sectionTop = section.offsetTop - 60;
          if (window.scrollY >= sectionTop) {
              current = section.getAttribute("id");
          }
      });

      navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href").includes(current)) {
              link.classList.add("active");
          }
      });
  });
});

