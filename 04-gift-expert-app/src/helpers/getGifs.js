const getGifts = async (category) => {
    const apiKey = 'ECiPERL160ybBJ3RdhW1YHh0vWJwdwyp';
    const response = await fetch(`https://api.giphy.com/v1/gifs/search?limit=10&q=${encodeURI(category.trim())}&api_key=${apiKey}`);
    const {data} = await response.json();

    const gifs = data.map((gif) => {
        return {
            id: gif.id,
            title: gif.title,
            image: gif.images?.downsized_medium?.url
        }
    });

    return gifs;
}

export {
    getGifts
}