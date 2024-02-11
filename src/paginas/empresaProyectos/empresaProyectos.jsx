import React, { useContext, useState } from 'react';
import ListaFamiliasProfesional from '../../componentes/listaFamliaProfesional/listaFamiliaProfesional';
import IdiomaContext from '../../contextos/IdiomaContext';
import IDIOMAS from '../../mock/idiomas-mock';
import ResultadosBusquedaProyectos from '../../componentes/resultadosBusquedaProyectos/resultadosBusquedaProyectos';

function EmpresaProyectos() {

    const idioma = useContext(IdiomaContext);
    
    const [filtrosAplicados, setFiltrosAplicados] = useState([]);

    function actualizarListaFiltros(filtros) {
        setFiltrosAplicados(filtros)
    }


    return (
        <div>
            <h3>{IDIOMAS[idioma].busquedaProyectos}</h3>
            <ListaFamiliasProfesional actualizarListaFiltros={actualizarListaFiltros} filtrosActuales={filtrosAplicados}/>
            <h5>{IDIOMAS[idioma].resultados}</h5>
            <ResultadosBusquedaProyectos filtros={filtrosAplicados}/>
        </div>
    );
}

export default EmpresaProyectos;