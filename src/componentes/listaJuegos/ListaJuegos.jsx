import React from 'react';
import Juego from '../juego/Juego';
import useGame from '../../hooks/useGame';
import AjaxLoader from '../ajaxLoader/AjaxLoader';
import './ListaJuegos.css';

function ListaJuegos(props){

    const {buscando, listaJuegos} = useGame();

    function muestraJuego(juego) {
        return <Juego key={juego.id} juego={juego}></Juego>
    }

    function filtrarPorGenero(juego) {
        let devolucion;
        if(props.generoElegido === 'Todos') {
            devolucion = true;
        } else {
            juego.genre === props.generoElegido ? devolucion = true : devolucion = false;
        }
        return devolucion   
    }

    function filtrarPorPlataforma(juego) {
        let devolucion;
        if(props.plataformaElegida === 'Todos') {
            devolucion = true;
        } else {
            //De primeras, lo compare con ===, pero despues vi que hay juegos que tienen ambas plataformas
            //Asi que lo cambie a la funcion includes
            juego.platform.includes(props.plataformaElegida) ? devolucion = true : devolucion = false;
        }
        return devolucion        
    }

    function ordenarAlfabeticamente(a, b) {
        if(props.ordenAscendente) {
            return a.title.toLowerCase().localeCompare(b.title.toLowerCase());
        }else{
            return b.title.toLowerCase().localeCompare(a.title.toLowerCase());
        }
    }

    function sacarListaJuegos() {
        if((listaJuegos.filter(filtrarPorGenero)).filter(filtrarPorPlataforma).length === 0) {
            return <p>No hay juegos que cumplan con los filtros seleccionados</p>;
        }else{
            return (((listaJuegos.filter(filtrarPorGenero)).filter(filtrarPorPlataforma)).sort(ordenarAlfabeticamente)).map(muestraJuego);
        }
    }
    

    return (
        <div className='ListaJuegos'>
            {buscando ? <AjaxLoader/> : 
                sacarListaJuegos()}
        </div>
    );
}

export default ListaJuegos;
