import React, { useContext } from 'react';
import Checkboxfiltro from '../checkboxFiltro/checkboxFiltro';
import useFamiliasProfesionales from '../../hooks/useFamiliasProfesionales';
import filtroProyectosContext from '../../contextos/filtroProyectosContext';

function ListaFamiliasProfesional(props) {

    const filtrosActuales = useContext(filtroProyectosContext);

    let nuevaListaFiltros = filtrosActuales;

    const {listaFamiliasProfesionales} = useFamiliasProfesionales();

    function cambiarFiltros(filtro, estado) {
        if (estado) {
            nuevaListaFiltros = [...filtrosActuales, filtro];
        } else {
            nuevaListaFiltros = nuevaListaFiltros.filter(f => f !== filtro);
        }
        props.actualizarListaFiltros(nuevaListaFiltros);
    }

    function devolverCheckboxFiltro(filtro) {
        return <Checkboxfiltro key={ filtro.id } id={ "FP" + filtro.id }
        nombre={ filtro.nombre } codigo={filtro.codigo} cambiarFiltros={cambiarFiltros}/>;
    }

    return (
        <div>
            {listaFamiliasProfesionales.map(devolverCheckboxFiltro)}
        </div>
    );
}

export default ListaFamiliasProfesional;