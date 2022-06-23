import ScrollSauave from './modules/scroll-suave.js';

import Accordion from './modules/accordion.js';
import initTabMenu from './modules/tab-menu.js';
import initModal from './modules/modal.js';
import initToolTip from './modules/tooltip.js';
import initDropdownMenu from './modules/dropdown-menu.js';
import initMenuMobile from './modules/menu-mobile.js';
import initFuncionamento from './modules/funcionamento.js';
import initFechAnimais from './modules/fetch-animais.js';
import initFetchBitcoin from './modules/fetch-bitcoin.js';
import animaScrolling from './modules/animacao-scroll.js';

const scrollSuave = new ScrollSauave('[data-menu="menu"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion("[data-accordion='accordion'] dt");
accordion.init();

initTabMenu();
initModal();
initToolTip();
initDropdownMenu();
initMenuMobile();
initFuncionamento();
initFechAnimais();
initFetchBitcoin();
animaScrolling();

/* //  <div data-cor="azul" data-width="500">Uma div</div> , está dentro do html
const div = document.querySelector("div");
//console.log(div);
const divAtributo = document.querySelector('[data-cor="azul"]');

//console.log(Object.prototype.toString.call(h1));// verificando tipo do prototipo de h1, há varios de prototipos dentro do h1

// console.log(div.dataset); //dataset é uma propriedade do HTML, retorna os elementos atribuidos dentro do dom iniciando com data- , vai retornar um objeto do tipo DOMStringMap{cor: 'azul', width: '500'}
//console.log(div.dataset.cor); // acessa direto a propriedade do objeto, retornando azul

//incluindo um novo elemento dentro do dataset

div.dataset.height = 1000; //inclui direto no elemento div selecionado acima

// para deletar usa-se o comando: delete div.dataset.height;

//  <div data-cor="azul" data-width="500" data-height-max="2000">Uma div</div>
//no Dom pode usar o data com traço (-), contudo no javascript usa-se o Camel Case, ficando:

div.dataset.heightMax = 3000; */
