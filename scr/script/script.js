const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('phone-menu');

burger.addEventListener('click', () => {
    mobileMenu.style.display =
        mobileMenu.style.display === "block" ? "none" : "block";
});