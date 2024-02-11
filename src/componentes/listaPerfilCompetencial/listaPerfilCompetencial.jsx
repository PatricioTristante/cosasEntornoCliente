import React, { useContext } from 'react';
import IdiomaContext from '../../contextos/IdiomaContext';
import usePerfilesCompetenciales from '../../hooks/usePerfilesCompetenciales';
import IDIOMAS from '../../mock/idiomas-mock';
import Checkboxfiltro from '../checkboxFiltro/checkboxFiltro';

function ListaPerfilCompetencial(props) {

    const idioma = useContext(IdiomaContext);

    const { listaPerfilesCompetenciales } = usePerfilesCompetenciales();

    function cambiarFiltros(filtro, estado) {
        props.actualizarListaFiltrosCompetenciales(prevFiltros => {
            let nuevaListaFiltros = [...prevFiltros];
            if (estado) {
                nuevaListaFiltros.push(filtro);
            } else {
                nuevaListaFiltros = nuevaListaFiltros.filter(f => f !== filtro);
            }
            return nuevaListaFiltros;
        });
    }

    function devolverCheckboxFiltro(filtro) {
        return <Checkboxfiltro key={"PC" + filtro.idPerfil} id={ "PC" + filtro.idPerfil }
            nombre={filtro.nombrePerfil} codigo={"cod" + filtro.idPerfil} cambiarFiltros={cambiarFiltros} />;
    }

    return (
        <div>
            <h5>{IDIOMAS[idioma].filtrarPerfilCompetencial}</h5>
            {
                listaPerfilesCompetenciales &&
                Array.isArray(listaPerfilesCompetenciales["PerfilesCompetenciales"]) &&
                Array.from(listaPerfilesCompetenciales["PerfilesCompetenciales"]).map(devolverCheckboxFiltro)
            }
        </div>
    );
}

export default ListaPerfilCompetencial;
