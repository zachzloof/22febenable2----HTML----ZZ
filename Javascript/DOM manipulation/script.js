'use strict'

//DOM

//Document Object Model

/* Page
        >HTML
            >HEAD
            ---> METADATA
        >BODY
            >HEADERS
            >PARAGRAPHS
            >DIVS
*/


import * as DOM from './dom.js';

let str = "hello";

 
// DOM.textButton.onclick = () => DOM.textOutput.innerHTML = DOM.textInput.value;//`${str}`; //DOES NOT WORK AT THE SAME TIME AS THE OTHER FUNCTION

//THIS ADDS A NEW LIST ITEM AND APPENDING THE LIST ITEM
let addToList = (str) => {
    let child = document.createElement(`li`);
    child.innerHTML = str;
    DOM.textOutput2.appendChild(child);
}

DOM.textButton.onclick = () => addToList(DOM.textInput.value);

//EXCERSIZE
//1.
let count = 1;
let addScare = () => {
    let child = document.createElement(`h1`);
    let scare = "BOOOOO!";
    child.id = `heading`; //${count}
    child.innerHTML = scare;
    count++;
    document.getElementById(`division`).appendChild(child);
}
DOM.scaryButton.onclick = () => addScare();

//2.

let deleteScare = () => {
    let child = document.getElementById("heading");
    let parent = document.getElementById("division");
    parent.removeChild(child);
    count--;
}
DOM.notscaryButton.onclick = () => deleteScare();

let appendScare = (str) => {
    let child = document.getElementById("heading");
    let parent = document.getElementById("division");
    child.textContent = str;
    parent.appendChild(child);
}
DOM.appendButton.onclick = () => appendScare(DOM.textInput.value);


