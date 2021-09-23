//import {heroes} from './data/heroes'; //heroes directamente

import { heroes } from "../data/heroes"

//Comentar para ejemplo de promesa
import {heroes} from './data/heroes' 



export const getHeroesById = (id) =>{
   
    return heroes.find((heroe) => heroe.id===id  )

}
//Comentar para ejemplo de promesa
console.log(getHeroesById(2));



const getHeroesByOwner = (owner) =>{
   
    return heroes.filter((heroe) => heroe.owner===owner  )

}
//Comentar para ejemplo de promesa
console.log(getHeroesByOwner('DC'))


