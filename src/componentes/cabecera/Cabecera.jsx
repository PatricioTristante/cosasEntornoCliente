import React from 'react';
import logoPagina from "../../assets/logo/mp-logoNaranja100.png";

import banderaEspania from '../../assets/banderas/flag-for-flag-spain-svgrepo-com.svg'
import banderaIngles from '../../assets/banderas/united-kingdom-uk-svgrepo-com.svg'

import './Cabecera.css';
import { Link } from 'react-router-dom';

function Cabecera(props) {

    function manejarCambioIdioma(idioma) {
        event.preventDefault();
        props.cambiarIdioma(idioma);
        console.log(idioma);
    }

    return (
        <div className='container-fluid fondoColorAzulado'>
            
            <header>
                <nav className="navbar navbar-expand-md ">
                    <Link className="navbar-brand col-4 col-md-2" to={'/'}>
                        <img src={logoPagina} className='logoNavbar' alt="Logo" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                        <div className='col-12 col-md-8 col-lg-10 text-center'>
                            <h3 className="navbar-text colorNaranja tituloHeader">Marca Personal FP</h3>
                        </div>
                    <div className='"form-inline col-12 col-md-4 col-lg-2 justify-content-center"'>
                        <button className="mr-2 cambioIdioma fondoColorAzulado" onClick={() => manejarCambioIdioma("es")}>
                            <img src={banderaEspania} className='bandera' alt="Bandera" />
                        </button>
                        <button className='cambioIdioma fondoColorAzulado' onClick={() => manejarCambioIdioma("en")}>
                            <img  src={banderaIngles} className='bandera' alt="Bandera" />
                        </button>
                    </div>
                    </div>
                    
                </nav>
            </header>
        </div>
    );
};

export default Cabecera;
