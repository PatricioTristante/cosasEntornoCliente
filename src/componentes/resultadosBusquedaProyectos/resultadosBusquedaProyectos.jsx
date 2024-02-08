import React from 'react';
import useProyectos from '../../hooks/useProyectos';
import TarjetaProyecto from '../tarjetaProyecto/tarjetaProyecto';

function ResultadosBusquedaProyectos() {

    const {listaProyectos} = useProyectos();

    function devolverProyecto(proyecto) {
        return <TarjetaProyecto key={ proyecto.id} proyecto={ proyecto }/>;
    }

    return (
        <div className='row d-flex'>
            {listaProyectos.map(devolverProyecto)}
        </div>
    );
}

export default ResultadosBusquedaProyectos;