import React from "react";


function Titulo(props) {

    function cambiarValor(evento) {
        props.alterarOrden(evento.target.value);
    }

    return(
        <div className='titulo'>
          <h3>Título</h3>
          <select value={props.ordenAscendente} onChange={cambiarValor}>
            <option value={true}>A..Z</option>
            <option value={false}>Z..A</option>
          </select>
        </div>
    )
}

export default Titulo