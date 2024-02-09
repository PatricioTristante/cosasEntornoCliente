import React from 'react';
import MenuEmpresa from '../../componentes/menuEmpresa/menuEmpresa';
import { Route, Routes } from 'react-router-dom';
import EmpresaProyectos from '../empresaProyectos/empresaProyectos';
import EmpresaAlumnos from '../empresaAlumnos/empresaAlumnos';

function Empresa(){

    return (
        <div className='container-fluid cuerpo fondoColorBlanquecino'>    
            <MenuEmpresa/>
            <Routes>
                <Route path='/proyectos/*' element={<EmpresaProyectos/>}/>
                <Route path='/alumnos/*' element={<EmpresaAlumnos/>}/>
            </Routes>
        </div>
    );
};

export default Empresa;
