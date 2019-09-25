import Typed from 'typed.js';

window.onload = init;

// ensures page is fully loaded first
function init() {
    // Can also be included with a regular script tag
    var typed = new Typed('.type', {
        strings: [
            "Software Developer",
            "Athelete",
            "Innovator",
            "Raptors Fan"
        ],
        typeSpeed: 60,
        backSpeed: 60
    });
}