import outsideClick from './outside-click.js';

export default class DropdownMenu {
  constructor(data, events) {
    this.dropDownMenus = document.querySelectorAll(data);

    // por padrão os events sao touchstart e click, caso o usuário não defina
    if (events === undefined) this.events = ['touchstart', 'click'];
    else this.events = events;
    this.activeClass = 'active';
    this.activeDropdownMenu = this.activeDropdownMenu.bind(this);
  }

  // Ativa o dropdownmenu e adiciona
  // a função que observa o clique fora dele
  activeDropdownMenu(e) {
    e.preventDefault();
    const element = e.currentTarget;
    element.classList.add(this.activeClass);
    outsideClick(element, this.events, () => {
      // tres parametros da função, sendo o this= elemento, o array com dois elementos e a função de remove sendo ativa quando clica para fora,)
      // a função outsideClick foi exportada para poder reaproveita-lá
      element.classList.remove(this.activeClass);
    });
  }

  // adiciona os eventos ao dropdownmenu
  addDropdownMenusEvent() {
    this.dropDownMenus.forEach((menu) => {
      this.events.forEach((userEvent) => {
        // para usar dois eventos ao mesmo tempo, utilizamos forEach para realizar o loop nesse array com dois elementos de eventos.
        menu.addEventListener(userEvent, this.activeDropdownMenu);
      });
    });
  }

  init() {
    if (this.dropDownMenus.length) {
      this.addDropdownMenusEvent();
    }
    return this;
  }
}
