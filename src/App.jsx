import React, { useState } from 'react'
import './App.css'

import Cabecera from './componentes/cabecera/cabecera'
import Titulo from './componentes/Filtros/Titulo/Titulo';
import Genero from './componentes/Filtros/Genero/Genero';

import ListaGenero from './componentes/Filtros/Genero/ListaGenero';
import ListaPlataforma from './componentes/Filtros/Plataforma/ListaPlataforma';
import useGame from './hooks/useGame';
import ListaJuegos from './componentes/listaJuegos/ListaJuegos';

function App() {

  const [ordenAscendente, setOrdenAscendente] = useState(true);

  const [generoElegido, setGeneroElegido] = useState('Todos');

  const [plataformaElegida, setPlataformaElegida] = useState('Todos');

  function alterarOrden(valor) {
    setOrdenAscendente(ordenAscendente => valor);
  }

  function alterarGeneroElegido(valor) {
    setGeneroElegido(generoElegido => valor);
  }

  function alterarPlataformaElegida(valor) {
    setPlataformaElegida(plataformaElegida => valor);
  }

  console.log(generoElegido);
  console.log(plataformaElegida);

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
          <ListaJuegos></ListaJuegos>
        </div>
      </div>
    </div>
  )
}

export default App
