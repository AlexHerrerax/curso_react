
const activo = true;
//FORMA NORMAL
let mensaje = " ";

if (activo) {
    mensaje = "Activo"
} else {
    mensaje = "Inactivo"
}

console.log(mensaje)

//FORMA COMUN DE TERNARIO
const mensaje = activo ? "Activo" : "Inactivo";
console.log(mensaje)

//Muestra solo si el valor es verdadero, en caso contrario devuelve un false
const mensaje = activo && "activo";
console.log(mensaje)