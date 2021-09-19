

const peticion = fetch(`https://rickandmortyapi.com/api/character`);

peticion
.then(resp => resp.json())
.then(data =>{
    const {image} = data.results[0]
    console.log(image)


    const img = document.createElement('img');
    img.src=image;

    document.body.append(img)
})