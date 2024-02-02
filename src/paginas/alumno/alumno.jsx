import React from 'react';
import { useContext } from 'react';
import IdiomaContext from '../../contextos/IdiomaContext';
import IDIOMAS from '../../mock/idiomas-mock';

function Alumno(){
    
    const idioma = useContext(IdiomaContext);

    return (
        <div className='container-fluid cuerpo fondoColorBlanquecino'>    
            <h1>{IDIOMAS[idioma].alumnos}</h1>
        </div>
    );
};

export default Alumno;
