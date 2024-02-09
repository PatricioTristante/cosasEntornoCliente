import React, { useContext, useState } from 'react';
import ListaFamiliasProfesional from '../../componentes/listaFamliaProfesional/listaFamiliaProfesional';
import IdiomaContext from '../../contextos/IdiomaContext';
import IDIOMAS from '../../mock/idiomas-mock';
import ResultadosBusquedaProyectos from '../../componentes/resultadosBusquedaProyectos/resultadosBusquedaProyectos';
import filtroProyectosContext from '../../contextos/filtroProyectosContext';

function EmpresaProyectos() {

    const idioma = useContext(IdiomaContext);
    
    const [filtrosAplicados, setFiltrosAplicados] = useState([]);

    function actualizarListaFiltros(filtros) {
        setFiltrosAplicados(filtros)
        console.log(filtros);
    }


    return (
        <filtroProyectosContext.Provider value={filtrosAplicados}>
            <div>
                <h3>{IDIOMAS[idioma].busquedaProyectos}</h3>
                <ListaFamiliasProfesional actualizarListaFiltros={actualizarListaFiltros}/>
                <h5>Resultados</h5>
                <ResultadosBusquedaProyectos filtros={filtrosAplicados}/>
            </div>
        </filtroProyectosContext.Provider>
    );
}

export default EmpresaProyectos;