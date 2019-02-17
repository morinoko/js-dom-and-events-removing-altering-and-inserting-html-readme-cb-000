//this file is optional
//you can use this to paste in js code and have it run when index.html is loaded

// Create element
let element = document.createElement('div');

// Change/add properties
element.innerHTML = "Hello, DOM!";
element.style.backgroundColor = '#f9f9f9';

// Insert into DOM
document.body.appendChild(element);
