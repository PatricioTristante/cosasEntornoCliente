import React, { useState } from 'react'
import './App.css'

import Cabecera from './componentes/cabecera/cabecera'
import Titulo from './componentes/Filtros/Titulo/Titulo';
import Genero from './componentes/Filtros/Genero/Genero';

function App() {

  const [ordenAscendente, setOrdenAscendente] = useState(true);

  function alterarOrden(valor) {
    setOrdenAscendente(ordenAscendente => valor);
  }

  console.log(ordenAscendente);

  return (
    <div>
      <Cabecera/>
      <div className='cuerpo-izquierda'>
        <Titulo ordenAscendente={ordenAscendente} alterarOrden={alterarOrden}></Titulo>
        <div className='filtros'>
          <Genero></Genero>
        </div>
      </div>
    </div>
  )
}

export default App
