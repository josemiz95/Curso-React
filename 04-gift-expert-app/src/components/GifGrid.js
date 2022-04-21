import React, { useState, useEffect } from 'react'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {
    const [images, setImages] = useState([]);
    useEffect(() => {
        getGift(category);
    }, []);
    

    const getGift = async (query) => {
        const apiKey = 'ECiPERL160ybBJ3RdhW1YHh0vWJwdwyp';
        const response = await fetch(`https://api.giphy.com/v1/gifs/search?limit=10&q=${query}&api_key=${apiKey}`);
        const {data} = await response.json();

        const gifs = data.map((gif) => {
            return {
                id: gif.id,
                title: gif.title,
                image: gif.images?.downsized_medium?.url
            }
        });

        setImages(gifs);
    }

    
  return (
    <>
        <h3>{category}</h3>
        <div className='card-grid'>
            {images.map(img => <GifGridItem key={img.id} { ...img }/>)}
        </div>
    </>
  )
}
