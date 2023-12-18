import './App.css'
import GrupoNotas from './componentes/grupoNotas'
import NotasContext from './contextos/notasContext'
import notas from './mock-notas'

function App() {

  return (
    <NotasContext.Provider value={notas}>
      <GrupoNotas></GrupoNotas>
    </NotasContext.Provider>
  )
}

export default App
