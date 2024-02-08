import React from 'react';
import './tarjetaProyecto.css';

function TarjetaProyecto(props) {

    return (
        <div className='col-12 col-md-4 col-lg-3'>
            <div className="card fondoColorAzulado">
                <img src="image.jpg" alt="Imagen de la tarjeta" className="card-img" />
                <h2 className="card-title">Título de la tarjeta</h2>
                <ul className="card-list fondoColorBlanquecino">
                    <li>Elemento 1</li>
                    <li>Elemento 2</li>
                    <li>Elemento 3</li>
                </ul>
            </div>
        </div>
    );
}

export default TarjetaProyecto;