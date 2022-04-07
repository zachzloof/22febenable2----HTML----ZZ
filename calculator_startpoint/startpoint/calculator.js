'use strict'
import * as DOM from './dom.js';

let total = 0;
let equation = "";
let add = () => {
    let input1 = DOM.inputOne.value;
    let input2 = DOM.inputTwo.value;
    let child = document.getElementById(`input_1`);
    total = parseInt(input1) + parseInt(input2);
    child.value = total;
    equation = equation + ` + ` + parseInt(input1) + ` + ` + parseInt(input2);
    document.getElementById(`uno`).appendChild(child);
};
let sub = () => {
    let input1 = DOM.inputOne.value;
    let input2 = DOM.inputTwo.value;
    let child = document.getElementById(`input_1`);
    total = parseInt(input1) - parseInt(input2);
    child.value = total;
    equation = equation + ` - ` + parseInt(input1) + ` - ` + parseInt(input2);
    document.getElementById(`uno`).appendChild(child);
};
let div = () => {
    let input1 = DOM.inputOne.value;
    let input2 = DOM.inputTwo.value;
    let child = document.getElementById(`input_1`);
    total = parseInt(input1) / parseInt(input2);
    child.value = total;
    equation = equation + ` / ` + parseInt(input1) + ` / ` + parseInt(input2);
    document.getElementById(`uno`).appendChild(child);
};
let mul = () => {
    let input1 = DOM.inputOne.value;
    let input2 = DOM.inputTwo.value;
    let child = document.getElementById(`input_1`);
    total = parseInt(input1) * parseInt(input2);
    child.value = total;
    equation = equation + ` * ` + parseInt(input1) + ` * ` + parseInt(input2);
    document.getElementById(`uno`).appendChild(child);
};
let reset = () => {
    let list = document.getElementById(`list_output`);
    list.innerHTML = ``;
    document.getElementById(`main`).appendChild(list);
    total = 0;
    equation = "";
}
let result = () => {
    let child = document.createElement(`li`);
    let input1 = DOM.inputOne.value;
    let input2 = DOM.inputTwo.value;
    input1 = 0;
    input2 = 0;
    child.classList.add(`list-group-item`);
    child.innerHTML = equation + ` = ` + total;
    document.getElementById(`list_output`).appendChild(child);
    document.getElementById(`uno`).appendChild(input1);
    document.getElementById(`uno`).appendChild(input2);
    total = 0;
    equation = "";
}
let danger = () => {
    let body = document.querySelector('body');
    let message = document.createElement(`h1`);
    message.innerHTML = `I said dont touch the bumbaclart button >:(`;
    body.style.color = 'red';
    body.style.backgroundColor = 'black';
    document.querySelector(`html`).appendChild(body);
    document.getElementById(`disDiv`).appendChild(message);
}

DOM.buttonAdd.onclick = () => add();
DOM.buttonDiv.onclick = () => div();
DOM.buttonMul.onclick = () => mul();
DOM.buttonSub.onclick = () => sub();
DOM.buttonReset.onclick = () => reset();
DOM.buttonResult.onclick = () => result();
DOM.buttonDisobedience.onclick = () => danger();