const pageHeader = document.querySelector('.page-header');
const headerNav = document.querySelector('.header-nav');
const navToggle = document.querySelector('.header-nav__toogle');

pageHeader.classList.remove('page-header--nojs');
headerNav.classList.remove('header-nav--nojs');

navToggle.addEventListener('click', function() {
  if(headerNav.classList.contains('header-nav--closed')) {
    headerNav.classList.remove('header-nav--closed');
    headerNav.classList.add('header-nav--opened');
    pageHeader.classList.add('page-header--menu-opened');
  } else {
    headerNav.classList.add('header-nav--closed');
    headerNav.classList.remove('header-nav--opened');
    pageHeader.classList.remove('page-header--menu-opened');
  }
})
