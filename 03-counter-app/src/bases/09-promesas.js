import { getHeroesById } from './bases/08-imp-exp';

/* const promesa = new Promise((resolve, reject) => {

    setTimeout(() => {
      //  console.log("Dentro de la promesa")
       // 
       const heroe = getHeroesById(2)
      // resolve(heroe)
      resolve(heroe)
    }, 2000);

})

//Aqui llama a la promesa si se cumple

promesa.then((valor) =>{

    console.log(valor)
})

.catch(err => console.warn(err)) */

const getHeroesByIdAsync = (id) => {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            //  console.log("Dentro de la promesa")
            // 
            const heroe = getHeroesById(id)

           heroe ? resolve(heroe) : reject("No se encontro heroe");
           /* if(heroe){
               resolve(heroe)
           }else{
               reject("No existe el heroe")
           } */
           // resolve(heroe)
            //resolve(heroe)
        }, 2000);

    })



}

getHeroesByIdAsync(12)
    .then(heroe => console.log(heroe))

    .catch(err => console.warn(err))