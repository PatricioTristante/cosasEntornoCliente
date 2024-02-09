import React, { useContext } from 'react';
import IdiomaContext from '../../contextos/IdiomaContext';
import IDIOMAS from '../../mock/idiomas-mock';

function EmpresaAlumnos() {

    const idioma = useContext(IdiomaContext);


    return (
        <div>
            <h3>{IDIOMAS[idioma].busquedaAlumnos}</h3>
        </div>
    );
}

export default EmpresaAlumnos;
