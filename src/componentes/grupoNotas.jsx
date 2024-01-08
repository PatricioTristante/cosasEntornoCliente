import Nota from "./nota"
import notas from '../mock-notas'
import { useState } from "react";


function GrupoNotas() {

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
        {filtrar ? (notas.filter(esImportante)).map(muestraNota) : notas.map(muestraNota)}
      </ul>
    </div>
  )
}

export default GrupoNotas
