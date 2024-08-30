document.addEventListener("DOMContentLoaded", (event) => {
    const themeToggle = document.getElementById("themeToggle");
    const body = document.body;

    themeToggle.addEventListener("click", () => {
      body.classList.toggle("dark-mode");
      if (body.classList.contains("dark-mode")) {
        applyDarkMode();
      } else {
        removeDarkMode();
      }
    });

    function applyDarkMode() {
      body.style.backgroundColor = "#2c3e50";
      body.style.color = "#ecf0f1";
      document.querySelectorAll("section").forEach((section) => {
        section.style.backgroundColor = "#34495e";
      });
      document.querySelectorAll("h2").forEach((h2) => {
        h2.style.color = "#3498db";
      });
      themeToggle.textContent = "Activar modo claro";
    }

    function removeDarkMode() {
      body.style.backgroundColor = "";
      body.style.color = "";
      document.querySelectorAll("section").forEach((section) => {
        section.style.backgroundColor = "";
      });
      document.querySelectorAll("h2").forEach((h2) => {
        h2.style.color = "";
      });
      themeToggle.textContent = "Activar modo oscuro";
    }
  });