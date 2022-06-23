export default function initAnimaNumeros() {
  function animaNumeros() {
    const numeros = document.querySelectorAll('[data-numero]');

    numeros.forEach((numero) => {
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
    });
  }
  let observer;
  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains('ativo')) {
      observer.disconnect(); // desativa o observador
      animaNumeros();
    }
  }
  observer = new MutationObserver(handleMutation);

  const observerTarget = document.querySelector('.numeros');

  observer.observe(observerTarget, { attributes: true }); // padrao do objeto MutationObserver.observe é ter dois itens, o primeiro é o quem ele tem que observar e o segundo é as opões, sendo o segundo dessa forma em objeto
}
