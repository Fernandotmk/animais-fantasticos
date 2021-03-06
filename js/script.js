import ScrollSuave from './modules/scroll-suave.js';
import Accordion from './modules/accordion.js';
import TabNav from './modules/tab-menu.js';
import Modal from './modules/modal.js';
import ToolTip from './modules/tooltip.js';
import FechAnimais from './modules/fetch-animais.js';
import FetchBitcoin from './modules/fetch-bitcoin.js';
import ScrollAnima from './modules/scroll-anima.js';
import DropdownMenu from './modules/dropdown-menu.js';
import MenuMobile from './modules/menu-mobile.js';
import Funcionamento from './modules/funcionamento.js';
import SlideNav from './modules/slide.js';

const scrollSuave = new ScrollSuave('[data-menu="menu"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion("[data-accordion='accordion'] dt");
accordion.init();

const tabNav = new TabNav(
  "[data-tab='menu'] li",
  "[data-tab='content'] section",
);
tabNav.init();

const modal = new Modal(
  '[data-modal="abrir"]',
  '[data-modal="fechar"]',
  '[data-modal="container"]',
);
modal.init();

const toolTip = new ToolTip('[data-tooltip]');
toolTip.init();

FechAnimais('./animaisapi.json', '.numeros-grid');
FetchBitcoin('https://blockchain.info/ticker', '.btc-preco');

const scrollAnima = new ScrollAnima("[data-js='scroll']");
scrollAnima.init();

const dropdownMenu = new DropdownMenu('[data-dropdown]');
dropdownMenu.init();

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]');
menuMobile.init();

const funcionamento = new Funcionamento('[data-semana]', 'aberto');
funcionamento.init();

const slide = new SlideNav('.slide', '.slide-wrapper');
slide.init();
slide.addControl('.custom-controls');

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
