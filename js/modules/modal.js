export default function initModal() {
  const buttonOpen = document.querySelector('[data-modal="abrir"]');
  const modalContainer = document.querySelector('[data-modal="container"]');
  const buttonClose = document.querySelector('[data-modal="fechar"]');
  const classe = 'ativo';
  function toggleModal(e) {
    e.preventDefault();
    modalContainer.classList.toggle(classe);
  }

  function clickOutsideModal(e) {
    if (e.target === this) toggleModal(e);
  }

  if (buttonOpen && modalContainer && buttonClose) {
    buttonOpen.addEventListener('click', toggleModal);
    buttonClose.addEventListener('click', toggleModal);
    modalContainer.addEventListener('click', clickOutsideModal);
  }
}
