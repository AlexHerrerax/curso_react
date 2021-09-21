const personas =["Alex","Pedro","Juan","Pablo"];

const [p1, p2] = personas;
console.log(p1,p2)

const [, , , g1] = personas;
console.log(g1)

/////////////////////////////////

const usesState = (valor) =>{
    return [valor, () =>{console.log("Hola mundo")}]
}

//const arr = usesState("HerreraAlex");
//arr[1]();

///////////TAREA///////

const [nombre, setNombre] = usesState();
setNombre();