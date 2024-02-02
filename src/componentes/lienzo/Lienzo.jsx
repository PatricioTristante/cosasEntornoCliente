import { Route, Routes } from 'react-router-dom'
import Empresa from '../../paginas/empresa/empresa'
import CentroEducativo from '../../paginas/centroEducativo/centroEducativo'
import Alumno from '../../paginas/alumno/alumno'
import Cabecera from '../cabecera/Cabecera'
import Home from '../../paginas/home/home'
import IdiomaContext from '../../contextos/IdiomaContext'
import { useState } from 'react'

function Lienzo() {

    const [idioma, setIdioma] = useState('es');

    function cambiarIdioma(idioma) {
        setIdioma(idioma);
    }

    return (
        <div>
            <IdiomaContext.Provider value={idioma}>
            <Cabecera cambiarIdioma={cambiarIdioma}></Cabecera>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/empresa' element={<Empresa />}></Route>
                <Route path='/centroeducativo' element={<CentroEducativo />}></Route>
                <Route path='/alumno' element={<Alumno />}></Route>
            </Routes>
            </IdiomaContext.Provider>
        </div>
    );
}

export default Lienzo;
