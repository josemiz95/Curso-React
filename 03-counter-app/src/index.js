import React from 'react';
import { createRoot } from 'react-dom/client';

// Components
import CounterApp from './components/CounterApp';

// Stryles
import './index.css';

const root = createRoot(document.getElementById('root'));


root.render(
  <CounterApp numero={0} />
);
