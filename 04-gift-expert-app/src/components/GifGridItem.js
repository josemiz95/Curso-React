import React from 'react'

export const GifGridItem = ({title, image}) => {
  return (
    <div className="card">
        <img src={image} alt={title}/>
    </div>
  )
}
