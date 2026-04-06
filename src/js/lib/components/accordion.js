import $ from '../core';

$.prototype.accordion = function () {
  for (let i = 0; i < this.length; i++) {
    $(this[i]).on('click', () => {
      for (let j = 0; j < this.length; j++) {
        $(this[j]).removeClass('accordion-heading--active');
        this[j].nextElementSibling.classList.remove('accordion-block--open');
      }

      $(this[i]).toggleClass('accordion-heading--active');
      this[i].nextElementSibling.classList.toggle('accordion-block--open');
    });
  }
};

$('.accordion-heading').accordion();
