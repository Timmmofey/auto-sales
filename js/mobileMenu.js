const menuBtn = document.querySelector('.menu-btn--mobile');
const menu = document.querySelector('.header__nav--mobile');

menuBtn.addEventListener('click', () =>{
  menu.classList.toggle('header__nav--mobile--active')
})