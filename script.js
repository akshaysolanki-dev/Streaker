const links = document.querySelectorAll(".sidebar-section a");

links.forEach((link) => {
  link.addEventListener("click", () => {
    // remove active from all
    links.forEach((l) => l.classList.remove("active"));

    // add active to clicked one
    link.classList.add("active");
  });
});
