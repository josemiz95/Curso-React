import React from 'react';
import { createRoot } from 'react-dom/client';

  
const appContainer = document.getElementById('root');
const root = createRoot(appContainer);

const html = <h1>Hola Mundo</h1>

root.render(
  html
);
