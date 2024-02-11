import React, { useContext, useState } from 'react';
import IdiomaContext from '../../contextos/IdiomaContext';
import IDIOMAS from '../../mock/idiomas-mock';
import ListaFamiliasProfesional from '../../componentes/listaFamliaProfesional/listaFamiliaProfesional';
import ResultadosBusquedaAlumnos from '../../componentes/resultadosBusquedaAlumnos/resultadosBusquedaAlumnos';
import ListaPerfilCompetencial from '../../componentes/listaPerfilCompetencial/listaPerfilCompetencial';

function EmpresaAlumnos() {

    const idioma = useContext(IdiomaContext);

    const [filtrosAplicados, setFiltrosAplicados] = useState([]);

    const [filtrosAplicadosPerfilCompetencial, setFiltrosAplicadosPerfilCompetencial] = useState([]);

    function actualizarListaFiltros(filtros) {
        setFiltrosAplicados(filtros)
    }

    function actualizarListaFiltrosPerfilCompetencial(filtros) {
        setFiltrosAplicadosPerfilCompetencial(filtros)
        
    }


    return (
        <div>
            <h3>{IDIOMAS[idioma].busquedaAlumnos}</h3>
            <ListaPerfilCompetencial actualizarListaFiltrosCompetenciales={actualizarListaFiltrosPerfilCompetencial} filtrosActuales={filtrosAplicadosPerfilCompetencial}/>
            <ListaFamiliasProfesional actualizarListaFiltros={actualizarListaFiltros} filtrosActuales={filtrosAplicados}/>
            <h5>{IDIOMAS[idioma].resultados}</h5>
            <ResultadosBusquedaAlumnos filtros={filtrosAplicados}/>
        </div>
    );
}

export default EmpresaAlumnos;
