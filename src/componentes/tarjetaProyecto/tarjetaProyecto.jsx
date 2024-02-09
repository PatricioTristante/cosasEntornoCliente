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
        //return <span key={ciclo.id}>{ciclo.codCiclo} </span>;
    }

    return (
        <div className='col-12 col-md-4 col-lg-3 pb-3'>
            <div className="card h-100 tarjeta">
                <div className="card-body d-flex">
                    <img src="https://source.unsplash.com/random/200x200/?proyecto" className="mr-3 imagenTarjeta" alt="Imagen de proyecto" />
                    <div>
                        <h5 className="card-title">{props.proyecto.nombre}</h5>
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
    );
}

export default TarjetaProyecto;