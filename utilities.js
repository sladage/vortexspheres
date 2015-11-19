'use strict'

var getMousePosition = function (event, element) {
    var boundingRect = element.getBoundingClientRect();
    return {
        x: event.clientX - boundingRect.left,
        y: event.clientY - boundingRect.top
    };
};

var getTouchPosition = function (event, element) {
    var boundingRect = element.getBoundingClientRect();
    return {
        x: event.touches[0].clientX - boundingRect.left,
        y: event.touches[0].clientY - boundingRect.top
    };
};
