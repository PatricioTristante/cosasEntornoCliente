import React from 'react';
import useProyectos from '../../hooks/useProyectos';
import TarjetaProyecto from '../tarjetaProyecto/tarjetaProyecto';
import AjaxLoader from '../ajaxLoader/ajaxLoader';

function ResultadosBusquedaProyectos(props) {

    const {listaProyectos, buscando} = useProyectos();

    function devolverProyecto(proyecto) {
        return <TarjetaProyecto key={ proyecto.id } proyecto={ proyecto }/>;   
    }

    function renderizar() {
        return (listaProyectos.filter(filtrar)).map(devolverProyecto).length === 0 ? <p>No hay proyectos que cumplan los filtros</p> : (listaProyectos.filter(filtrar)).map(devolverProyecto)
    }

    function filtrar(proyecto) {
        let salida = false;
        if(props.filtros.length === 0){
            salida = true;
        }else{
            salida = proyecto.ciclos.some(ciclo => props.filtros.includes(ciclo.codFamilia));
        }
        return salida;
    }

    return (
        <div className='row d-flex'>
            {buscando ? <AjaxLoader/> : renderizar()}
        </div>
    );
}

export default ResultadosBusquedaProyectos;