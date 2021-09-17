//import {heroes} from './data/heroes'; //heroes directamente

import { heroes } from "../data/heroes"
//import {heroes} from './data/heroes' /imp



const getHeroesById = (id) =>{
   
    return heroes.find((heroe) => heroe.id===id  )

}
console.log(getHeroesById(2));



const getHeroesByOwner = (owner) =>{
   
    return heroes.filter((heroe) => heroe.owner===owner  )

}

console.log(getHeroesByOwner('DC'))

