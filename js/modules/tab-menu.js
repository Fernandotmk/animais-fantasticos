export default class TabNav {
  constructor(menu, content) {
    this.tabMenu = document.querySelectorAll(menu);
    this.tabContent = document.querySelectorAll(content);
    this.activeClass = 'ativo';
  }

  activeTab(index) {
    this.tabContent.forEach((section) => {
      section.classList.remove(this.activeClass);
    }); // loop forEach para começar removendo as classes ativo
    const dataAnime = this.tabContent[index].dataset.anime;
    this.tabContent[index].classList.add(this.activeClass, dataAnime);
    console.log(this.tabContent[index]);
  }

  tabMenuEvent() {
    this.tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        this.activeTab(index);
      });
    });
  }

  init() {
    if (this.tabMenu.length && this.tabContent.length) {
      // se os dois tiver conteudo retorna true e o código continua, se algum deles der 0 é false e o código não executa
      // this.tabContent[0].classList.add(this.activeClass); // adiciona o ativo para quando o site carregar pela primeira vez essa classe já apareceça, para que nao fique tudo em branco
      this.activeTab(0);
      this.tabMenuEvent();
    }
    return this;
  }
}
