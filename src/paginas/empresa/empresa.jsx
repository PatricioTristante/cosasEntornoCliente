import React from 'react';
import { useContext } from 'react';
import IdiomaContext from '../../contextos/IdiomaContext';
import IDIOMAS from '../../mock/idiomas-mock';

function Empresa(){

    const idioma = useContext(IdiomaContext);

    return (
        <div className='container-fluid cuerpo fondoColorBlanquecino'>    
            <h1>{IDIOMAS[idioma].empresas}</h1>
        </div>
    );
};

export default Empresa;
