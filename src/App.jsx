import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Fruta from './componentes/fruta'
import frutas from './mock-frutas'
import FrutaForm from './componentes/frutaForm'

function App() {
  
  const [listaFrutas, setListaFrutas] = useState(frutas);

  function devolverFruta(fruta) {
    return <Fruta key={listaFrutas.indexOf(fruta)} nombre={fruta}></Fruta>;
  }

  function añadirFruta(fruta) {

      console.log("Fruta añadida: " + fruta);

      setListaFrutas([...listaFrutas, fruta]);

  }

  function quitarFruta(fruta) {
      const LISTATEMPORAL = listaFrutas.filter(frutas => fruta != frutas);

      console.log("Fruta quitada: " + fruta);

      setListaFrutas(LISTATEMPORAL);

  }


  return (
    <div>
      <div>
        <ol>
          {listaFrutas.map(devolverFruta)}
        </ol>
      </div>
      <div>
        <FrutaForm añadirFruta={añadirFruta} quitarFruta={quitarFruta}></FrutaForm>
      </div>
    </div>
  )
}

export default App
