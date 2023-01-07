const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const mobileMenuClose = document.getElementById('mobile-menu-close');

const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuShadow = document.getElementById('mobile-menu-back-shadow');

const body = document.getElementsByTagName('body')[0];

//Toggle/open mobile menu
mobileMenuToggle.addEventListener('click', function(){
    mobileMenu.classList.remove('-right-full');
    mobileMenu.classList.add('right-0');
    body.classList.add('overflow-hidden');
    body.classList.add('pr-4');
    mobileMenuShadow.classList.remove('hidden');
});

//close mobile menu
mobileMenuClose.addEventListener('click', function(){
    mobileMenu.classList.add('-right-full');
    mobileMenu.classList.remove('right-0');
    body.classList.remove('overflow-hidden');
    body.classList.remove('pr-4');
    mobileMenuShadow.classList.add('hidden');
});