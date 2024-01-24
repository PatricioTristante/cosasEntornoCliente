import { useEffect, useState } from 'react';
import { getAllPosts } from '../servicios/posts/getAllPosts';

function usePost() {

    const [buscando, setBuscando] = useState(false);

    const [listaPost, setListaPost] = useState([]);

    function obtenerPosts(){

        setBuscando(true);
    
        getAllPosts().then(posts => {
    
            setListaPost(posts);

            setBuscando(false);
    
        });
    }

    useEffect(obtenerPosts, []);

    return {buscando, listaPost};
}

export default usePost;