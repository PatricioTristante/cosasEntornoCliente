import './App.css'
import Tema from './componentes/tema'
import misTemas from './mock-misTemas'



function App() {

  function muestraTema(tema) {
    return <Tema key={tema.id} tema={tema}></Tema>;
  }

  return (
    <div>
      <ul>
        {misTemas.map(muestraTema)}
      </ul>
    </div>
  )
}

export default App
