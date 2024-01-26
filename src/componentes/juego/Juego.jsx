import React from 'react';
import './Juego.css';

function Juego(props){

    let fecha = new Date(props.juego.release_date);

    return (
        <figure>
            <img src={props.juego.thumbnail} alt="Imagen del juego {props.nombre}"></img>
            <figcaption>
                <h3>{props.juego.title}</h3>
                <p>{props.juego.release_date}</p>
                <p>{props.juego.genre}</p>
                <a href={props.juego.game_url}>Descargalo</a>
            </figcaption>
        </figure>
    );
};

export default Juego;
