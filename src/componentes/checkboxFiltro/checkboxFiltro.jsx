import React, {  useState } from 'react';
import './checkboxFiltro.css';

function Checkboxfiltro(props) {

    const [estado, setEstado] = useState(false);

    function manejarCambio(event){
        setEstado(event.target.checked);
        props.cambiarFiltros(props.codigo, event.target.checked);
    };

    return (
        <div className="customCheckBoxHolder d-inline">
            <input type="checkbox" id={props.id} className="customCheckBoxInput"
             checked={estado} onChange={manejarCambio}/>
            <label htmlFor={props.id} className="customCheckBoxWrapper">
                <div className="customCheckBox">
                    <div className="inner">{props.nombre}</div>
                </div>
            </label>
        </div>
    );
}

export default Checkboxfiltro;