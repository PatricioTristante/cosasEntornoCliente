import Apartado from './apartado';

function Tema(props) {

    function muestraApartado(apartado) {
        return <Apartado key={apartado.id} parts={apartado}></Apartado>;
    }

    function sumarEjercicios(total, numero) {
        return total + numero.exercises;
    }

    return (
        <li>
            <p>{props.tema.name}</p>
            <ol>
                {props.tema.parts.map(muestraApartado)}
            </ol>
            <p>Total de ejercicios en curso: {props.tema.parts.reduce(sumarEjercicios, 0)}</p>
        </li>
    )
}

export default Tema
