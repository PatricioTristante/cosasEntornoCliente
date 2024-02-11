import { useEffect, useState } from 'react';
import { getAllALumnos } from '../servicios/posts/getAllAlumnos';

function useAlumnos(){

    const [listaAlumnos, setListaAlumnos] = useState([]);

    const [buscando, setBuscando] = useState(true);

    function obtenerAlumnos(){

        setBuscando(false);

        getAllALumnos().then(posts => {
    
            setListaAlumnos(posts);
    
        });
    }

    useEffect(obtenerAlumnos, []);

    return {listaAlumnos, buscando};
};

export default useAlumnos;
