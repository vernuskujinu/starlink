const buttons = document.querySelectorAll('.btn');
const modals = document.querySelectorAll('.modal');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const modalTarget = button.getAttribute('data-modal-target');
    const modal = document.querySelector(modalTarget);

    modals.forEach(m => {
      m.style.display = 'none';
    });

    modal.style.display = 'block';
  });
});

const closeButtons = document.querySelectorAll('.btn-close');

closeButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal');
    modal.style.display = 'none';
  });
});

