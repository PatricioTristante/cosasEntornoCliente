import React from 'react';
import './Juego.css';

function Juego(props){

    let fecha = new Date(props.juego.release_date);
    fecha = fecha.getDate().toString().padStart(2, '0') + '-' + (fecha.getMonth() + 1).toString().padStart(2, '0') + '-' + fecha.getFullYear();

    return (
        <figure>
            <img src={props.juego.thumbnail} alt="Imagen del juego {props.nombre}"></img>
            
            <h3>{props.juego.title}</h3>
            <p className='ju-categoria'><span className='ju-destacado'>Plataforma.</span> {props.juego.platform}</p>
            <p className='ju-categoria'><span className='ju-destacado'>Lanzamiento.</span> {fecha}</p>
            <p className='ju-categoria'><span className='ju-destacado'>Genero.</span> {props.juego.genre}</p>
            <a className='ju-url' href={props.juego.game_url}>Descargalo</a>
        </figure>
    );
};

export default Juego;
