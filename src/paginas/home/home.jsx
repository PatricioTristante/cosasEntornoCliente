import React from 'react';
import empresaImg from '../../assets/otros/empresa - copia.jpg';
import centroEducativoImg from '../../assets/otros/school - copia.jpg';
import alumnoImg from '../../assets/otros/student - copia.jpg';

import './Home.css';
import { Link } from 'react-router-dom';

function Home(){
    return (
        <div className='container-fluid marginTop6 home'>
            <div className='row'>
                <div className='col-12 col-md-4 pb-4 pb-md-0 text-center'>
                    <Link to='/empresa'>
                        <img className='imagenCuerpo' src={empresaImg} alt="" />
                    </Link>
                </div>
                <div className='col-12 col-md-4 pb-4 pb-md-0 text-center'>
                    <Link to='/centroeducativo'>
                        <img className='imagenCuerpo' src={centroEducativoImg} alt="" />
                    </Link>
                </div>
                <div className='col-12 col-md-4 pb-4 pb-md-0 text-center'>
                    <Link to='/alumno'>
                        <img className='imagenCuerpo' src={alumnoImg} alt="" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;