import React from 'react';
import './tarjetaProyecto.css';
import imagenProyecto from '../../../public/proyecto.jpg'

function TarjetaProyecto(props) {

    function sacarAlumnos(alumno) {
        return <span key={alumno.id}>{alumno.nombre} {alumno.apellidos} </span>;
    }

    function sacarCodCiclos(ciclo) {
        return <span key={ciclo.id}>{ciclo.codCiclo} </span>;
    }

    return (
        <div className='col-12 col-md-4 col-lg-3 pb-3'>
            <div className="card h-100 tarjeta">
                <div className="card-body d-flex">
                    <img src={ imagenProyecto } className="mr-3 imagenTarjeta" alt="Imagen de proyecto" />
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