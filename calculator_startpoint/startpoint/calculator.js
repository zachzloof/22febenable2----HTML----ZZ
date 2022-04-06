'use strict'
import * as DOM from './dom.js';


let add = () => {
    let input1 = DOM.inputOne.value;
    let input2 = DOM.inputTwo.value;
    let child = document.createElement(`li`);
    child.classList.add(`list-group-item`);
    child.innerHTML = `${parseInt(input1) + parseInt(input2)}`
    document.getElementById(`list_output`).appendChild(child);
    
};
let sub = () => {
    let input1 = DOM.inputOne.value;
    let input2 = DOM.inputTwo.value;
    let child = document.createElement(`li`);
    child.classList.add(`list-group-item`);
    child.innerHTML = `${parseInt(input1) - parseInt(input2)}`
    document.getElementById(`list_output`).appendChild(child);
};
let div = () => {
    let input1 = DOM.inputOne.value;
    let input2 = DOM.inputTwo.value;
    let child = document.createElement(`li`);
    child.classList.add(`list-group-item`);
    child.innerHTML = `${parseInt(input1) / parseInt(input2)}`
    document.getElementById(`list_output`).appendChild(child);
};
let mul = () => {
    let input1 = DOM.inputOne.value;
    let input2 = DOM.inputTwo.value;
    let child = document.createElement(`li`);
    child.classList.add(`list-group-item`);
    child.innerHTML = `${parseInt(input1) * parseInt(input2)}`
    document.getElementById(`list_output`).appendChild(child);
};

DOM.buttonAdd.onclick = () => add();
DOM.buttonDiv.onclick = () => div();
DOM.buttonMul.onclick = () => mul();
DOM.buttonSub.onclick = () => sub();