import React from 'react';
import './tarjetaAlumno.css';
import { Tooltip } from 'react-tooltip';
import banderas from '../../mock/mock-banderas';

function TarjetaAlumno(props) {

    function sacarBandera(idioma) {
        if(banderas[idioma.alpha2] !== undefined){
            return(
                <div key={props.alumno.id + props.alumno.idiomas.indexOf(idioma)} className='col-4'>
                    <a id={"not-clickable-" + props.alumno.id + idioma.alpha2}><img src={banderas[idioma.alpha2].url} alt={'bandera de ' + idioma.native_name} className='banderaTarjetaAlumno'/></a>
                    <Tooltip anchorSelect={"#not-clickable-" + props.alumno.id + idioma.alpha2}>
                        <span>{idioma.native_name}</span>
                    </Tooltip>
                </div>
            )
        }else{
            return(
                <div key={props.alumno.id + props.alumno.idiomas.indexOf(idioma)} className='col-4'>
                    <a id={"not-clickable-" + props.alumno.id + idioma.alpha2}><img src={banderas["SB"].url} alt={'bandera de ' + idioma.native_name} className='banderaTarjetaAlumno'/></a>
                    <Tooltip anchorSelect={"#not-clickable-" + props.alumno.id + idioma.alpha2}>
                        <span>{idioma.native_name}</span>
                    </Tooltip>
                </div>
            )
        }
    }

    function devolverNivel(idioma) {
        return (
            <div key={props.alumno.id + props.alumno.idiomas.indexOf(idioma) + idioma.nivel}  className='col-4 text-left'>
                <a className='fuenteTarjetaIdiomas'>{idioma.nivel} </a>
            </div>
        )
    }

    function devolverCertificacion(idioma) {

        if(idioma.certificado === 1){
            return(
                <div key={props.alumno.id + props.alumno.idiomas.indexOf(idioma) + "cer"} className='col-4 text-left'>
                    <a id={"not-clickable-" + props.alumno.id + props.alumno.idiomas.indexOf(idioma) + "cer"} className='fuenteTarjetaIdiomas'>C</a>
                    <Tooltip anchorSelect={"#not-clickable-" + props.alumno.id + props.alumno.idiomas.indexOf(idioma) + "cer"}>
                        <span>Certificado</span>
                    </Tooltip>
                </div>
            )
        }else{
            return(
                <div key={props.alumno.id + props.alumno.idiomas.indexOf(idioma) + "noCer"} className='col-4 text-left'>
                    <a id={"not-clickable-" + props.alumno.id + props.alumno.idiomas.indexOf(idioma) + "noCer"} className='fuenteTarjetaIdiomas'>SC</a>
                    <Tooltip anchorSelect={"#not-clickable-" + props.alumno.id + props.alumno.idiomas.indexOf(idioma) + "noCer"}>
                        <span>Sin Certificar</span>
                    </Tooltip>
                </div>
            )
        }
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
    }

    return (
        <div className='col-12 col-lg-4 pb-3 col-xl-3'>
            <div className="card h-100 tarjeta">
                <div className="card-body row">
                    <div className='col-5'>
                        <img src={props.alumno.avatar} className="mr-3 imagenTarjeta" alt="Imagen de proyecto" />
                    </div>
                    <div className='datos col-6 ml-3'>
                        <h5 className="card-title">{props.alumno.nombre} {props.alumno.apellidos}</h5>
                        <div>
                            <ul className="list-unstyled">
                                <li>
                                    <div className='row'>{props.alumno.idiomas.map(sacarBandera)}</div>
                                    <div className='row'>{props.alumno.idiomas.map(devolverNivel)}</div>
                                    <div className='row'>{props.alumno.idiomas.map(devolverCertificacion)}</div>
                                </li>
                                <li><span className='negritaTarjeta'>Perfiles:</span></li>
                                <li>
                                    <span className='negritaTarjeta'>Ciclos:</span>
                                    {props.alumno.ciclos.map(sacarCodCiclos)}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12 pt-1 text-center'>
                        <p>{props.alumno.sobre_mi}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TarjetaAlumno;