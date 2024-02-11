import React from 'react';
import './tarjetaProyecto.css';
import { Tooltip } from 'react-tooltip';

function TarjetaProyecto(props) {

    function sacarAlumnos(alumno) {
        return <span key={alumno.id}>{alumno.nombre} {alumno.apellidos} </span>;
    }

    function sacarCodCiclos(ciclo) {
        return(
            <div key={ciclo.id}>
                <a id={"not-clickable" + ciclo.id}>{ciclo.codCiclo}</a>
                <Tooltip anchorSelect={"#not-clickable" + ciclo.id}>
                    <span>{ciclo.nombre}</span>
                </Tooltip>
            </div>
        );
    }

    return (
        <div className='col-12 col-lg-4 pb-3 col-xl-3'>
            <div className="card h-100 tarjeta">
                <div className="card-body row">
                    <div className='col-5'>
                        <img src="https://source.unsplash.com/random/200x200/?proyecto" className="imagenTarjeta" alt="Imagen de proyecto" />
                    </div>
                    <div className='datos col-6 ml-3'>
                        <h5 className="card-title">{props.proyecto.nombre}</h5>
                        <div>
                            <ul className="list-unstyled">
                                <li><span className='negritaTarjeta'>Alumnos</span></li>
                                {props.proyecto.estudiantes.map(sacarAlumnos)}
                                <li><span className='negritaTarjeta'>Tutor:</span> {props.proyecto.docente_id}</li>
                                <li><span className='negritaTarjeta'>Ciclos:</span></li>
                                {props.proyecto.ciclos.map(sacarCodCiclos)}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TarjetaProyecto;