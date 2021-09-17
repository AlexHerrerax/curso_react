const persona ={
    nombre:"Alex",
    apellido:"Herrera",
    edad:31,
}

//console.log(persona)
//console.log(persona.nombre)
//console.log({persona})
//console.table(persona)

//Copia la referia al espacio en memoria

const persona2 = persona;
console.log(persona)
persona.nombre="Juan"
console.log(persona2)
console.log(persona)

const persona3 = {...persona2}
console.log(persona3, "persona extra")






