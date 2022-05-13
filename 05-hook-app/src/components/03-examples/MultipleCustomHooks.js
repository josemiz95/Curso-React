import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';
import '../02-useEffect/effects.css';

export const MultipleCustomHooks = () => {
    const {state:number, increment, decrement} = useCounter(1);
    const {loading, data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${number}`);
    const {author, quote} = !!data && data[0];

  return (
    <div>
        <h1>BreakingBad Quotes</h1>
        <hr/>
        {
            loading?
            (<div className='alert alert-info text-center'>
                Loading ...
            </div>):
            (<blockquote className='blockquote text-end'>
                <p className='quote'>{quote}</p>
                <footer className='blockquote-footer'> {author} </footer>
            </blockquote>)
        }
        <button className='btn btn-primary' onClick={() => decrement()} disabled={number<=1}>Anterior</button>
        
        <button className='btn btn-primary' onClick={() => increment()}>Siguiente</button>
    </div>
  )
}
