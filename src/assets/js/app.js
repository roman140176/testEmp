import Swiper,{ EffectFade, Navigation, Pagination,resizeObserver } from 'swiper'
import AOS from 'aos';
import {form} from './modules/form';
import {MenuOpenAndClose} from './modules/menu';
import SimpleBar from 'simplebar/dist/simplebar';

new SimpleBar(document.getElementById('system-drop'),{
  scrollbarMaxSize:53
});

const header = document.querySelector('header');
document.addEventListener('scroll',() => {
  const headerHeight = header.clientHeight;
  const current = document.documentElement.scrollTop;
  if(current >= headerHeight){
    header.classList.add('scrolled')
  }else{
    header.classList.remove('scrolled')
  }
});
AOS.init();
form();
MenuOpenAndClose();

