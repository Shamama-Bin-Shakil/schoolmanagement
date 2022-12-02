// Navbar Sticky
window.addEventListener("scroll", (e) => {
    let navbar = document.getElementById("navbar");
    navbar.classList.toggle("sticky", window.scrollY > 150);
})