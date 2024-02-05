import React, { useContext } from 'react';
import empresaImg from '../../assets/otros/empresa - copia.jpg';
import centroEducativoImg from '../../assets/otros/school - copia.jpg';
import alumnoImg from '../../assets/otros/student - copia.jpg';

import './Home.css';
import { Link } from 'react-router-dom';
import Footer from '../../componentes/footer/Footer';
import IdiomaContext from '../../contextos/IdiomaContext';
import IDIOMAS from '../../mock/idiomas-mock';

function Home(){

    const idioma = useContext(IdiomaContext);

    return (
        <div>
            <div className='container-fluid paddingTop6 home fondoColorBlanquecino cuerpo'>
                <div className='row'>
                    <div className='col-12 col-md-4 pb-4 pb-md-0 text-center'>
                        <Link to='/empresa'>
                            <div  className='efectoResaltar'>
                                <img className='imagenCuerpo' src={empresaImg} alt="" />
                                <h5 className="nombre">{IDIOMAS[idioma].empresas}</h5>
                            </div>
                        </Link>
                    </div>
                    <div className='col-12 col-md-4 pb-4 pb-md-0 text-center'>
                        <Link to='/centroeducativo'>
                            <div  className='efectoResaltar'>
                                <img className='imagenCuerpo' src={centroEducativoImg} alt="" />
                                <h5 className="nombre">{IDIOMAS[idioma].centrosEducativos}</h5>
                            </div>
                        </Link>
                    </div>
                    <div className='col-12 col-md-4 pb-4 pb-md-0 text-center'>
                        <Link to='/alumno'>
                            <div className='efectoResaltar'>
                                <img className='imagenCuerpo' src={alumnoImg} alt="" />
                                <h5 className="nombre">{IDIOMAS[idioma].alumnos}</h5>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Home;
