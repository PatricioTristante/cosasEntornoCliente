import { useEffect, useState } from 'react';
import { getAllPosts } from '../servicios/posts/getAllPosts';

function useGame() {

    const [buscando, setBuscando] = useState(false);

    const [listaJuegos, setListaJuegos] = useState([]);

    function obtenerJuegos(){

        setBuscando(true);
    
        getAllPosts().then(posts => {
    
            setListaJuegos(posts);

            setBuscando(false);
    
        });
    }

    useEffect(obtenerJuegos, []);

    return {buscando, listaJuegos};
}

export default useGame;