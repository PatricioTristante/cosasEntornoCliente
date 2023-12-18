import { useContext } from "react"
import NotasContext from "../contextos/notasContext"

function Nota(props) {

    return (
       <li>
           <p>{props.nota.contenido} <span className="peligro">{props.nota.importante === true ? "(Importante)" : ""}</span></p>
           <p>{props.nota.fecha}</p>
       </li>
    )
  }
  
  export default Nota
  