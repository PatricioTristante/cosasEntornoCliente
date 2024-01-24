import Genero from "./Genero";
import genero from "../../mocks/mock-genero";

function ListaGenero(props) {

    function manejarAccion(evento) {
        props.alterarGeneroElegido(evento.target.value);
    }
    
    function mostrarGeneros(elGenero) {
        return <Genero key={genero.indexOf(elGenero)} genero={elGenero}></Genero>
    }

    return(
        <div className='genero'>
          <span>Género</span>
          <br />
          <select size={3} className="listaGenero" value={props.generoElegido} onChange={manejarAccion}>
            {genero.map(mostrarGeneros)}
          </select>
        </div>
    )
}

export default ListaGenero