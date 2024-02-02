import { useEffect, useState } from 'react';
import { getAllDatos } from '../servicios/posts/getAllDatos';

function useDatos(){

    const [listaDatos, setListaDatos] = useState([]);

    function obtenerDatos(){

        getAllDatos().then(posts => {
    
            setListaDatos(posts);
    
        });
    }

    useEffect(obtenerDatos, []);

    return {listaDatos};
};

export default useDatos;
