import Nota from "./nota"
import { useState } from "react"


function GrupoNotas(props) {

  const [filtrar, setFiltrar] = useState(false);

  function muestraNota(nota) {
    return <Nota key={nota.id} nota={nota}></Nota>;
  }

  function esImportante(nota) {
    return nota.importante === true;
  }

  function filtrarImportantes() {
      setFiltrar(filtrar => !filtrar);
  }

  return (
    <div>
      <button onClick={filtrarImportantes}>{filtrar ? "Mostrar Todos" : "Mostrar Importantes"}</button>
      <ul>
        {filtrar ? (props.notas.filter(esImportante)).map(muestraNota) : props.notas.map(muestraNota)}
      </ul>
    </div>
  )
}

export default GrupoNotas
