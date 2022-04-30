import React, { useState } from 'react';
import './counter.css';

export const CounterApp = () => {
    const [state, setState] = useState({
        counter1: 10,
        counter2: 20
    });

    const {counter1, counter2} = state;
    
    const operateCounter = (num, counter) =>{
        setState({
          ...state,
          [counter]: state[counter]+num
        });
    };


  return (
    <>
        <h1>Counter1 {counter1}</h1>
        <h1>Counter2 {counter2}</h1>

        <button className='btn btn-primary' onClick={() => operateCounter(1,'counter1')}>+1</button>
        <button className='btn btn-primary' onClick={() => operateCounter(1,'counter2')}>+1</button>
    </>
  )
}
