var navbar = document.querySelector('ul');

window.onscroll = function () {

    if (window.pageYOffset > 0) {
        navbar.classList.add('scrolled');
    } else {

        navbar.classList.remove('scrolled');
    }
}
