'use strict';

// Task 1: Build a function-based console log message generator

function consoleStyler(color, background, fontSize, txt) {
    var message = "%c" + txt;
    var style = `color: ${color};`;
    style += `background: ${background};`;
    style += `font-size: ${fontSize};`;
    
    console.log(message, style);
}
consoleStyler("red", "white", "bold", "heloo");
