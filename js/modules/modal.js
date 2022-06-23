export default class Modal {
  constructor(botaoAbrir, botaoFechar, containerModal) {
    this.buttonOpen = document.querySelector(botaoAbrir);
    this.buttonClose = document.querySelector(botaoFechar);
    this.modalContainer = document.querySelector(containerModal);
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.clickOutsideModal = this.clickOutsideModal.bind(this);
  }

  toggleModal() {
    this.modalContainer.classList.toggle('ativo');
  }

  eventToggleModal(e) {
    e.preventDefault();
    this.toggleModal();
  }

  clickOutsideModal(e) {
    if (e.target === this.modalContainer) this.toggleModal(e);
  }

  addModalEvent() {
    this.buttonOpen.addEventListener('click', this.eventToggleModal);
    this.buttonClose.addEventListener('click', this.eventToggleModal);
    this.modalContainer.addEventListener('click', this.clickOutsideModal);
  }

  init() {
    if (this.buttonOpen && this.modalContainer && this.buttonClose) {
      this.addModalEvent();
    }
    return this;
  }
}
