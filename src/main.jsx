import React from 'react';
import ReactDOM from 'react-dom/client';
import { GifExpertApp } from './GifExpertApp';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  
  //con el modo estricto solo lo aplicamos en desarrollo para ver codigo deprecated
  //Para ver estados diferentes o cosas diferentes al react que usamos y asi arreglar cierto codigo que tengamos
  //El modo estricto nos ayuda en general a que todo funcione como esperamos 

  <React.StrictMode>
    <GifExpertApp/>
  
  </React.StrictMode>
)
