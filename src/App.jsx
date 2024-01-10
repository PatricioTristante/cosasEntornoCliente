import { useState } from 'react'
import './App.css'
import GrupoNotas from './componentes/grupoNotas'
import NotasForm from './componentes/notasForm'
import notas from './mock-notas'

function App() {

  const [listaNotas, setListaNotas] = useState(notas);

  function añadirNota(nota) {
    
    console.log("Añadida nueva nota");

    setListaNotas([...listaNotas, nota]);

  }

  return (
        <div>
          <div>
            <h1>Notas</h1>
            <GrupoNotas notas={listaNotas}></GrupoNotas>
          </div>
          <div>
            <h1>Nueva nota</h1>
            <NotasForm nuevoID={listaNotas.reduce((max, nota) => (nota.id > max ? nota.id : max), 0) + 1}
             añadirNota={añadirNota}></NotasForm>
          </div>
        </div>
  )
}

export default App
