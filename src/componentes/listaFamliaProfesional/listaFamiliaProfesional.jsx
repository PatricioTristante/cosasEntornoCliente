import React from 'react';
import Checkboxfiltro from '../checkboxFiltro/checkboxFiltro';
import useFamiliasProfesionales from '../../hooks/useFamiliasProfesionales';

function ListaFamiliasProfesional() {

    const {listaFamiliasProfesionales} = useFamiliasProfesionales();

    function devolverCheckboxFiltro(filtro) {
        return <Checkboxfiltro key={ filtro.id } id={ "FP" + filtro.id } nombre={ filtro.nombre }/>;
    }

    return (
        <div>
            {listaFamiliasProfesionales.map(devolverCheckboxFiltro)}
        </div>
    );
}

export default ListaFamiliasProfesional;