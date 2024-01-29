import React from 'react';
import logoPagina from "../../assets/logo/mp-logoNaranja100.png";

import banderaEspania from '../../assets/banderas/flag-for-flag-spain-svgrepo-com.svg'

import './Cabecera.css';

function Cabecera() {
    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-md bg-dark navbar-dark">
                    <div className='col-4 col-md-2'>
                        <a className="navbar-brand" href="#">
                            <img src={logoPagina} alt="Logo" className='logoNavbar'/>
                        </a>
                    </div>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse col-12 col-md-10" id="collapsibleNavbar">
                        <div className='row'>
                            <div className='col-10 text-center'>
                                <h2 className='text-white'>Marca Personal FP</h2>
                            </div>
                            <div className="col-1">
                                <a href="#">
                                    <img src={banderaEspania} alt="Logo" className='banderas'/>
                                </a>
                                <a href="#">
                                    <img src={banderaEspania} alt="Logo" className='banderas'/>
                                </a>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default Cabecera;
