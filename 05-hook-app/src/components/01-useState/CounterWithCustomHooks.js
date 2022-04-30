import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import './counter.css';

export const CounterWithCustomHooks = () => {
    const {state:counter, increment, decrement, reset} = useCounter();

  return (
    <>
        <h1>Counter with Hook: {counter}</h1>

        <button className='btn btn-primary' onClick={() => increment(1)}> +1 </button>
        <button className='btn btn-warning' onClick={() => decrement(2)}> -1 </button>
        <button className='btn btn-danger' onClick={reset}> reset </button>
    </>
  )
}
