import { getHeroesById } from './bases/08-imp-exp';




const promesa = new Promise((resolve, reject) => {

    setTimeout(() => {
      //  console.log("Dentro de la promesa")
       // 
       const heroe = getHeroesById(2)
       resolve(heroe)
    }, 2000);

})

//Aqui llama a la promesa si se cumple

promesa.then((valor) =>{

    console.log(valor)
})