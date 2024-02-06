import React from 'react';
import MenuEmpresa from '../../componentes/menuEmpresa/menuEmpresa';
import { Route, Routes } from 'react-router-dom';
import EmpresaProyectos from '../empresaProyectos/empresaProyectos';

function Empresa(){

    return (
        <div className='container-fluid cuerpo fondoColorBlanquecino'>    
            <MenuEmpresa/>
            <Routes>
                <Route path='/proyectos/*' element={<EmpresaProyectos/>}/>
                <Route path='/alumnos/*' element={<h1>Patata</h1>}/>
            </Routes>
        </div>
    );
};

export default Empresa;
