import React from 'react';
import { createRoot } from 'react-dom/client';

// Components
import PrimeraApp from './components/PrimeraApp';

// Stryles
import './index.css';

const root = createRoot(document.getElementById('root'));


root.render(
  <PrimeraApp nombre="Josemi" />
);
