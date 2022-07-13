/*const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open')
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open')
        menuOpen = false;
    }
});*/

const harmburger = document.querySelector('.harmburger')
const navMenu = document.querySelector('.list-Nav')
harmburger.addEventListener('click', () => {
    harmburger.classList.toggle('active')
    navMenu.classList.toggle('active')
});
document.querySelectorAll.remove('.nav-link').forEach(n => n.addEventListener('click', () => {
    harmburger.classList.remove('active')
    navMenu.classList.remove('active')

}))