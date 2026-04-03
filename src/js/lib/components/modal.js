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
};

$('[data-toggle="modal"]').modal();
