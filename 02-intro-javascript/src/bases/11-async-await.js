const getImagen = async () => {

    try {

        
    const apiKey = "4v4yBMYhfgzmC3kejf3nC25pMy42ZWR1";
    const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    const{ data} = await resp.json();


    const { url } = data.images.original

    const imagen = document.createElement('img');
    imagen.src = url;
    document.body.append(imagen)

        
    } catch (error) {
        console.log(error)
    }


}

getImagen();