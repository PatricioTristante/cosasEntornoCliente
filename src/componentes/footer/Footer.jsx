import React, { useContext } from 'react';
import './Footer.css';
import useDatos from '../../hooks/useDatos';
import logoFacebook from '../../assets/redes/facebook-svgrepo-com.svg';
import logoTwitter from '../../assets/redes/twitter-rounded-com.svg';
import logoInstagram from '../../assets/redes/instagram-svgrepo-com.svg';
import logoTiktok from '../../assets/redes/brand-tiktok-sq-svgrepo-com.svg';
import logoYoutube from '../../assets/redes/youtube-168-svgrepo-com.svg';
import logoMPFPPie from '../../assets/logo/mp-logoReves.png'
import IdiomaContext from '../../contextos/IdiomaContext';
import IDIOMAS from '../../mock/idiomas-mock';


function Footer() {

    const {listaDatos} = useDatos();
    const idioma = useContext(IdiomaContext);

    return (
        <div className='container-fluid fondoColorOscuro'>
            <footer>
                <div className='row'>
                    <div className='col-8 mx-auto fondoColorNaranja'>
                        <div className='row'>
                            <div className='col-4 colorBlanquecino text-center'>
                                <h5 className="">{IDIOMAS[idioma].empresas}</h5>
                                <p className='cantidadFooter'>{listaDatos.empresas}</p>
                            </div>
                            <div className='col-4 colorBlanquecino text-center'>
                                <h5 className="text-center">{IDIOMAS[idioma].proyectos}</h5>
                                <p className='cantidadFooter'>{listaDatos.proyectos}</p>
                            </div>
                            <div className='col-4 colorBlanquecino text-center'>
                                <h5 className="text-center">{IDIOMAS[idioma].alumnos}</h5>
                                <p className='cantidadFooter'>{listaDatos.alumnos}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row pt-2 pb-2'>
                    <div className='col-12 text-center colorBlanquecino'>
                        <a className='colorBlanquecino' href='https://cifpcarlos3.es/es'>
                            <h5>CIFP Carlos III</h5>
                        </a>
                        <p className='parrafoFooter'>C/ Carlos III, 30201 - Cartagena | 30019702@murciaeduca.es | 968321301</p>
                        <a href='https://www.facebook.com/cifpcarlos3' target='_blank'>
                            <img className='redesSociales mr-2' src={logoFacebook} alt="Link a la red social Facebook"/>
                        </a>
                        <a href='https://twitter.com/cifpcarlos3' target='_blank'>
                            <img className='redesSociales mr-2' src={logoTwitter} alt="Link a la red social Twitter"/>
                        </a>
                        <a href='https://www.instagram.com/cifpcarlos3/' target='_blank'>
                            <img className='redesSociales mr-2' src={logoInstagram} alt="Link a la red social Instagram"/>
                        </a>
                        <a href='https://www.tiktok.com/@cifpcarlos3' target='_blank'>
                            <img className='redesSociales mr-2' src={logoTiktok} alt="Link a la red social TikTok"/>
                        </a>
                        <a href='https://www.youtube.com/c/cifpcarlosiiicartagena' target='_blank'>
                            <img className='redesSociales' src={logoYoutube} alt="Link a la red social Youtube"/>
                        </a>
                    </div>
                </div>
                <hr />
                <div className='row pb-3'>
                    <div className='col-5 mx-auto'>
                        <div className='row'>
                            <div className='col-2 text-right'>
                                <img className='logoFooter' src={logoMPFPPie} alt="" />
                            </div>
                            <div className='col-10 colorBlanquecino'>
                                <span className='negrita'>Marca Personal FP</span>
                                <span className='parrafoFooter'> | Diseño Web CFGS Desarrollo de Aplicaciones Web</span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
