import { useEffect, useState } from 'react';
import { getAllProyectos } from '../servicios/posts/getAllProyectos';


function useProyectos(){

    const [listaProyectos, setListaProyectos] = useState([]);

    function obtenerDatos(){

        getAllProyectos().then(posts => {
    
            setListaProyectos(posts);
    
        });
    }

    useEffect(obtenerDatos, []);

    return {listaProyectos};
};

export default useProyectos;
