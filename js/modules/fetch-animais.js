import AnimaNumeros from './anima-numeros.js';
// importando aqui o initAnimaNumeros para que ele nao execute primeiro que o fetch

export default function fetchAnimais(url, target) {
  function createAnimal(animal) {
    const div = document.createElement('div'); // criando o elemento
    div.classList.add('numero-animal'); // adicionando a classe

    div.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.total}</span>`; // colocando as informações html dentro da div, informações vindas do json
    return div; // o retorno da função é a div criada, que será utilizada em cima
  }

  const numerosGrid = document.querySelector(target);
  function preencherAnimais(animal) {
    const divAnimal = createAnimal(animal); // executando a função createAnimal que ira retornar a div com cada animal criado
    numerosGrid.appendChild(divAnimal); // colocando dentro de numerosgrid a nova div criada
  }

  function animaAnimaisNumeros() {
    const animaNumeros = new AnimaNumeros(
      '[data-numero]',
      '.numeros',
      'ativo',
    );
    animaNumeros.init();
  }

  async function criarAnimais() {
    try {
      const animaisResponse = await fetch(url);
      const animaisJSON = await animaisResponse.json();

      animaisJSON.forEach((animal) => preencherAnimais(animal));
      // executando aqui o AnimaNumeros para que ele nao execute primeiro que o fetch
      animaAnimaisNumeros();
    } catch (erro) {
      console.log(erro);
    }
  }
  return criarAnimais();
  // fetchAnimais('./animaisapi.json'); // executando a função fetch animais e puxando a lista json
}
