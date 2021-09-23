//Desestructuracion de Objetos

let nombre="Pedro"

const persona ={
    nombre:"Alex",
    apellido : "Herrera",
    edad:31,
    clave:"Slender"
}

//Si ya existe una variable fuera del objeto con el mismo nombre
//Se le puede reaccionar dentro de la destructuracion

const {nombre:nombre2, edad} = persona;

console.log(nombre2, edad)

const {apellido, clave} = persona;
console.log(clave, apellido)

//////////////////////////////////////////////////
//Destrucuracion direcamente desde el argumento

const persona2 ={
    nombre2:"Alex",
    apellido2 : "Herrera",
    edad2:31,
    clave2:"Slender",
    latitud:{
        lat:523,
        long:4325
    }
}

const retornaPersona = ({ apellido2, edad2, latitud:{lat}}) =>{
    console.log(apellido, edad, lat)
}

retornaPersona(persona2);


