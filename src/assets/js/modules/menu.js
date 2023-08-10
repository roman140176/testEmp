export const MenuOpenAndClose = () => {
  const toggler = document.querySelector('.header__toggler');
  const menu = document.querySelector('.header__menu');
  const menuClose = document.querySelector('.header__menu-close');
  toggler.addEventListener('click',() => {
    menu.classList.add('opened');
  });
  menuClose.addEventListener('click',() => {
    menu.classList.remove('opened');
  });
  document.addEventListener('mouseup',e => {
    if(!e.target.closest('.header__menu')){
      menu.classList.remove('opened');
    }
  });
}