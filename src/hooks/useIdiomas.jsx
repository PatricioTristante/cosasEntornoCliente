import { useEffect, useState } from 'react';
import { getAllIdiomas } from '../servicios/posts/getAllIdiomas';

function useIdiomas(){

    const [listaIdiomas, setListaIdiomas] = useState([]);

    function obtenerDatos(){

        getAllIdiomas().then(posts => {
    
            setListaIdiomas(posts);
    
        });
    }

    useEffect(obtenerDatos, []);

    return {listaIdiomas};
};

export default useIdiomas;
