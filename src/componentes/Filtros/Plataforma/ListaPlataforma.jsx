import Plataforma from "./Plataforma";
import plataforma from "../../mocks/mock-plataforma";

function ListaPlataforma(props) {

    function manejarAccion(evento) {
        props.alterarPlataformaElegida(evento.target.value);
    }
    
    function mostrarPlataforma(laPlataforma) {
        return <Plataforma key={plataforma.indexOf(laPlataforma)} plataforma={laPlataforma}></Plataforma>
    }

    return(
        <div className='plataforma'>
          <span>Plataforma</span>
          <br />
          <select size={3} className="listaPlataforma" value={props.generoElegido} onChange={manejarAccion}>
            {plataforma.map(mostrarPlataforma)}
          </select>
        </div>
    )
}

export default ListaPlataforma