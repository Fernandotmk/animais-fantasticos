export default function initTabMenu() {
  const tabMenu = document.querySelectorAll("[data-tab='menu'] li");
  const tabContent = document.querySelectorAll("[data-tab='content'] section");

  function activeTab(index) {
    tabContent.forEach((section) => {
      section.classList.remove('ativo');
    }); // loop forEach para começar removendo as classes ativo
    const dataAnime = tabContent[index].dataset.anime;
    tabContent[index].classList.add('ativo', dataAnime);
    console.log(tabContent[index]);
  }

  if (tabMenu.length && tabContent.length) {
    // se os dois tiver conteudo retorna true e o código continua, se algum deles der 0 é false e o código não executa
    tabContent[0].classList.add('ativo'); // adiciona o ativo para quando o site carregar pela primeira vez essa classe já apareceça, para que nao fique tudo em branco

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        activeTab(index);
      });
    });
  }
}
