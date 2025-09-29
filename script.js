document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.querySelector(".sidebar");
  const toggleButton = document.getElementById("sidebarToggle");

  toggleButton.addEventListener("click", () => {
    sidebar.classList.toggle("closed");
  });
});
