import React, { useContext } from 'react';
import Checkboxfiltro from '../checkboxFiltro/checkboxFiltro';
import useFamiliasProfesionales from '../../hooks/useFamiliasProfesionales';
import IDIOMAS from '../../mock/idiomas-mock';
import IdiomaContext from '../../contextos/IdiomaContext';

function ListaFamiliasProfesional(props) {

    const idioma = useContext(IdiomaContext);

    let nuevaListaFiltros = props.filtrosActuales;

    const {listaFamiliasProfesionales} = useFamiliasProfesionales();

    function cambiarFiltros(filtro, estado) {
        if (estado) {
            nuevaListaFiltros = [...props.filtrosActuales, filtro];
        } else {
            nuevaListaFiltros = nuevaListaFiltros.filter(f => f !== filtro);
        }
        props.actualizarListaFiltros(nuevaListaFiltros);
    }

    function devolverCheckboxFiltro(filtro) {
        return <Checkboxfiltro key={ "FP" + filtro.id } id={ "FP" + filtro.id }
        nombre={ filtro.nombre } codigo={filtro.codigo} cambiarFiltros={cambiarFiltros}/>;
    }

    return (
        <div>
            <h5>{IDIOMAS[idioma].filtrarPorFamilia}</h5>
            {listaFamiliasProfesionales.map(devolverCheckboxFiltro)}
        </div>
    );
}

export default ListaFamiliasProfesional;