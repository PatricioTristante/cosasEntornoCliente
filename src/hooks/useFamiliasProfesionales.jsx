import { useEffect, useState } from 'react';
import { getAllFamiliasProfesionales } from '../servicios/posts/getAllFamiliasProfesionales';

function useFamiliasProfesionales(){

    const [listaFamiliasProfesionales, setListaFamiliasProfesionales] = useState([]);

    function obtenerFamiliasProfesionales(){

        getAllFamiliasProfesionales().then(posts => {
    
            setListaFamiliasProfesionales(posts);
    
        });
    }

    useEffect(obtenerFamiliasProfesionales, []);

    return {listaFamiliasProfesionales};
};

export default useFamiliasProfesionales;
