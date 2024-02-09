import { useEffect, useState } from 'react';
import { getAllProyectos } from '../servicios/posts/getAllProyectos';


function useProyectos(){

    const [listaProyectos, setListaProyectos] = useState([]);

    const [buscando, setBuscando] = useState(true);

    function obtenerDatos(){

        setBuscando(false);

        getAllProyectos().then(posts => {
    
            setListaProyectos(posts);
    
        });
    }

    useEffect(obtenerDatos, []);

    return {listaProyectos, buscando};
};

export default useProyectos;
