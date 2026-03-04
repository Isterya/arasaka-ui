import $ from '../core';

$.prototype.addAttribute = function(name, value) {
    for (let i = 0; i < this.length; i++) {
        // if (!this[i].classList) continue;

        this[i].setAttribute(name, value);
    }

    return this;
}