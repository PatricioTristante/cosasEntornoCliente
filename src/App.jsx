import React, { useState } from 'react'
import './App.css'

import Cabecera from './componentes/cabecera/cabecera'
import Titulo from './componentes/Filtros/Titulo/Titulo';

import ListaGenero from './componentes/Filtros/Genero/ListaGenero';
import ListaPlataforma from './componentes/Filtros/Plataforma/ListaPlataforma';
import ListaJuegos from './componentes/listaJuegos/ListaJuegos';
import ScrollUp from './componentes/scrollUp/ScrollUp';

function App() {

  const [ordenAscendente, setOrdenAscendente] = useState(true);

  const [generoElegido, setGeneroElegido] = useState('Todos');

  const [plataformaElegida, setPlataformaElegida] = useState('Todos');

  function alterarOrden(valor) {
    setOrdenAscendente(valor);
  }

  function alterarGeneroElegido(valor) {
    setGeneroElegido(valor);
  }

  function alterarPlataformaElegida(valor) {
    setPlataformaElegida(valor);
  }

  return (
    <div>
      <Cabecera/>
      <div className='cuerpo'>
        <div className='cuerpo-izquierda fondoNegro fuenteBlanca'>
          <Titulo ordenAscendente={ordenAscendente} alterarOrden={alterarOrden}></Titulo>
          <div className='filtros'>
            <h2>Filtros</h2>
            <ListaGenero generoElegido={generoElegido} alterarGeneroElegido={alterarGeneroElegido}></ListaGenero>
            <ListaPlataforma plataformaElegida={plataformaElegida} alterarPlataformaElegida={alterarPlataformaElegida}></ListaPlataforma>
          </div>
        </div>
        <div className='cuerpo-derecha'>
          <span id='arriba'/>
          <ListaJuegos ordenAscendente={ordenAscendente} generoElegido={generoElegido} plataformaElegida={plataformaElegida}></ListaJuegos>
          <ScrollUp></ScrollUp>
        </div>
      </div>
    </div>
  )
}

export default App
