import React from 'react';
import AjaxLoader from '../ajaxLoader/ajaxLoader';
import useAlumnos from '../../hooks/useAlumnos';
import TarjetaAlumno from '../tarjetaAlumno/tarjetaAlumno';
import useFamiliasProfesionales from '../../hooks/useFamiliasProfesionales';

function ResultadosBusquedaAlumnos(props) {

    const { listaAlumnos, buscando } = useAlumnos();

    const { listaFamiliasProfesionales } = useFamiliasProfesionales();

    function devolverAlumno(alumno) {
        return <TarjetaAlumno key={alumno.id} alumno={alumno} />;
    }

    function renderizar() {
        return (listaAlumnos.filter(filtrar)).map(devolverAlumno).length === 0 ? <p>No hay proyectos que cumplan los filtros</p> : (listaAlumnos.filter(filtrar)).map(devolverAlumno)
    }

    function filtrar(alumno) {
        let salida = false;
        if (props.filtros.length === 0) {
            salida = true;
        } else {
            let familias = [];
            alumno.ciclos.forEach(ciclo => {
                listaFamiliasProfesionales.find(familia => {
                    if (familia.nombre === ciclo.familia_profesional.nombre.toUpperCase()) {
                        familias.push(familia.codigo);
                    }
                });
            })
            salida = familias.some(familia => props.filtros.includes(familia));
        }
        return salida;
    }
        return (
            <div className='row d-flex'>
                {buscando ? <AjaxLoader /> : renderizar()}
            </div>
        );
    
}

export default ResultadosBusquedaAlumnos;
