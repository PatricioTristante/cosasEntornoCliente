import { Route, Routes } from 'react-router-dom'
import Cabecera from './componentes/cabecera/Cabecera'
import Home from './paginas/home/home'
import Empresa from './paginas/empresa/empresa'
import CentroEducativo from './paginas/centroEducativo/centroEducativo'
import Alumno from './paginas/alumno/alumno'

function App() {

  return (
    <div>
      <Cabecera></Cabecera>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/empresa' element={<Empresa/>}></Route>
        <Route path='/centroeducativo' element={<CentroEducativo/>}></Route>
        <Route path='/alumno' element={<Alumno/>}></Route>
      </Routes>
    </div>
  )
}

export default App
