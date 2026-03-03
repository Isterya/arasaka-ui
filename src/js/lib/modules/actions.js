import $ from '../core';

$.prototype.on = function(eventName, callback) {
    for (let i = 0; i < this.length; i++) {
        this[i].addEventListener(eventName, callback);
    }

    return this;
}