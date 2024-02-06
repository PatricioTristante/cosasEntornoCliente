import { useEffect, useState } from 'react';
import { getAllFamiliasProfesionales } from '../servicios/posts/getAllFamiliasProfesionales';

function useFamiliasProfesionales(){

    const [listaFamiliasProfesionales, setListaFamiliasProfesionales] = useState([]);

    function obtenerDatos(){

        getAllFamiliasProfesionales().then(posts => {
    
            setListaFamiliasProfesionales(posts);
    
        });
    }

    useEffect(obtenerDatos, []);

    return {listaFamiliasProfesionales};
};

export default useFamiliasProfesionales;
