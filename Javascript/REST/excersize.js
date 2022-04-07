'use strict'

//DOM
const input = document.getElementById(`input`);
const button = document.getElementById(`button`);
const output = document.getElementById(`output`);
const createBTN = document.getElementById(`createBTN`);
const readByIdBTN = document.getElementById(`readByIdBTN`);
const registerBTN = document.getElementById(`registerBTN`);
const loginBTN = document.getElementById(`loginBTN`);
// const deleteBTN = document.getElementById(`deleteBTN`);

button.onclick = () => read(input.value);
createBTN.onclick = () => create(input.value);
readByIdBTN.onclick = () => readById(input.value);
registerBTN.onclick = () => register(input.value);
loginBTN.onclick = () => register(input.value);
// deleteBTN.onclick = () => delete(input.value);

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
            name: "Morpheus",
            job : "Leader"
        })
        .then(response => {
            output.innerHTML = JSON.stringify(response);
        }).catch(err => {
            console.error(err);
        })
}

let readById = URL => {
    let id = 8;
    axios
        .get(URL + `/` + id)
        .then(response => {
            output.innerHTML = JSON.stringify(response.data);
        }).catch(err => {
            console.error(err);
        })
}

let register = URL => {
    axios
        .post(URL, {
            email : "eve.holt@reqres.in",
            password : "pistol"
        }).then(response => {
            output.innerHTML = JSON.stringify(`success! ${response}`);
        }).catch(err => {
            console.error(`failure: ${err}`);
        })
}

let login = URL => {
    axios
        .post(URL, {
            email : "eve.holt@reqres.in",
            password : "cityslicka"
        }).then(response => {
            output.innerHTML = JSON.stringify(`success! ${response}`);
        }).catch(err => {
            console.error(`failure: ${err}`);
        })
}
//API FOR REGISTER: https://reqres.in/api/register
//API FOR USERS: https://reqres.in/api/users
// let delete = URL => {
//     
//     axios.post(URL, id)
// }

