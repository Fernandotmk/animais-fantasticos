export default class ScrollSauave {
  constructor(links, options) {
    this.linksInternos = document.querySelectorAll(links);
    if (options === undefined) {
      this.options = {
        behavior: 'smooth',
        block: 'start',
      };
    } else {
      this.options = options;
    }

    this.scrollToSection = this.scrollToSection.bind(this); // feito o bind para que o this seja o objeto
  }

  scrollToSection(e) {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView(this.options);
    // forma alternativa
    // const topo = section.offsetTop;
    // window.scrollTo({
    //   top: topo,
    //   behavior: 'smooth',
    //   });
    //  ,
  }

  addLinkEvent() {
    this.linksInternos.forEach((link) => {
      link.addEventListener('click', this.scrollToSection); // foi realizado o bind acima para que nao fosse utilizado uma arrow function anonima, pois o this antes do bind estava sendo referido ao elemento do target
    });
  }

  init() {
    if (this.linksInternos.length) {
      this.addLinkEvent();
      console.log('teste');
    }
    return this; // ideal retornar o this para poder utilizar outras funções do objeto
  }
}
