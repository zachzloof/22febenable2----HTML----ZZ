'use strict'

//FETCH API

// How we implement HTTP requests

// CREATE
//READ
// UPDATE
// DELETE


//OUR DOM
const input = document.getElementById(`input`);
const button = document.getElementById(`button`);
const output = document.getElementById(`output`);
const createBTN = document.getElementById(`createBTN`);

button.onclick = () => read(input.value);
createBTN.onclick = () => create(input.value);


// let read = INTERFACE => {

//     // Promises
//     // 'then' takes option arguments
//     // a callback for success
//     // a callback for failure

//     fetch(INTERFACE)
//     .then(response => {
//         if (response.status !== 200) {
//             console.error(`status: ${response.status}`);
//             return;
//         } else {
//             response.json()
//             .then(data => {
//                 output.innerHTML = JSON.stringify(data);
//             })
//         }
//     }).catch(err => {
//         console.error(err);
//     });
// } // THIS IS THE OLD WAY, NOT USED OFTEN, NOW WE USE AXIOS, THIS IS JUST FOR KNOWLEDGE BUT WILL WORK



let read = INTERFACE => {

    axios
        .get(INTERFACE)
        .then(response=> {
            output.innerHTML = JSON.stringify(response.data);

        }).catch(err => {
            console.error(err);
        })
}
// URL AND INTERFACE ESSENTIALLY THE SAME THING, INTERFACE IS A URL 
let create = URL => {

    axios
        .post(URL, {
            first_name: "cameron",
            email : "email@askjeeves.nk"
        })
        .then(response => {
            output.innerHTML = JSON.stringify(response);
        }).catch(err => {
            console.error(err);
        })
}