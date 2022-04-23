import React from 'react'

export const GifGridItem = ({title, image}) => {
  return (
    <div className="card animate__animated animate__fadeIn">
        <img src={image} alt={title}/>
    </div>
  )
}
