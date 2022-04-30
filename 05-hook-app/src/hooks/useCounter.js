import { useState } from "react"

export const useCounter = (initialState = 1) => {
    const [state, setState] = useState(initialState);

    const operate = num => setState(state+num);
    const reset = num => setState(initialState);

    const increment = (factor=1) => operate(factor);
    const decrement = (factor=1) => operate(-1*factor);

    return {state, increment, decrement, operate, reset};
}
