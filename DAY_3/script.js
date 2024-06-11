document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById('menuToggle');
    const logoNav = document.getElementById('logoNav');

    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('open');
        logoNav.classList.toggle('active');
    });
});