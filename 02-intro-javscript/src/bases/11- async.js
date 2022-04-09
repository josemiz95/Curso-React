const getImagen = async () => {
    try {
        const apiKey = 'ECiPERL160ybBJ3RdhW1YHh0vWJwdwyp';
        const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    
        const {data} = await response.json();
        const {url} = data.images.original;
    
        return url; 
    } catch (error) {
        console.warn(error);
        // error
    }
}

getImagen().then((url =>{
    const img = document.createElement('img');
    img.src = url;
    document.body.append(img);
}));


// 

// peticion
//     .then( response => response.json())
//     .then( ({data}) => {
//         const {url} = data.images.original;

//         const img = document.createElement('img');
//         img.src = url;
//         document.body.append(img);
//     })
//     .catch( console.warn);