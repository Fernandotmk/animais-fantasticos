import outsideClick from './outside-click.js';

export default function initDropdownMenu() {
  const dropDownMenus = document.querySelectorAll('[data-dropdown]');

  function handleClick(e) {
    e.preventDefault();
    this.classList.toggle('active');
    outsideClick(this, ['touchstart', 'click'], () => {
      // tres parametros da função, sendo o this= elemento, o array com dois elementos e a função de remove sendo ativa quando clica para fora,)
      // a função outsideClick foi exportada para poder reaproveita-lá
      this.classList.remove('active');
    });
  }

  dropDownMenus.forEach((menu) => {
    ['touchstart', 'click'].forEach((userEvent) => {
      // para usar dois eventos ao mesmo tempo, utilizamos forEach para realizar o loop nesse array com dois elementos de eventos.
      menu.addEventListener(userEvent, handleClick);
    });
  });
}
