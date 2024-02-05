import React from 'react';
import { useContext } from 'react';
import IdiomaContext from '../../contextos/IdiomaContext';
import MenuEmpresa from '../../componentes/menuEmpresa/menuEmpresa';

function Empresa(){

    return (
        <div className='container-fluid cuerpo fondoColorBlanquecino'>    
            <MenuEmpresa/>
        </div>
    );
};

export default Empresa;
