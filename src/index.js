import timer from './modules/timer';
import menu from './modules/menu';
import modal from './modules/modal';
import scroll from './modules/scroll';
import validation from './modules/validation';
import tabs from './modules/tabs';
import slider from './modules/slider';
import calc from './modules/calc';




timer('27 september 2022');
menu();
modal();
scroll();
validation();
tabs();
slider('portfolio-content', 'portfolio-item', 'portfolio-item-active', 'dot', 'dot-active', 'portfolio-btn');
calc(100);