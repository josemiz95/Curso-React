import React from 'react'

export const Small = React.memo(({value}) => {

    console.log('Ejecutado');
    return (
        <small> {value} </small>
    )
})