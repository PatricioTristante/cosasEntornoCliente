import React, { useContext } from "react";
import BotonTema from "./BotonTema";
import temas from "../mock-temas";
import TemaContext from "../contextos/TemaContext";

const BarraHeramientas = () => {
    const tema = useContext(TemaContext);
    let temaElegido;
    
    if (tema === temas.light) {
      temaElegido = "light";
    }else{
      temaElegido = "dark";
    }

    return (
      <div>
        <BotonTema etiqueta="Archivo"></BotonTema>
        <BotonTema etiqueta="Editar"></BotonTema>
        <BotonTema etiqueta="Terminal"></BotonTema>
        <p>{temaElegido}</p>
      </div>
    );
  }

  export default BarraHeramientas;
  