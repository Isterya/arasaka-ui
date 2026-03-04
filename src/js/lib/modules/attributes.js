import $ from '../core';

$.prototype.addAttr = function(name, value = '') {
    for (let i = 0; i < this.length; i++) {
        if (!this[i].setAttribute) continue;

        this[i].setAttribute(name, value);
    }

    return this;
}

$.prototype.removeAttr = function(name) {
    for (let i = 0; i < this.length; i++) {
        if (!this[i].setAttribute) continue;

        this[i].removeAttribute(name);
    }

    return this;
}

$.prototype.toggleAttr = function(name) {
    for (let i = 0; i < this.length; i++) {
        if (!this[i].setAttribute) continue;

        this[i].toggleAttribute(name);
    }

    return this;
}