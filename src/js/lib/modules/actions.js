import $ from '../core';

$.prototype.on = function(eventName, callback) {
    for (let i = 0; i < this.length; i++) {
        this[i].addEventListener(eventName, callback);
    }

    return this;
}

$.prototype.off = function(eventName, callback) {
    for (let i = 0; i < this.length; i++) {
        this[i].removeEventListener(eventName, callback);
    }

    return this;
}