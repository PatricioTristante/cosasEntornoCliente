import { useEffect, useState } from 'react';
import { getAllPerfilesCompetenciales } from '../servicios/posts/getAllPerfilesCompetenciales';

function usePerfilesCompetenciales(){

    const [listaPerfilesCompetenciales, setListaPerfilesCompetenciales] = useState([]);

    function obtenerPerfilesCompetenciales(){

        getAllPerfilesCompetenciales().then(posts => {
    
            setListaPerfilesCompetenciales(posts);
    
        });
    }

    useEffect(obtenerPerfilesCompetenciales, []);

    return {listaPerfilesCompetenciales};
};

export default usePerfilesCompetenciales;
