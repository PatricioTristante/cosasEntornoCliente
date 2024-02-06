import React, { useContext } from 'react';

import IDIOMAS from '../../mock/idiomas-mock';
import IdiomaContext from '../../contextos/IdiomaContext';
import { Link } from 'react-router-dom';
import './menuEmpresa.css';

function MenuEmpresa() {

    const idioma = useContext(IdiomaContext);

    return (
        <nav className="navbar navbar-expand-md navbar-light">

            <h4 className="navbar-brand colorNaranja">[ {IDIOMAS[idioma].empresas} ]</h4>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse marginTop09" id="collapsibleNavbar">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to={'/empresa/proyectos'} className='nav-link enlaceMenuEmpresa'>
                            <p>{IDIOMAS[idioma].proyectos}</p>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={'/empresa/alumnos'} className='nav-link enlaceMenuEmpresa'>
                            <p>{IDIOMAS[idioma].alumnos}</p>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default MenuEmpresa;
