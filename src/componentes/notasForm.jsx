import { useState } from "react";

function NotasForm(props) {

    const NOTAINICIAL = {
        id: '',
        contenido: '',
        fecha: '',
        importante: false
    };

    const [nuevaNota, setNuevaNota] = useState(NOTAINICIAL);

    nuevaNota.id = props.nuevoID;



    const CONTENIDO = 'contenido';
    const FECHA = 'fecha';
    const IMPORTANCIA = 'importancia';

    function asignarNota(event){

        switch(event.target.id) {

            case CONTENIDO: setNuevaNota({...nuevaNota,
                                        contenido:event.target.value});
                        break;

            case FECHA: setNuevaNota({...nuevaNota,
                                        fecha:event.target.value});
                        break;
            
            case "noImportante": setNuevaNota({...nuevaNota,
                                        importante: false});
                        break;
            case "importante": setNuevaNota({...nuevaNota,
                                        importante: true});
                        break;

            default: break;
        }
    }

    //TODO Hacer que añada el elemento a la lista

    function manejarFormulario(event) {

        event.preventDefault();

        props.añadirNota(nuevaNota);

        setNuevaNota(NOTAINICIAL);
    }

    return (
        <form id="formulario" onSubmit={manejarFormulario}>
            <label htmlFor={CONTENIDO}>Contenido</label> 
            <input id={CONTENIDO} className={CONTENIDO} type="text" onChange={asignarNota} value={nuevaNota.contenido}></input><br></br>
            <label>Fecha</label>
            <input id={FECHA} className={FECHA} type="date" onChange={asignarNota} value={nuevaNota.fecha}></input><br></br>
            <p>Importancia</p>
            <label htmlFor="importante">Importante</label>
            <input type="radio" onChange={asignarNota} name={IMPORTANCIA} id="importante"/>
            <label htmlFor="noImportante">No Importante</label>
            <input type="radio" onChange={asignarNota} name={IMPORTANCIA} id="noImportante" defaultChecked/>
            <br />
            <br />
            <button>Añadir Nota</button> 
        </form>
    )
  }
  
export default NotasForm
  