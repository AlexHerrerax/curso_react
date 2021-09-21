const apiKey ="4v4yBMYhfgzmC3kejf3nC25pMy42ZWR1";

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

/* peticion.then(resp =>{
    resp.json().then(otraresp => {
        console.log(otraresp)
    })
}) */

peticion
//Convierte la promesa a json, que tambien devuelve una promesa
.then(resp => resp.json() )
//Se recibe la segunda promesa y se muestra el contenido 
.then(({data}) =>{
    const {url} = data.images.original
    
    const img = document.createElement('img');

    img.src=url;
    document.body.append(img)




})
.catch(console.warn)