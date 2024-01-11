import { useState } from "react";

function FrutaForm(props) {

    const FRUTAINICIAL= "";
    

    const NUEVAFRUTA  = "nuevaFruta";
    const QUITARFRUTA = "quitarFruta";

    const [nuevaFruta, setnuevaFruta] = useState(FRUTAINICIAL);
    const [quitarFruta, setQuitarFruta] = useState(FRUTAINICIAL);


    function asignarFruta(event){

        switch(event.target.id) {

            case NUEVAFRUTA: setnuevaFruta(event.target.value);
                         break;

            case QUITARFRUTA: setQuitarFruta(event.target.value);
                         break;
            default: break;
        }
    }

    function formCrearFruta(event) {

        event.preventDefault();

        props.añadirFruta(nuevaFruta);

        setnuevaFruta(FRUTAINICIAL);

        setQuitarFruta(FRUTAINICIAL);
    }

    function formQuitarFruta(event) {
        
        event.preventDefault();

        props.quitarFruta(quitarFruta);

        setnuevaFruta(FRUTAINICIAL);

        setQuitarFruta(FRUTAINICIAL);

    }


    return(
        <div>
            <form id="formularioAñadir" onSubmit={formCrearFruta}>
                    <label>Escribe la fruta a añadir</label> 
                    <input id={NUEVAFRUTA} type="text" onChange={asignarFruta} value={nuevaFruta}></input><br></br>
                    <button>Añadir Fruta</button>
            </form>
            <br />
            <form id="formularioQuitar" onSubmit={formQuitarFruta}>
                    <label>Escribe la fruta a quitar</label> 
                    <input id={QUITARFRUTA} type="text" onChange={asignarFruta} value={quitarFruta}></input><br></br>
                    <button>Quitar Fruta</button>
            </form>
        </div>
    )
}

export default FrutaForm;