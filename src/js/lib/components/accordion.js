import $ from '../core';

$.prototype.accordion = function () {
  for (let i = 0; i < this.length; i++) {
    $(this[i]).on('click', () => {
      const isActive = this[i].classList.contains('accordion-heading--active');

      for (let j = 0; j < this.length; j++) {
        $(this[j]).removeClass('accordion-heading--active');
        this[j].nextElementSibling.classList.remove('accordion-block--open');
      }

      if (!isActive) {
        $(this[i]).addClass('accordion-heading--active');
        this[i].nextElementSibling.classList.add('accordion-block--open');
      }
    });
  }
};

$('.accordion-heading').accordion();
