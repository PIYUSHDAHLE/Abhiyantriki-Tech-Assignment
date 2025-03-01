document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    const links = document.querySelectorAll(".nav-links a"); // Select all nav links

    // Toggle menu on click
    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
        menuToggle.classList.toggle("active");
    });

    // Close menu when a link is clicked
    links.forEach(link => {
        link.addEventListener("click", function () {
            navLinks.classList.remove("active");
            menuToggle.classList.remove("active");
        });
    });
});
