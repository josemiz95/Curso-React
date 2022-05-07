import React from 'react';
// import { CounterApp } from './components/01-useState/CounterApp';
// import { CounterWithCustomHooks } from './components/01-useState/CounterWithCustomHooks';
// import { SimpleForm } from './components/02-useEffect/SimpleForm';
// import { FormWithCustomHook } from './components/02-useEffect/FormWithCustomHook';
// import { MultipleCustomHooks } from './components/03-examples/MultipleCustomHooks';
// import { FocusScreen } from './components/04-useRef/FocusScreen';
// import { RealExampleRef } from './components/04-useRef/RealExampleRef';
// import { LayoutEffect } from './components/05-useLayoutEffect/LayoutEffect';
// import { Memorize } from './components/06-memos/Memorize';
// import { MemoHook } from './components/06-memos/MemoHook';
// import { CallbackHook } from './components/06-memos/CallbackHook';
import { TodoApp } from './components/08-useReducer/TodoApp';


const HookApp = () => {
  return (
    <TodoApp />
  )
}

export {
    HookApp as default
}