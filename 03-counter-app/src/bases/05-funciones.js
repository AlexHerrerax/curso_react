const saludar =function (nombre) {
    return `Hola ${nombre}`
}

console.log(saludar("Alex"))

const saludar2 = (nombre) => `Hola ${nombre}`;
    

console.log(saludar2("Juan"))

const getUSer = () => ( 
    {
        id:"ADFWF",
        username: "FDFs"
    }
    )

const user = getUSer()
console.log(user)
