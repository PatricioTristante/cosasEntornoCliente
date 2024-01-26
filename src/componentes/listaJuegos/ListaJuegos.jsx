import React from 'react';
import Juego from '../juego/Juego';
import useGame from '../../hooks/useGame';
import AjaxLoader from '../ajaxLoader/AjaxLoader';
import './ListaJuegos.css';

function ListaJuegos(){

    const {buscando, listaJuegos} = useGame();

    function muestraJuego(juego) {
        console.log(juego);
        return <Juego key={juego.id} juego={juego}></Juego>
    }

    return (
        <div className='ListaJuegos'>
            {buscando ? <AjaxLoader/> : listaJuegos.map(muestraJuego)}
        </div>
    );
}

export default ListaJuegos;
