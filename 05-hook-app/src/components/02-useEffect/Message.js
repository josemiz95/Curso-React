import React, { useEffect, useState } from 'react';

export const Message = () => {
    const [coords, setCoords] = useState({x:0, y:0});
    const {x, y} = coords;

    useEffect(() => {
      const mouseMove = ({x, y}) => setCoords({x, y});

      window.addEventListener('mousemove', mouseMove);

      console.log('Componente Montado');
      
      return () => {
        window.removeEventListener('mousemove', mouseMove);
        console.log('Componente Desmontado');
      }
    }, []);
    
  return (
    <div>
      <h3>Eres genial!</h3>
      <p>x:{x} y:{y}</p>
      </div>
  )
}
