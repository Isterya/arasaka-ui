import $ from '../core';

$.prototype.modal = function () {
  for (let i = 0; i < this.length; i++) {
    const target = this[i].getAttribute('data-target');

    $(this[i]).click((e) => {
      e.preventDefault();
      $(target).fadeIn(500);

      document.body.style.overflow = 'hidden';
    });
  }

  const closeElements = document.querySelectorAll('[data-close]');
  closeElements.forEach((elem) => {
    $(elem).click(() => {
      $('.modal').fadeOut(500);
      document.body.style.overflow = '';
    });
  });

  $('.modal').click((e) => {
    if (e.target.classList.contains('modal')) {
      $('.modal').fadeOut(500);
      document.body.style.overflow = '';
    }
  });
};

$('[data-toggle="modal"]').modal();

$.prototype.createModal = function ({ text, btns } = {}) {
  for (let i = 0; i < this.length; i++) {
    let modal = document.createElement('div');
    modal.classList.add('modal');
    modal.setAttribute('id', this[i].getAttribute('data-target').slice(1));

    modal.innterHTML = `
        <div class="modal-dialog">
          <div class="modal-content">
            <button class="close" data-close>
              <span>&times;</span>
            </button>

            <div class="modal-header">
              <div class="modal-title">
                ${text.title}
              </div>
            </div>

            <div class="modal-body">
              ${text.body}
            </div>

            <div class="modal-footer">

            </div>
          </div>
        </div>
        `;
  }
};
