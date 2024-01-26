import React from 'react';
import imagenLoader from '../../assets/Spinner-0.7s-200px.gif'

function AjaxLoader(){
    return (
        <div>
            <img src={imagenLoader} alt="ajax-loader"/>
        </div>
    );
};

export default AjaxLoader;
