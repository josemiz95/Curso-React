import React from 'react';

export const ShowIncrement = React.memo(({increment}) => {
    console.log('Montado');
  return (
    <button className='btn btn-primary' onClick={() => {increment()}}>showIncrement</button>
  )
})
