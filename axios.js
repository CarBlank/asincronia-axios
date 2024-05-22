const content = document.getElementById('content')
const getUsersBtn = document.getElementById('getUsers')

//Crea una variable global users y cuando hagas la petición axios rellénala con la respuesta de la api (todo esto fuera de una función)
let dataGlobal= []

axios
   .get('https://jsonplaceholder.typicode.com/users')
   .then((response) => {
    const {data} = response
    dataGlobal = data
   }) 
   .catch((error) => console.error(error))

//1. GET axios

const getUsers = () => {
    dataGlobal.forEach(element => {
        content.innerHTML += `
        <h1>${element.name}</h1>
        `
        console.log(element.name) //Imprimir por consola solo el nombre de los usuarios
    })
    console.log(dataGlobal) //Imprimir por consola la lista de usuarios
}


getUsersBtn.addEventListener('click' , getUsers)