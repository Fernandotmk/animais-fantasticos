export default class AnimaNumeros {
  constructor(numeros, observerTarget, observerClass) {
    this.numeros = document.querySelectorAll(numeros);
    this.observerTarget = document.querySelector(observerTarget);
    this.observerClass = observerClass;

    // bind ao this do objeto ao bind da mutação
    this.handleMutation = this.handleMutation.bind(this);
  }

  static incrementarNumero(numero) {
    const total = +numero.innerText;
    const incremento = Math.floor(total / 100);
    let start = 0;
    const timer = setInterval(() => {
      start += incremento;
      numero.innerText = start;
      if (start > total) {
        numero.innerText = total;
        clearInterval(timer);
      }
    }, 25 * Math.random());
  }

  animaNumeros() {
    this.numeros.forEach((numero) => this.constructor.incrementarNumero(numero));
  }

  // Função que ocorre sempre quando tem mutação
  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.observer.disconnect(); // desativa o observador
      this.animaNumeros();
    }
  }

  // adiciona a mutationObserver para verificar quando a classe ativo é adicionada ao elemento target
  addMutationObserver() {
    this.observer = new MutationObserver(this.handleMutation);
    this.observer.observe(this.observerTarget, { attributes: true }); // padrao do objeto MutationObserver.observe é ter dois itens, o primeiro é o quem ele tem que observar e o segundo é as opões, sendo o segundo dessa forma em objeto
  }

  init() {
    if (this.numeros.length && this.observerTarget.length && this.this.observerClass) this.addMutationObserver();
    return this;
  }
}
