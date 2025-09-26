const burgerBtn = document.querySelector('#burgerButton');
const navLinks = document.querySelector('#navbar ul');

burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('open');
    navLinks.classList.toggle('open');
});
