'use strict'
import * as DOM from './dom.js';

let total = 0;
let add = () => {
    let input1 = DOM.inputOne.value;
    let input2 = DOM.inputTwo.value;
    //let child = document.createElement(`li`);
    let child = document.getElementById(`listoutput2`);
    //child.classList.add(`list-group-item`);
    total = total + parseInt(input1) + parseInt(input2);
    child.innerHTML = total;
    //child.innerHTML = parseInt(input1) + " + " + parseInt(input2) + " = " + `${parseInt(input1) + parseInt(input2)}`
    document.getElementById(`list_output2`).appendChild(child);
    
};
let sub = () => {
    let input1 = DOM.inputOne.value;
    let input2 = DOM.inputTwo.value;
    //let child = document.createElement(`li`);
    let child = document.getElementById(`listoutput2`);
    //child.classList.add(`list-group-item`);
    total = total - parseInt(input1) - parseInt(input2);
    child.innerHTML = total;
    //child.innerHTML = parseInt(input1) + " - " + parseInt(input2) + " = " + `${parseInt(input1) - parseInt(input2)}`
    document.getElementById(`list_output2`).appendChild(child);
};
let div = () => {
    let input1 = DOM.inputOne.value;
    let input2 = DOM.inputTwo.value;
    //let child = document.createElement(`li`);
    let child = document.getElementById(`listoutput2`);
    //child.classList.add(`list-group-item`);
    total = total / parseInt(input1) / parseInt(input2);
    child.innerHTML = total;
    //child.innerHTML = parseInt(input1) + " / " + parseInt(input2) + " = " + `${parseInt(input1) / parseInt(input2)}`
    document.getElementById(`list_output2`).appendChild(child);
};
let mul = () => {
    let input1 = DOM.inputOne.value;
    let input2 = DOM.inputTwo.value;
    //let child = document.createElement(`li`);
    let child = document.getElementById(`listoutput2`);
    //child.classList.add(`list-group-item`);
    total = total * parseInt(input1) * parseInt(input2);
    child.innerHTML = total;
    //child.innerHTML = parseInt(input1) + " x " + parseInt(input2) + " = " + `${parseInt(input1) * parseInt(input2)}`
    document.getElementById(`list_output2`).appendChild(child);
};
let reset = () => {
    let input1 = DOM.inputOne.value;
    let input2 = DOM.inputTwo.value;
    let list = document.getElementById(`list_output`);
    list.innerHTML = ``;
    let parent = document.querySelector(`ul`);
    parent.removeChild(list);
}
let result = () => {
    //let total2 = DOM.textOutput.value;
    let child = document.createElement(`li`);
    let child2 = document.getElementById(`listoutput2`);
    child2.innerHTML = 0;
    child.classList.add(`list-group-item`);
    child.innerHTML = total;
    document.getElementById(`list_output`).appendChild(child);
    document.getElementById(`list_output2`).appendChild(child2);
    total = 0;
}

DOM.buttonAdd.onclick = () => add();
DOM.buttonDiv.onclick = () => div();
DOM.buttonMul.onclick = () => mul();
DOM.buttonSub.onclick = () => sub();
DOM.buttonReset.onclick = () => reset();
DOM.buttonResult.onclick = () => result();