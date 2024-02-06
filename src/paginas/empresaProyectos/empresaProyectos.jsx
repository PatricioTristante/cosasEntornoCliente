import React, { useContext } from 'react';
import ListaFamiliasProfesional from '../../componentes/listaFamliaProfesional/listaFamiliaProfesional';
import IdiomaContext from '../../contextos/IdiomaContext';
import IDIOMAS from '../../mock/idiomas-mock';

function EmpresaProyectos() {

    const idioma = useContext(IdiomaContext);

    return (
        <div>
            <h1>{IDIOMAS[idioma].busquedaProyectos}</h1>
            <ListaFamiliasProfesional/>
        </div>
    );
}

export default EmpresaProyectos;