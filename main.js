const menu = document.querySelector('.menu-hamburguer')
const navMobile = document.querySelector('.mobile-nav')
const closeMenu = document.querySelector('.close-menu')


menu.addEventListener('click', toggleMobileNav)
closeMenu.addEventListener('click', closeMobileNav)

function toggleMobileNav() {
    navMobile.classList.toggle('inactive')
}
function    closeMobileNav() {
    navMobile.classList.add('inactive')
}