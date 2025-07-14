const nav_btn = document.getElementById('nav-toggle');

export const nav_toggle = function() {
    nav_btn.addEventListener('click', () => {
        document.querySelector('.nav').classList.toggle('nav-vertical');
        document.querySelector('.hamburger').classList.toggle('is-open')
        document.querySelector('.logo-container').classList.toggle('logo-close')
    })
}