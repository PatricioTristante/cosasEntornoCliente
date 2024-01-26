import React from 'react';
import imagenLoader from '../../assets/Spinner-0.7s-200px.gif'
import './AjaxLoader.css';

function AjaxLoader(){
    return (
        <div className='ajaxLoader'>
            <img src={imagenLoader} alt="ajax-loader"/>
        </div>
    );
};

export default AjaxLoader;
