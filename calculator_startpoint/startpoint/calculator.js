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
    let input1 = DOM.inputOne.value;
    let input2 = DOM.inputTwo.value;
    let child2 = document.getElementById(`input_1`);
    let child3 = document.getElementById(`input_2`);
    let list = document.getElementById(`list_output`);
    list.innerHTML = ``;
    document.getElementById(`main`).appendChild(list);
    total = 0;
    equation = "";
    child2.value = 0;
    child3.value = 0;
    document.getElementById(`uno`).appendChild(input1);
    document.getElementById(`uno`).appendChild(input2);
}
let result = () => {
    let child = document.createElement(`li`);
    child.classList.add(`list-group-item`);
    let input1 = DOM.inputOne.value;
    let input2 = DOM.inputTwo.value;
    let child2 = document.getElementById(`input_1`);
    let child3 = document.getElementById(`input_2`);
    
    child.innerHTML = equation.substring(3) + ` = ` + total;
    document.getElementById(`list_output`).appendChild(child);
    
    child2.value = 0;
    child3.value = 0;
    total = 0;
    equation = "";
    document.getElementById(`uno`).appendChild(input1);
    document.getElementById(`uno`).appendChild(input2);
}
let danger = () => {
    let body = document.querySelector('body');
    let input1 = document.getElementById(`input_1`)
    let input2 = document.getElementById(`input_2`)
    let message = document.createElement(`h1`);
    message.innerHTML = `I said dont touch the bumbaclart button >:(`;
    body.style.color = 'red';
    body.style.backgroundColor = 'black';
    input1.style.backgroundColor = 'red';
    input1.style.border = 'groove';
    input2.style.backgroundColor = 'red';
    input2.style.border = 'groove';
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