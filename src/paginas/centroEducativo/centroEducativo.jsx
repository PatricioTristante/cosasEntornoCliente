import React from 'react';
import { useContext } from 'react';
import IdiomaContext from '../../contextos/IdiomaContext';
import IDIOMAS from '../../mock/idiomas-mock';

function CentroEducativo(){

    const idioma = useContext(IdiomaContext);

    return (
        <div className='container-fluid cuerpo fondoColorBlanquecino'>    
            <h1>{IDIOMAS[idioma].centrosEducativos}</h1>
        </div>
    );
};

export default CentroEducativo;
