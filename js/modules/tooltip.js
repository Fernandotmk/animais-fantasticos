export default function initToolTip() {
  const tooltips = document.querySelectorAll('[data-tooltip]');

  const onMouseMove = {
    handleEvent(e) {
      // nesse caso utilizou o event de 'mousemove' para determinar a posição de y e x da div sejam iguais quando o mouse se mover
      this.tooltipBox.style.top = `${e.pageY + 20}px`;
      this.tooltipBox.style.left = `${e.pageX + 20}px`;
    },
  };

  const onMouseLeave = {
    handleEvent() {
      // é necessário utilizar o handleEvent

      this.tooltipBox.remove();
      this.element.removeEventListener('mouseleave', onMouseLeave);
      this.element.removeEventListener('mousemove', onMouseMove);
    },
  };

  function criarTooltipBox(element) {
    const tooltipBox = document.createElement('div');
    const text = element.getAttribute('aria-label');
    tooltipBox.classList.add('tooltip');
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    return tooltipBox; // tem que retornar a caixa para utilizar a função
  }

  function onMouseOver(e) {
    // quando o mouse estiver em cima parado
    const tooltipBox = criarTooltipBox(this); // ativou a funcao para criar a div com elemento inteiro do forEach acima como parametro.
    tooltipBox.style.top = `${e.pageY}px`; // colocou o top e left
    tooltipBox.style.left = `${e.pageX}px`;
    onMouseMove.tooltipBox = tooltipBox; // declarou as propriedades dos dois objetos abaixo, para que eles possam acessar as informações dessa função
    onMouseLeave.tooltipBox = tooltipBox;
    onMouseLeave.element = this; // o this novamente é o elemento inteiro fornecido pelo foreach
    this.addEventListener('mouseleave', onMouseLeave);
    this.addEventListener('mousemove', onMouseMove);
  }

  tooltips.forEach((i) => {
    i.addEventListener('mouseover', onMouseOver);
  });
}
