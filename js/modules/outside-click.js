export default function outsideClick(element, events, callback) {
  const html = document.documentElement;
  const outside = 'data-outside';

  function handleOutsideClick(event) {
    // console.log(event.target); //<a href="sobre.html">Sobre</a> é o local aonde foi clicado
    if (!element.contains(event.target)) {
      // se o elemento maior nao conter o elemento filho ele vai executar a função, exemplo se clicar fora do dropdownmenu,  em qualquer outro elemento html, ele executa a função abaixo
      element.removeAttribute(outside); // remove o atributo outside
      events.forEach((userEvent) => {
        // remove o evento de click ou toutch start
        html.removeEventListener(userEvent, handleOutsideClick);
      });
      callback(); // aqui ativa a função do 3* parametro callback , que remove a classe active e esconde o dropdownmenu.
    }
  }

  if (!element.hasAttribute(outside)) {
    // se o elemento nao tiver o atributo outside ele faz um loop em cada Events (click, touchstart)
    events.forEach((userEvent) => {
      // no loop ele ativa a função handleOutsideClick

      setTimeout(() => {
        // foi colocado setTimeout para deixar essa execução assincrona, ou seja por ultimo.

        html.addEventListener(userEvent, handleOutsideClick);
      });
    });
    element.setAttribute(outside, ''); // e no loop ele adiciona o atributo ao elemento html
  }
}
