import React, { useContext } from 'react';
import './checkboxFiltro.css';

function Checkboxfiltro(props) {

    return (
        <div className="customCheckBoxHolder d-inline">
            <input type="checkbox" id={props.id} className="customCheckBoxInput"
             onChange={check => props.cambiarFiltros(props.codigo, check.target.checked)}/>
            <label htmlFor={props.id} className="customCheckBoxWrapper">
                <div className="customCheckBox">
                    <div className="inner">{props.nombre}</div>
                </div>
            </label>
        </div>
    );
}

export default Checkboxfiltro;