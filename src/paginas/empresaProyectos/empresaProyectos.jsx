import React, { useContext } from 'react';
import ListaFamiliasProfesional from '../../componentes/listaFamliaProfesional/listaFamiliaProfesional';
import IdiomaContext from '../../contextos/IdiomaContext';
import IDIOMAS from '../../mock/idiomas-mock';
import ResultadosBusquedaProyectos from '../../componentes/resultadosBusquedaProyectos/resultadosBusquedaProyectos';

function EmpresaProyectos() {

    const idioma = useContext(IdiomaContext);

    return (
        <div>
            <h1>{IDIOMAS[idioma].busquedaProyectos}</h1>
            <ListaFamiliasProfesional/>
            <ResultadosBusquedaProyectos/>
        </div>
    );
}

export default EmpresaProyectos;