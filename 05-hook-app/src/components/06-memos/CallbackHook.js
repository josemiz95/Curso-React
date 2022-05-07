import React, { useCallback, useState } from 'react';
import '../02-useEffect/effects.css';
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {
    const [counter, setcounter] = useState(10);

    const useIncrement = useCallback( () => {setcounter(c => c+1)}, [setcounter]);

  return (
    <div>
        <h1>useCallBack Hook: {counter}</h1>
        <hr/>

        <ShowIncrement increment={useIncrement}/>
    </div>
  )
}
