
function TotalEjercicios(props) {
    let total = 0;
    for (let i = 0; i < props.ejercicios.length; i++) {
        total += props.ejercicios[i];
    }
    return(
        <p>Numero de ejercicios {total}</p>
    )
}

export default TotalEjercicios