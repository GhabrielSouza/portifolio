document.addEventListener("DOMContentLoaded", () => {
    const mobileMenu = document.getElementById("mobileMenu");
    const navLinks = document.getElementById("navLinks");

    function toggleMenu() {
        mobileMenu.classList.toggle("active");
        navLinks.classList.toggle("active");
    }

    mobileMenu.addEventListener("click", toggleMenu);
});

export * as menu from "./MenuHamburguer.js";