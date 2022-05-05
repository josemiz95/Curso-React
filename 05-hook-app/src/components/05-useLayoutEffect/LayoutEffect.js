import React, { useLayoutEffect, useRef, useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';
import './layout.css';

export const LayoutEffect = () => {
    const {state:number, increment, decrement} = useCounter(1);
    const {data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${number}`);
    const {quote} = !!data && data[0];

    const pElement = useRef();
    const [boxSize, setBoxSize] = useState({});

    useLayoutEffect(() => {
        setBoxSize(pElement.current.getBoundingClientRect());
    }, [quote])

  return (
    <div>
        <h1>LayoutEffect</h1>
        <hr/>
        <blockquote className='blockquote text-end'>
            <p ref={pElement} className=''>{quote}</p>
        </blockquote>

        <pre>
            {JSON.stringify(boxSize, null, 3)}
        </pre>
        <button className='btn btn-primary' onClick={() => decrement()} disabled={number<=1}>Anterior</button>
        
        <button className='btn btn-primary' onClick={() => increment()}>Siguiente</button>
    </div>
  )
}
